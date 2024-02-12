export default function Unauthorized({ locale }: { locale: string }) {
  return (
    <div className="m-auto max-w-fit text-center">
      <h2>Unauthorized!</h2>
      <p>You are unauthorized to view this</p>
    </div>
  );
}
