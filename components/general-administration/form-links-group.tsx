import FormLinkItem from '~/components/general-administration/form-link-item';

export default function FormLinksGroup({
  items,
}: {
  items: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <FormLinkItem key={item.href} href={item.href} label={item.label} />
      ))}
    </ul>
  );
}
