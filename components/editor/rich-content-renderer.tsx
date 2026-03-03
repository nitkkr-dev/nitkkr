'use client';

import { type JSONContent } from '@tiptap/react';

// ─── Types ───────────────────────────────────────────────────────────

interface RichContentRendererProps {
  /** TipTap JSON content to render */
  content: JSONContent;
  className?: string;
}

// ─── Component ───────────────────────────────────────────────────────

/**
 * Renders stored TipTap JSON content as formatted HTML.
 * Handles headings, paragraphs, lists, images, videos, links, and text marks.
 */
export function RichContentRenderer({
  content,
  className,
}: RichContentRendererProps) {
  return (
    <div className={className}>
      {content.content?.map((node, i) => <RenderNode key={i} node={node} />)}
    </div>
  );
}

// ─── Recursive node renderer ─────────────────────────────────────────

function RenderNode({ node }: { node: JSONContent }) {
  switch (node.type) {
    case 'heading':
      return <RenderHeading node={node} />;
    case 'paragraph':
      return <RenderParagraph node={node} />;
    case 'bulletList':
      return (
        <ul className="my-2 list-disc space-y-1 pl-6">
          {node.content?.map((child, i) => <RenderNode key={i} node={child} />)}
        </ul>
      );
    case 'orderedList':
      return (
        <ol className="my-2 list-decimal space-y-1 pl-6">
          {node.content?.map((child, i) => <RenderNode key={i} node={child} />)}
        </ol>
      );
    case 'listItem':
      return (
        <li className="my-0.5">
          {node.content?.map((child, i) => <RenderNode key={i} node={child} />)}
        </li>
      );
    case 'image':
      return <RenderImage node={node} />;
    case 'video':
      return <RenderVideo node={node} />;
    case 'blockquote':
      return (
        <blockquote className="my-2 border-l-4 border-primary-300 pl-4 italic text-neutral-600">
          {node.content?.map((child, i) => <RenderNode key={i} node={child} />)}
        </blockquote>
      );
    case 'hardBreak':
      return <br />;
    case 'horizontalRule':
      return <hr className="my-4 border-neutral-200" />;
    default:
      // For unknown node types, try rendering children
      if (node.content) {
        return (
          <>
            {node.content.map((child, i) => (
              <RenderNode key={i} node={child} />
            ))}
          </>
        );
      }
      return null;
  }
}

// ─── Heading ─────────────────────────────────────────────────────────

function RenderHeading({ node }: { node: JSONContent }) {
  const level = Number(node.attrs?.level ?? 1);
  const align = (node.attrs?.textAlign as string) ?? undefined;
  const style = align
    ? { textAlign: align as React.CSSProperties['textAlign'] }
    : undefined;

  const children = <RenderInline content={node.content} />;

  switch (level) {
    case 1:
      return (
        <h1 className="my-3 text-2xl font-bold text-neutral-900" style={style}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className="my-2 text-xl font-bold text-neutral-900" style={style}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className="my-2 text-lg font-semibold text-neutral-800"
          style={style}
        >
          {children}
        </h3>
      );
    default:
      return (
        <h4
          className="my-2 text-base font-semibold text-neutral-800"
          style={style}
        >
          {children}
        </h4>
      );
  }
}

// ─── Paragraph ───────────────────────────────────────────────────────

function RenderParagraph({ node }: { node: JSONContent }) {
  const align = (node.attrs?.textAlign as string) ?? undefined;
  const style = align
    ? { textAlign: align as React.CSSProperties['textAlign'] }
    : undefined;

  return (
    <p className="my-1 leading-relaxed text-neutral-900" style={style}>
      <RenderInline content={node.content} />
    </p>
  );
}

// ─── Image ───────────────────────────────────────────────────────────

function RenderImage({ node }: { node: JSONContent }) {
  const src = node.attrs?.src as string | undefined;
  const alt = (node.attrs?.alt as string) ?? '';
  if (!src) return null;

  return (
    <figure className="my-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-auto max-w-full rounded-md"
        loading="lazy"
      />
    </figure>
  );
}

// ─── Video ───────────────────────────────────────────────────────────

function RenderVideo({ node }: { node: JSONContent }) {
  const src = node.attrs?.src as string | undefined;
  if (!src) return null;

  return (
    <figure className="my-3">
      <video
        src={src}
        controls
        className="h-auto max-w-full rounded-md"
        preload="metadata"
      />
    </figure>
  );
}

// ─── Inline text with marks ──────────────────────────────────────────

function RenderInline({ content }: { content?: JSONContent[] }) {
  if (!content) return null;

  return (
    <>
      {content.map((node, i) => {
        if (node.type === 'hardBreak') return <br key={i} />;

        if (node.type === 'text') {
          let element: React.ReactNode = <>{node.text}</>;

          if (node.marks) {
            for (const mark of node.marks) {
              switch (mark.type) {
                case 'bold':
                  element = <strong key={`b-${i}`}>{element}</strong>;
                  break;
                case 'italic':
                  element = <em key={`i-${i}`}>{element}</em>;
                  break;
                case 'underline':
                  element = <u key={`u-${i}`}>{element}</u>;
                  break;
                case 'link': {
                  const href = mark.attrs?.href as string | undefined;
                  element = (
                    <a
                      key={`a-${i}`}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-700 underline hover:text-primary-900"
                    >
                      {element}
                    </a>
                  );
                  break;
                }
                case 'code':
                  element = (
                    <code
                      key={`c-${i}`}
                      className="font-mono rounded bg-neutral-100 px-1.5 py-0.5 text-sm"
                    >
                      {element}
                    </code>
                  );
                  break;
              }
            }
          }

          return <span key={i}>{element}</span>;
        }

        // Handle inline nodes that are not text (unlikely but safe)
        return <RenderNode key={i} node={node} />;
      })}
    </>
  );
}
