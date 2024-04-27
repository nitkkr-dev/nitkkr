'use client';

import Link, { type LinkProps } from 'next/link';
import { useEffect, useState } from 'react';

export interface DownloadLinkProps extends Omit<LinkProps, 'href'> {
  children: React.ReactNode;
  className?: string;
  content: string;
  fileName: string;
  fileType: string;
}

export function DownloadLink({
  children,
  content,
  fileName,
  fileType,
  ...props
}: DownloadLinkProps) {
  const [fileURL, setFileURL] = useState<string | null>(null);

  const [name, extension] = fileName.split('.');
  const fileNameWithDate = `${name}-${new Date().toISOString()}.${extension}`;

  useEffect(() => {
    const file = new File([content], fileNameWithDate, { type: 'text/csv' });
    const url = URL.createObjectURL(file);
    setFileURL(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [content, fileName]);

  return (
    <Link href={fileURL ?? ''} {...props}>
      {children}
    </Link>
  );
}
