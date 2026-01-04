// Modals are user-specific or real-time - never cache
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default function ModalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
