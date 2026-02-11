import { arrayOverlaps, desc, eq, inArray } from 'drizzle-orm';

import { db } from '~/server/db';
import { getTranslations } from '~/i18n/translations';
import ImageHeader from '~/components/image-header';

import { AdmissionFilters } from './AdmissionFilters';
import { MobileAdmissionFilters } from './MobileAdmissionFilters';
import { NotificationsList } from '../../notifications/NotificationsList';

function toArray(v?: string | string[]) {
  return Array.isArray(v) ? v : v ? [v] : [];
}

export default async function AdmissionPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: {
    department?: string | string[];
    educationType?: string;
    start?: string;
    end?: string;
  };
}) {
  const text = (await getTranslations(locale)).Admission;

  const departmentsSelected = toArray(searchParams.department);
  const educationType = searchParams.educationType as
    | 'pg'
    | 'ug'
    | 'phd'
    | undefined;

  const departmentRows = await db.query.departments.findMany({
    columns: { id: true, name: true, urlName: true },
  });

  const deptIds = departmentRows
    .filter((d) => departmentsSelected.includes(d.urlName))
    .map((d) => d.id);

  const raw = await db.query.notifications.findMany({
    where: (n, { and, gte, lte }) =>
      and(
        arrayOverlaps(n.categories, ['admission']),
        deptIds.length ? inArray(n.id, deptIds) : undefined,
        educationType ? eq(n.educationType, educationType) : undefined,
        searchParams.start
          ? gte(n.createdAt, new Date(searchParams.start))
          : undefined,
        searchParams.end
          ? lte(n.createdAt, new Date(searchParams.end))
          : undefined
      ),
    orderBy: (n) => [desc(n.createdAt)],
    limit: 21,
  });

  const hasMore = raw.length > 20;

  return (
    <>
      <ImageHeader title={text.title} src="slideshow/image01.jpg" />

      <section className="container mt-8 flex flex-col gap-8 xl:flex-row">
        {/* Desktop Sidebar - hidden on mobile */}
        <AdmissionFilters
          locale={locale}
          departments={departmentRows.map((d) => d.urlName)}
          selectedDepartments={departmentsSelected}
          departmentMap={Object.fromEntries(
            departmentRows.map((d) => [d.urlName, d.name])
          )}
          searchParams={searchParams}
          text={text}
        />

        {/* Main Content Area */}
        <section className="flex-1">
          {/* Mobile Filters Button */}
          <div className="mb-4 flex justify-end xl:hidden">
            <MobileAdmissionFilters
              locale={locale}
              departments={departmentRows.map((d) => d.urlName)}
              selectedDepartments={departmentsSelected}
              departmentMap={Object.fromEntries(
                departmentRows.map((d) => [d.urlName, d.name])
              )}
              start={searchParams.start}
              end={searchParams.end}
              text={{
                filterBy: text.filterBy,
                clearAllFilters: text.clearAllFilters,
                filter: text.filter,
              }}
            />
          </div>

          <NotificationsList
            initialItems={raw.map((n) => ({
              id: n.id,
              title: n.title,
              categories: n.categories,
              createdAt: n.createdAt.toISOString(),
            }))}
            initialCursor={null}
            initialHasMore={hasMore}
            locale={locale}
            filterParams={{}}
            canManage={false}
            text={{
              noNotificationsFound: text.noNotificationsFound,
              noMoreNotifications: text.noMoreNotifications,
              edit: '',
              delete: '',
            }}
          />
        </section>
      </section>
    </>
  );
}
