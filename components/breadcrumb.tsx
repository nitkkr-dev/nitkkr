import React from 'react';
import Link from 'next/link';

interface Breadcrumb {
  link?: string;
  label: string;
  textColor?: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumbs py-3">
      {breadcrumbs.map((breadcrumb, index) => (
        <span
          key={breadcrumb.label}
          className="font-sans text-xl font-medium text-neutral-700"
        >
          {index > 0 && <span className="separator mx-2 text-2xl">&gt;</span>}
          {breadcrumb.link ? (
            <Link href={breadcrumb.link}>{breadcrumb.label}</Link>
          ) : (
            <span className={breadcrumb.textColor}>{breadcrumb.label}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
