import { Input } from '@/components/ui/input';

export function FileUpload({ label = 'Upload File', required = false }) {
  return <Input type="file" id="file" label={label} required={required} />;
}
