import Link from 'next/link';

export default function Search() {
  const links = {
    recents: [
      { label: 'Departments', value: '/departments' },
      { label: 'Academic', value: '/academic' },
      { label: 'Spaghetti', value: '/spaghetti' },
      { label: 'SPIC MACAY', value: '/clubs/0' },
    ],
    mostSearched: [
      { label: 'Departments', value: '/departments' },
      { label: 'Dr. Vikram Singh', value: '/faculty/0' },
    ],
    studentLinks: [
      { label: 'Departments', value: '/departments' },
      { label: 'Dr. Vikram Singh', value: '/faculty/0' },
    ],
    facultyLinks: [
      { label: 'Departments', value: '/departments' },
      { label: 'Dr. Vikram Singh', value: '/faculty/0' },
    ],
  };

  return (
    <section className="flex flex-col gap-4">
      <input
        className="min-w-full rounded-lg border border-primary-700 px-4 py-2"
        placeholder="Quick Search..."
      />

      <article className="flex flex-col gap-10 overflow-y-auto rounded-lg border border-primary-700 bg-background p-12 drop-shadow-2xl">
        <section>
          <header className="flex">
            <h5 className="grow">Recent Searches</h5>
            <p className="mb-0 max-h-fit align-baseline">Clear recents</p>
          </header>

          <ol className="flex gap-6">
            {links.recents.map(({ label, value }, index) => (
              <li key={index}>
                <Link href={value}>{label}</Link>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex gap-10">
          <nav>
            <h5>Most searched at NITKKR</h5>
            <ol>
              {links.mostSearched.map(({ label, value }, index) => (
                <li key={index}>
                  <Link href={value}>{label}</Link>
                </li>
              ))}
            </ol>
          </nav>
          <nav>
            <h5>Student Quick Links</h5>
            <ol>
              {links.studentLinks.map(({ label, value }, index) => (
                <li key={index}>
                  <Link href={value}>{label}</Link>
                </li>
              ))}
            </ol>
          </nav>
          <nav>
            <h5>Faculty Quick Links</h5>
            <ol>
              {links.facultyLinks.map(({ label, value }, index) => (
                <li key={index}>
                  <Link href={value}>{label}</Link>
                </li>
              ))}
            </ol>
          </nav>
        </section>
      </article>
    </section>
  );
}
