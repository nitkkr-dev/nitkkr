'use client';
import React, { forwardRef } from 'react';

import { Input, type InputProps } from '~/components/ui/input';

const FileUpload = forwardRef<HTMLInputElement, InputProps>(
  ({ label = 'Upload File', ...props }, ref) => {
    return (
      <Input
        type="file"
        id="file"
        label={label}
        inputClassName="p-1"
        {...props}
        ref={ref}
      />
    );
  }
);
FileUpload.displayName = 'FileUpload';
export default FileUpload;
