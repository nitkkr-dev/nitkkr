import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

import { Input, InputProps } from '@/components/ui/input';

const FileUpload = forwardRef<HTMLInputElement, InputProps>(
  ({ label = 'Upload File', ...props }: InputProps, ref) => {
    return <Input type="file" id="file" label={label} {...props} ref={ref} />;
  }
);
FileUpload.displayName = 'FileUpload';
export default FileUpload;
