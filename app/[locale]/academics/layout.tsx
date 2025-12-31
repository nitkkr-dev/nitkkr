// Academic pages are semi-static - revalidate every 5 minutes
export const revalidate = 300;

export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
