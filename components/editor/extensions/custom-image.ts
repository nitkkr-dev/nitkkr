import Image from '@tiptap/extension-image';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import type { Editor } from '@tiptap/react';
import type { Node as ProseMirrorNode } from '@tiptap/pm/model';

import { uploadNotificationMedia } from '~/server/actions/notification-uploads';

/**
 * Custom TipTap Image extension that handles:
 * - Paste events (auto-upload pasted images to S3)
 * - Drag-and-drop events (auto-upload dropped images to S3)
 * - Tracking S3 key and upload state via custom attributes
 */
export const CustomImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      /** S3 object key for tracking storage location */
      'data-s3-key': { default: null },
      /** Upload state: 'uploading' | 'error' | null (complete) */
      'data-upload-status': { default: null },
    };
  },

  addProseMirrorPlugins() {
    const editor = this.editor;

    return [
      new Plugin({
        key: new PluginKey('customImageUpload'),
        props: {
          handlePaste(_view, event) {
            const items = event.clipboardData?.items;
            if (!items) return false;

            for (const item of Array.from(items)) {
              if (item.type.startsWith('image/')) {
                event.preventDefault();
                const file = item.getAsFile();
                if (file) void handleImageUpload(editor, file);
                return true;
              }
            }
            return false;
          },

          handleDrop(_view, event) {
            const files = event.dataTransfer?.files;
            if (!files || files.length === 0) return false;

            const imageFiles = Array.from(files).filter((f) =>
              f.type.startsWith('image/')
            );
            if (imageFiles.length === 0) return false;

            event.preventDefault();
            for (const file of imageFiles) {
              void handleImageUpload(editor, file);
            }
            return true;
          },
        },
      }),
    ];
  },
});

/**
 * Upload an image file to S3 and insert it into the editor.
 * Shows a placeholder during upload and replaces it on completion.
 */
async function handleImageUpload(editor: Editor, file: File) {
  // Insert placeholder image
  const placeholderUrl = URL.createObjectURL(file);
  const placeholderId = `upload-${Date.now()}`;

  editor
    .chain()
    .focus()
    .insertContent({
      type: 'image',
      attrs: {
        src: placeholderUrl,
        alt: 'Uploading...',
        'data-upload-status': 'uploading',
        'data-s3-key': placeholderId,
      },
    })
    .run();

  try {
    const formData = new FormData();
    formData.append('file', file);

    const result = await uploadNotificationMedia(formData);

    if (!result.success || !result.url) {
      // Mark as error
      replacePlaceholder(editor, placeholderId, {
        src: placeholderUrl,
        alt: 'Upload failed',
        'data-upload-status': 'error',
        'data-s3-key': placeholderId,
      });
      return;
    }

    // Replace placeholder with uploaded image
    replacePlaceholder(editor, placeholderId, {
      src: result.url,
      alt: file.name,
      'data-upload-status': null,
      'data-s3-key': result.key ?? null,
    });
  } catch {
    replacePlaceholder(editor, placeholderId, {
      src: placeholderUrl,
      alt: 'Upload failed',
      'data-upload-status': 'error',
      'data-s3-key': placeholderId,
    });
  }
}

/** Find the placeholder node by its data-s3-key and replace its attributes */
function replacePlaceholder(
  editor: Editor,
  placeholderId: string,
  attrs: Record<string, unknown>
) {
  const { state, view } = editor;
  const { tr } = state;
  let found = false;

  state.doc.descendants((node: ProseMirrorNode, pos: number) => {
    if (found) return false;
    if (
      node.type.name === 'image' &&
      (node.attrs as Record<string, unknown>)['data-s3-key'] === placeholderId
    ) {
      Object.entries(attrs).forEach(([key, value]) => {
        tr.setNodeAttribute(pos, key, value);
      });
      found = true;
      return false;
    }
  });

  if (found) {
    view.dispatch(tr);
  }
}

export { handleImageUpload };
