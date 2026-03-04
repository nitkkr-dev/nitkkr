import Link from 'next/link';
import { MdArticle } from 'react-icons/md';
import { eq } from 'drizzle-orm';

import { cn } from '~/lib/utils';
import { getTranslations } from '~/i18n/translations';
import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';
import {
  PackageBarChart,
  PercentageBarChart,
  PgPercentageAccordion,
  PlacementBarChart,
} from '~/components/charts';
import { db } from '~/server/db';
import { pgPlacementStats } from '~/server/db/schema/placement-stats-pg.schema';
import { ugPlacementStats } from '~/server/db/schema/placement-stats-ug.schema';

import {
  getPlacementStatsPdfs,
  getUniquePlacementSessions,
} from '../../placement-stats-map';

// Helper function to convert numeric strings to numbers
const toNum = (val: unknown): number => {
  const parsed = parseFloat(String(val));
  return isNaN(parsed) ? 0 : parsed;
};

export async function generateStaticParams() {
  const sessions = getUniquePlacementSessions();
  return sessions.map((session) => ({
    session,
    locale: 'en', // Add all supported locales here
  }));
}

export default async function PlacementStatsPage({
  params: { locale, session },
}: {
  params: { locale: string; session: string };
}) {
  const text = (await getTranslations(locale)).TrainingAndPlacement;
  const pdfs = getPlacementStatsPdfs(session);

  // Verify session exists in database - PG stats
  const pgSessionData = await db
    .select()
    .from(pgPlacementStats)
    .where(eq(pgPlacementStats.academicSession, session));

  // Fetch UG stats
  const ugSessionData = await db
    .select()
    .from(ugPlacementStats)
    .where(eq(ugPlacementStats.academicSession, session));

  if (!pdfs || (pgSessionData.length === 0 && ugSessionData.length === 0)) {
    return (
      <div className="container py-12">
        <Heading glyphDirection="rtl" heading="h2" text="Session Not Found" />
        <p className="text-base text-neutral-700">
          The academic session {session} is not available.
        </p>
        <Link
          href={`/${locale}/training-and-placement`}
          className="mt-4 inline-block text-primary-700 hover:underline"
        >
          Back to Training & Placement
        </Link>
      </div>
    );
  }

  return (
    <>
      <ImageHeader
        title={`Academic Session ${session}`}
        headings={[
          { label: text.headings.ugStatistics, href: '#ug-statistics' },
          { label: text.headings.pgStatistics, href: '#pg-statistics' },
          { label: text.headings.stats, href: '#placement-reports' },
        ]}
        src="training-and-placement/header.jpg"
      />

      {/* UG Statistics Section */}
      {ugSessionData.length > 0 && (
        <section className="container" id="ug-statistics">
          <Heading
            glyphDirection="rtl"
            heading="h3"
            text={text.headings.ugStatistics}
          />
          <div className="mt-8 space-y-12">
            {/* Placement Numbers Chart */}
            <Heading
              glyphDirection="ltr"
              heading="h4"
              text={text.charts.placementDistribution}
            />
            <div className="rounded-lg border border-primary-500 bg-shade-light p-4 md:p-6">
              <PlacementBarChart
                data={ugSessionData.map((item) => ({
                  programme: item.programme,
                  numberOfEligible: item.numberOfEligible,
                  numberOfPlaced: item.numberOfPlaced,
                  numberOfOffers: item.numberOfOffers,
                }))}
              />
            </div>

            {/* Package Chart */}
            <Heading
              glyphDirection="ltr"
              heading="h4"
              text={text.charts.packageStatistics}
            />
            <div className="rounded-lg border border-primary-500 bg-shade-light p-4 md:p-6">
              <PackageBarChart
                data={ugSessionData.map((item) => ({
                  programme: item.programme,
                  medianPackage: toNum(item.medianPackage),
                  averagePackage: toNum(item.averagePackage),
                  highestPackage: toNum(item.highestPackage),
                  lowestPackage: toNum(item.lowestPackage),
                }))}
              />
            </div>

            {/* Percentage Placement Chart */}
            <Heading
              glyphDirection="ltr"
              heading="h4"
              text={text.charts.placementPercentage}
            />
            <div className="rounded-lg border border-primary-500 bg-shade-light p-4 md:p-6">
              <PercentageBarChart
                data={ugSessionData.map((item) => ({
                  programme: item.programme,
                  percentagePlaced: toNum(item.percentagePlaced) || 0,
                  eligible: item.numberOfEligible,
                  placed: item.numberOfPlaced,
                }))}
              />
            </div>
          </div>
        </section>
      )}

      {/* PG Statistics Section */}
      {pgSessionData.length > 0 && (
        <section className="container" id="pg-statistics">
          <Heading
            glyphDirection="rtl"
            heading="h3"
            text={text.headings.pgStatistics}
          />
          <div className="mt-8 space-y-12">
            {/* Placement Numbers Chart */}
            <Heading
              glyphDirection="ltr"
              heading="h4"
              text={text.charts.placementDistribution}
            />
            <div className="rounded-lg border border-primary-500 bg-shade-light p-4 md:p-6">
              <PlacementBarChart
                data={pgSessionData.map((item) => ({
                  programme: item.programme,
                  numberOfEligible: item.numberOfEligible,
                  numberOfPlaced: item.numberOfPlaced,
                  numberOfOffers: item.numberOfOffers,
                }))}
              />
            </div>

            {/* Package Chart */}
            <Heading
              glyphDirection="ltr"
              heading="h4"
              text={text.charts.packageStatistics}
            />
            <div className="rounded-lg border border-primary-500 bg-shade-light p-4 md:p-6">
              <PackageBarChart
                data={pgSessionData.map((item) => ({
                  programme: item.programme,
                  medianPackage: toNum(item.medianPackage),
                  averagePackage: toNum(item.averagePackage),
                  highestPackage: toNum(item.highestPackage),
                  lowestPackage: toNum(item.lowestPackage),
                }))}
              />
            </div>

            {/* Percentage Placement Chart — accordion grouped by discipline */}
            <Heading
              glyphDirection="ltr"
              heading="h4"
              text={text.charts.placementPercentageByDiscipline}
            />
            <div className="rounded-lg border border-primary-500 bg-shade-light p-4 md:p-6">
              <PgPercentageAccordion
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                data={(() => {
                  interface DisciplineGroup {
                    eligible: number;
                    placed: number;
                    programmes: {
                      programme: string;
                      eligible: number;
                      placed: number;
                      percentagePlaced: number;
                    }[];
                  }

                  const groups = pgSessionData.reduce<
                    Map<string, DisciplineGroup>
                  >((map, item) => {
                    const progEligible = item.numberOfEligible;
                    const progPlaced = item.totalNumberOfPlaced;

                    const group = map.get(item.discipline) ?? {
                      eligible: 0,
                      placed: 0,
                      programmes: [],
                    };

                    group.eligible += progEligible;
                    group.placed += progPlaced;

                    group.programmes.push({
                      programme: item.programme,
                      eligible: progEligible,
                      placed: progPlaced,
                      percentagePlaced:
                        progEligible > 0
                          ? (progPlaced / progEligible) * 100
                          : 0,
                    });

                    map.set(item.discipline, group);
                    return map;
                  }, new Map());

                  return Array.from(groups.entries()).map(
                    ([discipline, { eligible, placed, programmes }]) => ({
                      discipline,
                      programmes,
                      totalEligible: eligible,
                      totalPlaced: placed,
                      percentagePlaced:
                        eligible > 0 ? (placed / eligible) * 100 : 0,
                    })
                  );
                })()}
              />
            </div>
          </div>
        </section>
      )}

      <section className="container" id="placement-reports">
        <Heading
          glyphDirection="rtl"
          heading="h3"
          href="#placement-reports"
          text={text.headings.placementReports.toUpperCase()}
        />
        <article className="flex h-fit items-start justify-between rounded-xl">
          <section
            className={cn(
              'flex h-fit flex-1 flex-col rounded-b-xl bg-background/[0.6] lg:w-[65%]',
              'shadow-[0px_4px_0px_#C5291D_inset] lg:shadow-[0px_8px_0px_#C5291D_inset,_-12px_22px_60px_rgba(0,_43,_91,_0.15)]',
              'rounded-t-xl drop-shadow-2xl',
              'p-3 sm:p-4 md:p-5 lg:px-6 lg:pt-8 xl:px-8'
            )}
          >
            <ol className="space-y-2 sm:space-y-4 md:space-y-6">
              {pdfs.map((pdf) => (
                <li key={pdf.url} className="flex items-start gap-2">
                  <MdArticle className="mt-0.5 size-4 shrink-0 text-primary-700 sm:mt-1 md:size-5 lg:size-6" />
                  <Link
                    href={pdf.url}
                    target="_blank"
                    className="line-clamp-2 text-sm hover:underline sm:line-clamp-1 sm:text-base md:text-lg"
                  >
                    {pdf.name}
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        </article>
      </section>

      <section className="container py-12">
        <Link
          href={`/${locale}/training-and-placement#placement-stats`}
          className="inline-flex items-center gap-2 text-primary-700 hover:underline"
        >
          {text.buttons.backToTrainingPlacement}
        </Link>
      </section>
    </>
  );
}
