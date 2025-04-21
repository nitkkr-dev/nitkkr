import { WorkInProgressStatus } from "~/components/status";

export default function Cells({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <WorkInProgressStatus locale={locale} />;
}
