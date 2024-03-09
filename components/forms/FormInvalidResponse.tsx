export default function FormInvalidResponse({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{content}</p>
    </section>
  );
}
