import {
  type ChainedCommands,
  mergeAttributes,
  Node,
  type RawCommands,
} from '@tiptap/react';

/**
 * Custom TipTap Video node extension.
 * Renders a <video> element with controls and supports S3-hosted sources.
 */
export const CustomVideo = Node.create({
  name: 'video',
  group: 'block',
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      src: { default: null },
      controls: { default: true },
      autoplay: { default: false },
      loop: { default: false },
      muted: { default: false },
      'data-s3-key': { default: null },
      'data-upload-status': { default: null },
    };
  },

  parseHTML() {
    return [{ tag: 'video' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'video',
      mergeAttributes(HTMLAttributes, {
        controls: true,
        style: 'max-width:100%;height:auto;border-radius:8px;',
      }),
    ];
  },

  addCommands() {
    return {
      setVideo:
        (attrs: Record<string, unknown>) =>
        ({ chain }: { chain: () => ChainedCommands }) => {
          return chain().insertContent({ type: this.name, attrs }).run();
        },
    } as unknown as Partial<RawCommands>;
  },
});
