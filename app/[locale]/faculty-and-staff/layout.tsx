// Faculty pages are semi-static - revalidate every 5 minutes
export const revalidate = 300;

export default function FacultyAndStaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
