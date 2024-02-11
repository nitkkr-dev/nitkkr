import { Input, InputProps } from '@/components/ui/input';

export function FileUpload({ label = 'Upload File', ...props }: InputProps) {
  return <Input type="file" id="file" label={label} {...props} />;
}
