import React from 'react';
import Link from 'next/link';
import TemplateComponentProps from '@/templates/props';
import PDFTemplate from './PDFTemplate';

const ExportAsPDF = ({ data }: { data: TemplateComponentProps }) => {
  // Generate PDF with the question paper data
  const generatePDF = () => {
    return (
      <PDFTemplate data={data} />
    );
  };

  // Dummy function for storing the PDF in a S3 bucket 
  const storePDFInS3 = async () => {
    
    return (
      <Link href="#" target="_blank">
        View PDF from S3
      </Link>
    );
  };

  return (
    <div>
      {generatePDF()}
      {storePDFInS3()} 
    </div>
  );
};

export default ExportAsPDF;
