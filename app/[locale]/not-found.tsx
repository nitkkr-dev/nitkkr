import Link from 'next/link';

export default function NotFound({ params }: { params: { locale: string } }) {
  if (params === undefined) return null;

  return (
    <div className="m-auto max-w-fit text-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
