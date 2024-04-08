import Heading from '~/components/heading';
import { getTranslations } from '~/i18n/translations';

export default async function Accounts({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Section.Account;

  return (
    <>
      <Heading
        glyphDirection="ltr"
        heading="h3"
        text="About Us"
        href={'#accounts'}
        id="#accounts"
      />
      <p className="container">
        The library, initially set up in 1965, has grown in size, collection,
        and services. Presently, NIT Kurukshetra has a very spacious library
        with a good collection of documents, which includes text and reference
        books, CD-ROMs, and a large number of print and online journals and
        e-books. With its growing resources, space, and services, the library
        caters to the needs of faculty, researchers, scholars, and students.
      </p>

      <ul className="container mt-4 flex flex-col gap-4">
        <li>
          <h5>Library Automation System, Web-OPAC, and Circulation</h5>
          <p>
            The library is providing automated services in all sections of the
            library using KOHA software. All the books are bar-coded, and
            members are also given Bar-Coded membership cards for smooth
            circulation of documents in the library. The database of the library
            is updated regularly, and readers can search the documents using
            Web-OPAC (Online Public Access Catalogue) at:{' '}
            <a href="http://172.16.101.63">http://172.16.101.63</a>
          </p>
        </li>

        <li>
          <h5>Audio-Video Center</h5>
          <p>
            The library has a fully air-conditioned audiovisual centre for
            seminars, conferences, guest lectures, user awareness programs, etc.
            with a seating capacity of 100 participants. It is also equipped
            with a videoconferencing facility.
          </p>
        </li>

        <li>
          <h5>J-Gate Plus</h5>
          <p>
            J-Gate Custom Content for Consortium (JCCC) is a virtual library of
            journal literature created as a customized e-journals access gateway
            and database solution. It acts as a one-point access to 7900+
            journals subscribed currently under UGC INFONET Digital library
            consortium as well as university libraries designated as Inter
            Library Loan (ILL) Centers besides index to open access journals.
          </p>
        </li>

        <li>
          <h5>NPTEL Web & Video Courses</h5>
          <p>
            The Library has procured NPTEL Web & Video Courses designed &
            developed by IIT, Chennai in various discipline of Engineering &
            Sciences for the use of Faculty Members, Research Scholars and
            Students. Users can access these video courses through Library
            storage server{' '}
            <a href="http://172.16.0.50/localguru">
              http://172.16.0.50/localguru
            </a>
            .
          </p>
        </li>

        <li>
          <h5>Remote Access Service: KNIMBUS</h5>
          <p>
            To provide the off-campus access to subscribed e-resources, the
            library has subscribed to the KNIMBUS service. The users can create
            their account either by visiting the URL nitkkr.knimbus.com or by
            writing to us at librarian@nitkkr.ac.in. After creating the account,
            the users can log in and access all the e-resources from anywhere.
          </p>
        </li>

        <li>
          <h5>Anti-Plagiarism Software (Turnitin)</h5>
          <p>
            The library has subscribed to anti-plagiarism software Turnitin for
            all the Faculty Members, Research Scholars and Students. The users
            can check the plagiarism of their research papers, articles, theses,
            dissertations, etc. using this facility.
          </p>
        </li>
      </ul>
    </>
  );
}
