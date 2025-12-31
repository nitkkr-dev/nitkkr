// Institute pages are static - revalidate every hour
export const revalidate = 3600;

export default function InstituteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
