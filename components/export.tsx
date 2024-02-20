import Link from 'next/link';

import TemplateComponentProps from '@/templates/props';
import QuestionPaper from '@/templates/question-paper';

export const ExportAsPDF = async ({
  children,
  className,
  data,
}: {
  children: React.ReactNode;
  className?: string;
  data: TemplateComponentProps;
}) => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const htmlBody = ReactDOMServer.renderToStaticMarkup(
    <QuestionPaper data={data} />
  );

  // Generate PDF with the above HTML

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
