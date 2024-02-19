import Link from 'next/link';

import TemplateComponentProps from '@/templates/props';

export const ExportAsPDF = async ({
  children,
  className,
  data,
}: {
  children: React.ReactNode;
  className?: string;
  data: TemplateComponentProps;
}) => {
  // Generate PDF with the provided data

  // Store the PDF in a temporary cache on our S3 bucket

  return (
    <Link
      className={className}
      href={`https://blob.nitkkr.ac.in/cache/path/to/file.pdf`}
      target="_blank"
    >
      {children}
    </Link>
  );
};
