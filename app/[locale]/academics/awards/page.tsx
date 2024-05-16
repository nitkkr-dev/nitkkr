import { ReactNode } from 'react';

import Heading from '~/components/heading';
import ImageHeader from '~/components/image-header';

export default function Programmes({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <>
      <ImageHeader title="Awards" src="departments/cs/banner.png" />
      <main className="container">
        <AwardsCard
          title="Best All-Rounder Award"
          about="B.Tech. students passing out of the institute can complete this award which carries a certificate, a cash prize and citation of the name of the winner in the Roll of Honour. Students are selected on the basis of their performance in studies and extra mural activities during the entire period of their stay in the Institute."
          description="Marks would be deducted from the above for cases involving indiscipline on the part of the candidate. Students who have been awarded punishment for a major indiscipline would not be eligible for the award of marks under (a) to (e) above. For example, if a student has been expelled from the Institute for any period he/she would be awarded Zero marks in the sub-head (a) to (e). If the score of a candidate under any-head (a) to (e) is less than 40% he/she shall be awarded zero marks under the sub-head."
        >
          <div className="mb-4">
            <strong>Academic Performance 50%</strong>: Provided that the student
            should have obtained at least 60 percent marks in all the
            examinations and must have passed each examination in the first
            attempt. In case a student does not fulfil this requirement, no
            marks would be awarded under this sub-head.
          </div>
          <h6 className="mb-2 text-lg font-semibold">
            Extra-Curricular Activities: The distribution of these marks shall
            be as under:
          </h6>
          <ul className="ml-10 list-decimal space-y-2">
            <li>Sports 15%</li>
            <li>NCC/NSS 7.5%</li>
            <li>Clubs 15%</li>
            <li>Student’s Executive 5% Committee</li>
            <li>Student Council 2.5%</li>
          </ul>
        </AwardsCard>
        <AwardsCard
          title="Best Sportsman Trophy"
          about="Students of B.Tech. who get the highest marks in a semester examination are awarded prizes of the value of Rs. 2501- in the form of technical books. Outgoing final year students are awarded this amount in cash. Provision also exists for a.Second Best Sportsman award with a cash prize of Rs. 2001- and a trophy."
          description="Marks would be deducted from the above for cases involving indiscipline on the part of the candidate. Students who have been awarded punishment for a major indiscipline would not be eligible for the award of marks under (a) to (e) above. For example, if a student has been expelled from the Institute for any period he/she would be awarded Zero marks in the sub-head (a) to (e). If the score of a candidate under any-head (a) to (e) is less than 40% he/she shall be awarded zero marks under the sub-head."
        >
          <h6 className="text-gray-700 mb-2 text-lg font-semibold">
            In order to award the Best Sportsman trophy, the candidates will be
            awarded marks as follows :
          </h6>
          <ul className="text-gray-700 ml-10 list-decimal space-y-2">
            <li>Inter State (National Senior) 9 marks</li>
            <li>Inter State (National Junior) 7 marks</li>
            <li>Inter University 5 marks</li>
            <li>Inter District (National Senior) 4 marks</li>
            <li>Inter District (National Junior) 3 marks</li>
          </ul>
        </AwardsCard>
        <AwardsCard
          title="General Fitness and Professional Aptitude Marks"
          about="An award of Rs. 50001- has been instituted from the year 1989-90 for the best technical working model of the year. All students of the Institute are eligible to complete."
        />
        <AwardsCard
          title="Best Sportsman Trophy"
          about="Students are encouraged to actively pursure sports, co-curricular activities and social service, to develop their personalities of the full. Their achievements in these fields are reflected in the marks achieved by them in General Fitness and Professional Aptitude. Sixty five marks have been allocated under this head in the scheme of examination for B.Tech. degree course."
          description="Marks would be deducted from the above for cases involving indiscipline on the part of the candidate. Students who have been awarded punishment for a major indiscipline would not be eligible for the award of marks under (a) to (e) above. For example, if a student has been expelled from the Institute for any period he/she would be awarded Zero marks in the sub-head (a) to (e). If the score of a candidate under any-head (a) to (e) is less than 40% he/she shall be awarded zero marks under the sub-head. Marks proportional to the achievements of the students in various fields, shall be awarded to them by the Director at the tie of the final comprehensive vivavoce examination of the end of the VIII semester. Students claiming competitive excellence in any of the activities (Sports/Clubs/Magazine/NSS/NCC, etc.) may apply to the Director for award of marks after having their claims verified by the respective teachers in-charge of the activities in which excellence is claimed. A committee comprising of the President Clubs, President Sports, Staff Editor Institute Magazine and Teacher in-charge NSS assists the Director in shifting the claims of the students and recommends the award of marks to them.
          Students who may have indulged in acts of indiscipline or taken part in a I J undesirable activity during their stay in the Insitute will stand to loose marks for I conduct in direct proportion to the severity of offence(s) committed by them.
          No marks under this head (conduct) will be awarded to student who have been ‘resticated’ from the Institute."
        >
          <h6 className="text-gray-700 mb-2 text-lg font-semibold">
            In order to award the Best Sportsman trophy, the candidates will be
            awarded marks as follows :
          </h6>
          <ul className="text-gray-700 ml-10 list-decimal space-y-2">
            <li>Academic Record 12 marks</li>
            <li>Conduct 12 marks</li>
            <li>Inter University 5 marks</li>
            <li>Sports and co-curricular activities 20 marks </li>
            <li>General Impression 15 marks</li>
          </ul>
        </AwardsCard>
        <AwardsCard
          title="DR. R.P. SINGH Silver Medal"
          about="Silver Medal in the memory of Late Dr. R.P. Singh to be awarded to the toppers in 1 st, 2nd, 3rd year in Mechanical Engineering."
        />
        <AwardsCard
          title="GURU HARKRISHAN, EDUCATIONAL SOCIETY, CHANDIGARH"
          about="The society has instituted a prize of Rs. 501/- for the overall topper of all the disciplines of B.Tech. Degree Course."
        />
        <AwardsCard
          title="Haryana State Industrial Development Corporation Ltd. "
          about="The Corporation has instituted Merit-cum-Means Scholarship to students belonging to Haryana pursuing engineering courses at the Institute in the disciplines of Civil, Computer and Mechanical Engineering. The scholarship amount of Rs. 500/- per month, for a period of ten months."
        />
        <AwardsCard
          title="MEDALS"
          about="Gold Medal alongwith a cash award of Rs. 5,000/- for the students who secure 1st position in the final examination in the above mentioned disciplines of NIT Kurukshetra."
        />
        <AwardsCard
          title="HARYANA STATE ELECTRONICS DEVELOPMENT CORPORATION LTD. CHANDIGARH"
          about="The Corporation has instituted Harton Gold, silver and Bronze Medals accompanied by merit certificates and cash prize of Rs. 3000/- Rs. 2000/- and Rs. 1000/- respectively in Institutes in Haryana. in the field of Electronics/Computers."
        />
        <AwardsCard
          title="SHRI SHYAM SUNDER DHINGRA MEDAL"
          about="The student of 1981-86 Batch (E) Branch has instituted a Medal along with cash Prize of Rs. 5000/- in the memory of Late Sh. Shyam Sunder Dhingra to be awarded to the top Ranker of B.Tech. CE Branch with effect from 2003."
        />
      </main>
    </>
  );
}

interface AwardCardProps {
  title: string;
  about: string;
  description?: string;
  children?: ReactNode;
}

function AwardsCard({ title, about, children, description }: AwardCardProps) {
  return (
    <section className="container mt-5 rounded-md border border-primary-500 p-5 shadow-lg">
      <Heading glyphDirection="rtl" heading="h3" text={title} />
      <h4 className="mt-4 text-xl font-semibold">About</h4>
      <p className="text-gray-800 text-base">{about}</p>
      {children && (
        <>
          <h4 className="mt-4 text-xl font-semibold">Criterion</h4>
          <div className="text-gray-800 text-base">{children}</div>
        </>
      )}
      {description && (
        <>
          <h4 className="mt-4 text-xl font-semibold">Description</h4>
          <p className="text-gray-800 text-base">{description}</p>
        </>
      )}
    </section>
  );
}
