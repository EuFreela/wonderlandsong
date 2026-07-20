import type { ReactNode } from 'react';

/**
 * Renders plain text with optional markdown-style links: [label](https://…).
 * Links open in a new tab and use a clear underline + accent color.
 */
const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

const linkClassName =
  'font-medium text-[#9eb8ff] underline decoration-[#9eb8ff]/70 underline-offset-[3px] transition hover:text-[#c4d4ff] hover:decoration-[#c4d4ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9eb8ff]';

export function RichTextWithLinks({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    nodes.push(
      <a
        key={`link-${key++}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {label}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <span className={className}>{nodes.length > 0 ? nodes : text}</span>;
}

export const historyLinkClassName = linkClassName;
