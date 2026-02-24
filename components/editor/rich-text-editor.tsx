'use client';

import { useCallback, useRef, useState } from 'react';
import { EditorContent, type JSONContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaFileAlt,
  FaImage,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaUnderline,
  FaVideo,
} from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { cn } from '~/lib/utils';
import { uploadNotificationMedia } from '~/server/actions/notification-uploads';
import { uploadNotificationDocument } from '~/server/actions/notification-uploads';

import { CustomImage, handleImageUpload } from './extensions';
import { CustomVideo } from './extensions';

// ─── Types ───────────────────────────────────────────────────────────

interface RichTextEditorProps {
  /** Initial content as TipTap JSON */
  content?: JSONContent | null;
  /** Called whenever editor content changes */
  onChange?: (json: JSONContent) => void;
  /** Placeholder text */
  placeholder?: string;
}

// ─── Component ───────────────────────────────────────────────────────

export function RichTextEditor({
  content,
  onChange,
  placeholder = 'Start writing…',
}: RichTextEditorProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
      CustomImage,
      CustomVideo,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary-700 underline cursor-pointer',
          rel: 'noopener noreferrer',
          target: '_blank',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({ placeholder }),
    ],
    content: content ?? undefined,
    onUpdate: ({ editor: ed }) => {
      onChange?.(ed.getJSON());
    },
    editorProps: {
      attributes: {
        class:
          'min-h-[300px] w-full p-4 outline-none focus:outline-none [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:my-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:my-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:my-2 [&_p]:my-1 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-0.5 [&_a]:text-primary-700 [&_a]:underline [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-md [&_img]:my-2 [&_video]:max-w-full [&_video]:h-auto [&_video]:rounded-md [&_video]:my-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary-300 [&_blockquote]:pl-4 [&_blockquote]:italic',
      },
    },
  });

  // ── Image upload via file picker ────────────────────────────────────
  const handleImageSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!editor || !e.target.files?.length) return;
      setIsUploading(true);
      setUploadError(null);

      for (const file of Array.from(e.target.files)) {
        await handleImageUpload(editor, file);
      }

      setIsUploading(false);
      if (imageInputRef.current) imageInputRef.current.value = '';
    },
    [editor]
  );

  // ── Video upload via file picker ────────────────────────────────────
  const handleVideoSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!editor || !e.target.files?.length) return;
      setIsUploading(true);
      setUploadError(null);

      for (const file of Array.from(e.target.files)) {
        const formData = new FormData();
        formData.append('file', file);

        // Insert placeholder
        const placeholderUrl = URL.createObjectURL(file);
        (
          editor.commands as unknown as {
            setVideo: (attrs: Record<string, unknown>) => void;
          }
        ).setVideo({
          src: placeholderUrl,
          'data-upload-status': 'uploading',
          controls: true,
        });

        try {
          const result = await uploadNotificationMedia(formData);
          if (result.success && result.url) {
            // Replace the last inserted video placeholder
            const { state, view } = editor;
            const { tr } = state;
            let found = false;
            state.doc.descendants(
              (
                node: {
                  type: { name: string };
                  attrs: Record<string, unknown>;
                },
                pos: number
              ) => {
                if (found) return false;
                if (
                  node.type.name === 'video' &&
                  node.attrs['data-upload-status'] === 'uploading' &&
                  node.attrs.src === placeholderUrl
                ) {
                  tr.setNodeAttribute(pos, 'src', result.url!);
                  tr.setNodeAttribute(pos, 'data-s3-key', result.key ?? null);
                  tr.setNodeAttribute(pos, 'data-upload-status', null);
                  found = true;
                  return false;
                }
              }
            );
            if (found) view.dispatch(tr);
          } else {
            setUploadError(result.message);
          }
        } catch {
          setUploadError('Video upload failed.');
        }
      }

      setIsUploading(false);
      if (videoInputRef.current) videoInputRef.current.value = '';
    },
    [editor]
  );

  // ── Document upload → insert link ───────────────────────────────────
  const handleDocumentSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!editor || !e.target.files?.length) return;
      setIsUploading(true);
      setUploadError(null);

      for (const file of Array.from(e.target.files)) {
        const formData = new FormData();
        formData.append('file', file);

        try {
          const result = await uploadNotificationDocument(formData);
          if (result.success && result.url) {
            editor
              .chain()
              .focus()
              .insertContent(
                `<p><a href="${result.url}" target="_blank" rel="noopener noreferrer">📄 ${result.filename ?? file.name}</a></p>`
              )
              .run();
          } else {
            setUploadError(result.message);
          }
        } catch {
          setUploadError('Document upload failed.');
        }
      }

      setIsUploading(false);
      if (docInputRef.current) docInputRef.current.value = '';
    },
    [editor]
  );

  // ── Insert / edit hyperlink ─────────────────────────────────────────
  const handleInsertLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('Enter URL:', previousUrl ?? 'https://');

    if (url === null) return; // cancelled
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  // ── Toolbar helpers ─────────────────────────────────────────────────
  const ToolbarBtn = ({
    onClick,
    active = false,
    disabled = false,
    title,
    children,
  }: {
    onClick: () => void;
    active?: boolean;
    disabled?: boolean;
    title: string;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isUploading}
      title={title}
      className={cn(
        'rounded p-1.5 text-sm transition-colors',
        active
          ? 'bg-primary-700 text-shade-light'
          : 'text-neutral-700 hover:bg-neutral-200',
        (disabled || isUploading) && 'cursor-not-allowed opacity-40'
      )}
    >
      {children}
    </button>
  );

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-300">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-neutral-200 bg-neutral-50 px-2 py-1.5">
        {/* Text formatting */}
        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
          title="Bold"
        >
          <FaBold className="size-3.5" />
        </ToolbarBtn>
        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
          title="Italic"
        >
          <FaItalic className="size-3.5" />
        </ToolbarBtn>
        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive('underline')}
          title="Underline"
        >
          <FaUnderline className="size-3.5" />
        </ToolbarBtn>

        <div className="mx-1 h-5 w-px bg-neutral-300" />

        {/* Headings */}
        <ToolbarBtn
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          active={editor.isActive('heading', { level: 1 })}
          title="Heading 1"
        >
          <span className="text-xs font-bold">H1</span>
        </ToolbarBtn>
        <ToolbarBtn
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          active={editor.isActive('heading', { level: 2 })}
          title="Heading 2"
        >
          <span className="text-xs font-bold">H2</span>
        </ToolbarBtn>
        <ToolbarBtn
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          active={editor.isActive('heading', { level: 3 })}
          title="Heading 3"
        >
          <span className="text-xs font-bold">H3</span>
        </ToolbarBtn>

        <div className="mx-1 h-5 w-px bg-neutral-300" />

        {/* Lists */}
        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
          title="Bullet list"
        >
          <FaListUl className="size-3.5" />
        </ToolbarBtn>
        <ToolbarBtn
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
          title="Ordered list"
        >
          <FaListOl className="size-3.5" />
        </ToolbarBtn>

        <div className="mx-1 h-5 w-px bg-neutral-300" />

        {/* Alignment */}
        <ToolbarBtn
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          active={editor.isActive({ textAlign: 'left' })}
          title="Align left"
        >
          <FaAlignLeft className="size-3.5" />
        </ToolbarBtn>
        <ToolbarBtn
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          active={editor.isActive({ textAlign: 'center' })}
          title="Align center"
        >
          <FaAlignCenter className="size-3.5" />
        </ToolbarBtn>
        <ToolbarBtn
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          active={editor.isActive({ textAlign: 'right' })}
          title="Align right"
        >
          <FaAlignRight className="size-3.5" />
        </ToolbarBtn>
        <ToolbarBtn
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          active={editor.isActive({ textAlign: 'justify' })}
          title="Justify"
        >
          <FaAlignJustify className="size-3.5" />
        </ToolbarBtn>

        <div className="mx-1 h-5 w-px bg-neutral-300" />

        {/* Media inserts */}
        <ToolbarBtn
          onClick={() => imageInputRef.current?.click()}
          title="Insert image"
        >
          <FaImage className="size-3.5" />
        </ToolbarBtn>
        <ToolbarBtn
          onClick={() => videoInputRef.current?.click()}
          title="Insert video"
        >
          <FaVideo className="size-3.5" />
        </ToolbarBtn>
        <ToolbarBtn
          onClick={() => docInputRef.current?.click()}
          title="Attach document"
        >
          <FaFileAlt className="size-3.5" />
        </ToolbarBtn>
        <ToolbarBtn
          onClick={handleInsertLink}
          active={editor.isActive('link')}
          title="Insert/edit link"
        >
          <FaLink className="size-3.5" />
        </ToolbarBtn>

        {/* Upload indicator */}
        {isUploading && (
          <span className="ml-2 flex items-center gap-1 text-xs text-neutral-500">
            <AiOutlineLoading3Quarters className="size-3 animate-spin" />
            Uploading…
          </span>
        )}
      </div>

      {/* Hidden file inputs */}
      <input
        ref={imageInputRef}
        type="file"
        accept="image/jpeg,image/png,image/gif,image/webp"
        className="hidden"
        multiple
        onChange={handleImageSelect}
      />
      <input
        ref={videoInputRef}
        type="file"
        accept="video/mp4,video/webm"
        className="hidden"
        onChange={handleVideoSelect}
      />
      <input
        ref={docInputRef}
        type="file"
        accept=".pdf,.doc,.docx,.xls,.xlsx"
        className="hidden"
        onChange={handleDocumentSelect}
      />

      {/* Editor */}
      <EditorContent editor={editor} className="bg-shade-light" />

      {/* Upload error */}
      {uploadError && (
        <div className="flex items-center justify-between bg-error/10 px-3 py-2 text-sm text-error">
          <span>{uploadError}</span>
          <button
            type="button"
            onClick={() => setUploadError(null)}
            className="ml-2 text-xs font-medium underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Uploading overlay on images */}
      <style>{`
        .ProseMirror img[data-upload-status="uploading"] {
          opacity: 0.5;
          outline: 2px dashed #C5291D;
          outline-offset: 2px;
        }
        .ProseMirror img[data-upload-status="uploading"]::after {
          content: "Uploading…";
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.7);
          font-size: 0.75rem;
          color: #424242;
        }
        .ProseMirror img[data-upload-status="error"] {
          opacity: 0.6;
          outline: 2px solid #C5291D;
          outline-offset: 2px;
        }
        .ProseMirror video[data-upload-status="uploading"] {
          opacity: 0.5;
          outline: 2px dashed #C5291D;
          outline-offset: 2px;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #A8A8A8;
          pointer-events: none;
          height: 0;
        }
      `}</style>
    </div>
  );
}
