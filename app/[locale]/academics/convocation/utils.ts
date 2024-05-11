interface Notification {
  title: string;
  href: string;
}

interface YearData {
  notifications: Notification[];
}

interface ConvocationData {
  years: Record<string, YearData>;
}

const notification19 = [
  {
    title: 'Toppers and Award winners',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2023/11/Topper-and-Award-Winner-Tentative-List-19th-Convocation.pdf',
  },
  {
    title: 'Final candidates list IIITs',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2024/02/FINAL-LIST-OF-DEGREE-RECIPIENTS-IN-19TH-CONVOCATION-AS-ON-01-02-2024-IIITS.pdf',
  },
  {
    title: 'Final candidates list NIT KKR',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2024/02/FINAL-LIST-OF-DEGREE-RECIPIENTS-IN-19TH-CONVOCATION-AS-ON-01-02-2024-NITKKR.pdf',
  },
  {
    title: 'Tentative list for doctoral (phase- 5 & 6).',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2024/01/Responses-1.pdf',
  },
  {
    title: 'Tentative list for doctoral (phase- 6).',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2024/01/SUPPLEMENTARY-TENTATIVE-LIST-OF-DEGREE-RECIPENTS-OF-PG-PROGRAMS-FOR-19TH-CONVOCATION-PASSED-IN-2022-23-Phase-VI.pdf',
  },
  {
    title: 'Update on 19th Convocation: Reg.',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2023/12/Reg.-19th-Convocation.pdf',
  },
  {
    title: 'Tentative list for PG (phase- 5)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2023/12/SUPPLEMENTARY-TENTATIVE-LIST-OF-DEGREE-RECIPIENTS-OF-PG-PROGRAMMES-FOR-19th-CONVOCATION-PHASE-V.pdf',
  },
  {
    title: 'Tentative list Doctoral (phase- 4)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2023/12/Phase-IV-PhD.pdf',
  },
  {
    title: 'Tentative list PG (phase- 2)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2023/11/SUPPLEMENTARY-TENTATIVE-LIST-OF-DEGREE-RECIPIENTS-OF-PG-PROGRAMMES-FOR-19th-CONVOCATION-PHASE-II-1.pdf',
  },
  {
    title: 'Tentative list Doctoral (phase- 2)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2023/11/ListofDegreeRecipientsfor19thConvocation-Supplimentary-Phase-I-21-11-23.pdf',
  },
  {
    title: 'Combined tentative list',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2023/11/TentativeListofDegreeRecipientsfor19thConvocationUpdated-09-11-2023.pdf',
  },
  {
    title: '19th Convocation Data Collection Form',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2023/11/TentativeListofDegreeRecipientsfor19thConvocationUpdated-09-11-2023.pdf',
  },
];

const notification18 = [
  {
    title: 'Souvenir 18th Convocation-2022',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/12/SOUVENIR-18thConvo-2022.pdf',
  },
  {
    title: 'News letter  18th Convocation-2022',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/11/NEWS-LETTER-18thConvo-2022.pdf',
  },
  {
    title:
      'Student Invitation Card and Convocation Lunch Pass for 18th Convocation ( Diamond Jubilee) – 2022 [  The student will be issued hard copy of the Lunch Pass at the time of Physical Registration on 28-11-2022]',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/11/18ConvoIvitation-Invitation-Student.pdf',
  },
  {
    title:
      'Notice for Classes off on 28.11.2022 (Except B.Tech. 1st Sem) and 29.11.2022 (All Students)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/11/Notice-for-Classes-off-on-28.11.2022-Except-B.Tech_.-1st-Sem-and-29.11.2022-All-Students.pdf',
  },
  {
    title: 'Rehearsal of 18th Convocation',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/11/Rehearsal-of-18th-Convocation.pdf',
  },
  {
    title: 'Convocation Protocol for 18th (Diamond Jubilee)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/11/Convocation-Protocol.pdf',
  },
  {
    title: 'Real time webcasting of the 18th Convocation Proceedings to',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/11/NIT-Kurukshetra-is-making-arrangements-for-real-time-webcasting-of-the-18-th-Convocation-Proceedings-to.pdf',
  },
  {
    title: 'Notification and Advt. for 18th Convocation rehearsal etc.',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/11/Notification-and-Advt.-for-18th-Diamond-Jubilee-Convocation.pdf',
  },
  {
    title: '18th convocation accommodation link',
    href: 'https://forms.gle/2S7pR2jmd8EqVGqs9',
  },
  {
    title: '18th convocation Transportation Schedule',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/11/convocation-Transporatation-Schedule2-1.pdf',
  },
  {
    title:
      'Final List of Degree Recipients of NIT Kurukshetra and IIIT Sonepat on 18th Convocation ( Diamond Jubilee Year) 2022 to be held on 29-11-2022',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/11/19-11-2022-Final-List-of-Degree-Recipients-of-NIT-Kurukshetra-and-IIIT-Sonepat-on-18th-Convocation-Diamond-Jubilee-Year-2022-to-be-held-on-29-11-2022.pdf',
  },
  {
    title:
      'Important Notice for Degree Recipients who wish to receive their Degree by Speed Post after 18th Convocation',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/11/Important-Notice-for-Degree-Recipients-who-wish-to-receive-their-Degree-by-Speed-Post-after-18th-Convocation.pdf',
  },
  {
    title: 'Convocation-apparel-for-All-Senators-and-Dignitaries',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/10/Convocation-apparel-for-All-Senators-and-Dignitaries.pdf',
  },
  {
    title: 'Dress code for 18th (Diamond Jubilee Convocation)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/10/Dress-code-for-18th-Diamond-Jubilee-Convocation-21102022.pdf',
  },
  {
    title:
      'Final List of Degree Recipients FOR AWARD OF DEGREES IN 18TH CONVOCATON ( AS ON 29.09.2022)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/10/FINAL-LIST-OF-DEGREE-RECIPIENTS-FOR-AWARD-OF-DEGREES-IN-18TH-CONVOCATON-LIKELY-TO-BE-SCHEDULED-IN-THE-MONTHS-OF-OCTOBER-2022-AS-ON-27.09.2022-27092022-1_compressed.pdf',
  },
  {
    title:
      'Notice & Tentative List of Gold Medalist and Topper Students of 18th Convocation',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/10/Notice-Tentative-List-of-Gold-Medalist-and-Topper-Students-of-18th-Convocation-27092022_compressed.pdf',
  },
  {
    title:
      'FINAL LIST OF DEGREE RECIPIENTS FOR 18TH CONOVOCATION SCHEDULED IN OCTOBER 2022 AS ON 22.09.2022 AFTER REMOVAL OF Discrepancies',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/10/23.09.2022-FINAL-LIST-OF-DEGREE-RECIPIENTS-FOR-18TH-CONOVOCATION-SCHEDULED-IN-OCTOBER-2022-AS-ON-22.09.2022-AFTER-REMOVAL-OF-Discrepancies-23092022_compressed.pdf',
  },
  {
    title:
      '18th (Diamond Jubilee) Convocation News in Dainik Bhaskar Kurukshetra Edition',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/09/IMG-20220913-WA0009.jpg',
  },
  {
    title:
      'List of the Candidates who have not submitted Google Form upto 05:00 pm on 15.09.2022 ( They are required to fill the form by 05:00 pm upto 19.09-2022 so that they can receive degrees digitally )(updated )',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/09/Notfilled-GoogleFormason-15-09-22-15092022.pdf',
  },
  {
    title: '18th (Diamond Jubilee) Convocation Data Collection Form',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdjNWomIr4eeIXs37hivTb1Am9onB3M5gr-uesPEANqw2aO2A/viewform',
  },
  {
    title: 'B.Tech (All Programs)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/09/UG-Convo-2022-09092022.pdf',
  },
  {
    title: 'PG Programs (M.Tech (All Programs, MCA & MBA)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/09/PG-DEGREE-RECIPIENTS-LIST-FOR-18TH-DIAMOND-JUBILEE-CONVOCATION-09092022.pdf',
  },
  {
    title: 'Ph.D',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2022/09/Ph.D-Convo-2022-09092022.pdf',
  },
  {
    title: '10-09-2022 18th (Diamond Jubilee) Convocation Data Collection Form',
    href: 'https://forms.gle/oS14vXJHkeQkBLp36',
  },
];

const notification17 = [
  {
    title:
      'Final List of Degree Recipient 17th Convocation after correction MCA Programme as on 11.02.2020',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Final-List-of-Degree-Recipient-17th-Convocation-MCA-Programme-as-on-11.02.2020.pdf',
  },
  {
    title:
      'Final List of Degree Recipients 17th Convocation after Correction MBA Programme as on 11.02.2020',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Final-List-of-Degree-Recipients-after-Correction-MBA-Programme-as-on-11.02.2020.pdf',
  },
  {
    title:
      'Final List of Degree Recipients 17th Convocation after Correction Ph.D. Programmes as on 11.02.2020',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Final-List-of-Degree-Recipients-after-Correction-Ph.D.-Programmes-as-on11.02.2020.pdf',
  },
  {
    title: 'Revised Latest PhD List for Convocation on 20.02.2020',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Latest-PhD-List-for-Convocation-on-20.02.2020-07022020.pdf',
  },
  {
    title: 'Transportation Schedule for 17th convocation 2020',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Transportation-Schdule-for-17th-convocation-2020.pdf',
  },
  {
    title:
      'Revised Final List of Academic Prizes Recipients [ for 17th Convocation [After Removal of Discrepencies and Using Tie Breaking Rule]',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Final_List_of_AcademicPrizes_Recipients_for_17thConvocation-After-Removal-of-Discrepencies-and-Using-Tie_Breaking-Rule-07022020.pdf',
  },
  {
    title:
      'Revised Supplimentary List of Degree Recipient of Phase 2 (PhD Programmes) [Last date of correction is 10.02.2020]',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Revised_SupplimentaryListofDegreeRecipientofPhase_2-PhD-Programmes-Last-date-of-correction-is-10.02.2020-07022020.pdf',
  },
  {
    title:
      'Final List of Final List of Academic Prizes Recipients [ for_17thConvocation [After Removal of Discrepencies and Using Tie_Breaking Rule]',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Final_List_of_FinalListofAcademicPrizes_Recipients_for_17thConvocation-After-Removal-of-Discrepencies-and-Using-Tie_Breaking-Rule-0602.pdf',
  },
  {
    title:
      'Final List of Medal and Trophy Recipients for 17thConvocation [After Removal of Discrepencies and Using Tie_Breaking Rule]',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Final_List_of_Medal-and-Trophy_Recipients_for_17thConvocation-After-Removal-of-Discrepencies-and-Using-Tie_Breaking-Rule-0602.pdf',
  },
  {
    title:
      'Supplementary List of Degree Recipient of Phase-3 (M.Tech Programmes) [Last date of correction is 10.02.2020]',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Supplementary-List-of-Degree-Recipient-of-Phase-3-M.Tech-Programmes-Last-date-of-correction-is-10.02.2020-06022020.pdf',
  },
  {
    title:
      'Supplimentary List of Degree Recipient of Phase-2 (PhD Programmes) [Last date of correction is 10.02.2020]',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/SupplimentaryListofDegreeRecipientofPhase-2-PhD-Programmes-Last-date-of-correction-is-10.02.2020-05022020.pdf',
  },
  {
    title:
      'Supplimentary List of Degree Recipient of Phase-2 (M.Tech Programmes) [Last date of correction is 10.02.2020]',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/SupplimentaryListofDegreeRecipientofPhase-2-M.Tech-Programmes-Last-date-of-correction-is-10.02.2020-05022020.pdf',
  },
  {
    title:
      'Supplimentary List of Degree Recipient of Phase-2 (B.Tech Programmes) [Last date of correction is 10.02.2020]',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/SupplimentaryListofDegreeRecipientofPhase-2-B.Tech-Programmes-Last-date-of-correction-is-10.02.2020-02052020.pdf',
  },
  {
    title:
      'Final List of Degree Recipients after Correction (Phase-1) B.TechProgrammes',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/FinalListofDegreeRecipientsafterCorrectionPhase-1B.TechProgrammes05.02.2020.pdf',
  },
  {
    title:
      'Revised Final List of Degree Recipients after Correction (Phase-1) M.Tech. Programmes',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Final-List-of-Degree-Recipients-after-Correction-Phase-1-M.Tech_.-Programmes-05.02.2020-06022020.pdf',
  },
  {
    title: 'Final List of Degree Recipients after Correction (Phase-1) MBA',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/FinalListofDegreeRecipientsafterCorrectionPhase-1MBA05.02.2020.pdf',
  },
  {
    title: 'Final List of Degree Recipients after Correction (Phase-1) MCA',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/FinalListofDegreeRecipientsafterCorrectionPhase-1MCA05.02.2020.pdf',
  },
  {
    title: 'Supplimentary list of PhD title',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/supplimentary-list-of-PhD-title-03022020.pdf',
  },
  {
    title:
      'Notice for UG & PG Gold Medalist and Toppers Students of 17th Convocation',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Notice-for-UG-PG-Gold-Medalist-and-Toppers-Students-of-17th-Convocation-30012020.pdf',
  },
  {
    title: 'Notice for Degree Receipents students',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Notice-for-Degree-Receipents-students.pdf',
  },
];

const notification16 = [
  {
    title: 'B.Tech',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/UG_B.Tech_..pdf',
  },
  {
    title: 'M.Tech, M.B.A and M.C.A',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/PG_M.Tech_._MBA_and_MCA.pdf',
  },
  {
    title: 'Ph.D',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Ph.D.pdf',
  },
  {
    title: 'List of students eligible for Medals / Awards and Academic Prizes',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Medal_Awards_and_Academic_Prizes_list_13th_Conovcation_-2016.pdf',
  },
  {
    title: 'Advertisement 03/2016',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Advertiemt_03.2016.pdf',
  },
  {
    title: 'Important instructions for degree recipients students',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Important_instructions_for_degree_recipients_students.pdf',
  },
  {
    title: 'Supplementary List 1 ( B.Tech.  / M.Tech.  / Ph.D. )',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Supplementary_list_1_UG_PG_PhD-1.pdf',
  },
  {
    title: 'B.Tech Civil Engineering',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Civil_Engg..pdf',
  },
  {
    title: 'B.Tech Computer Engineering',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Computer_Engg..pdf',
  },
  {
    title: 'B.Tech Information Technology',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Information_Technology.pdf',
  },
  {
    title: 'B.Tech Electronics & Comm. Engineering',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Electronics__Comm._Engg..pdf',
  },
  {
    title: 'B.Tech Electrical Engineering',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Electrical_Engg..pdf',
  },
  {
    title: 'B.Tech Mechanical Engineering',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Mechanical_Engg..pdf',
  },
  {
    title: 'B.Tech Industrial Engineering & Management',
    href: 'http://nitkkr.ac.in/docs/IEM.pdf',
  },
  {
    title: 'M.Tech Civil  Engg. (Environmental)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Civil_Engg._Environmental.pdf',
  },
  {
    title: 'M.Tech Civil  Engg. (Soil Machines & Foundation)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Civil_Engg._Soil_Machines__Foundation.pdf',
  },
  {
    title: 'M.Tech Civil Eng. (Structural )',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Civil_Eng._Structural_.pdf',
  },
  {
    title: 'M.Tech Civil Engg. (Transportation)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Civil_Engg._Transportation.pdf',
  },
  {
    title: 'M.Tech Civil Engg. (Water Resources)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Civil_Engg._Water_Resources.pdf',
  },
  {
    title: 'M.Tech Computer Engg.',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Computer_Engg.-1.pdf',
  },
  {
    title: 'M.Tech Control System',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Control_System.pdf',
  },
  {
    title: 'M.Tech Electronics & Comm. Engg.',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Electronics__Comm._Engg..pdf',
  },
  {
    title: 'M.Tech Mechanical Engg. (Industrial & Production)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Mechanical_Engg._Industrial__Production.pdf',
  },
  {
    title: 'M.Tech Mechanical Engg. (Machine Design)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Mechanical_Engg._Machine_Design.pdf',
  },
  {
    title: 'M.Tech Mechanical Engg. (Thermal)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Mechanical_Engg._Thermal.pdf',
  },
  {
    title: 'M.Tech Physics (Instrumentation)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Physics_Instrumentation.pdf',
  },
  {
    title: 'M.Tech Physics (Nanotechnology)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Physics_Nanotechnology.pdf',
  },
  {
    title: 'M.Tech Power Electronics & Drives',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Power_Electronics__Drives.pdf',
  },
  {
    title: 'M.Tech Power System',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Power_System.pdf',
  },
  {
    title: 'M.Tech School of Renewable Energy System',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/School_of_Renewable_Energy_System.pdf',
  },
  {
    title: 'M.Tech School of Biomedical Engg.',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/School_of_Biomedical_Engg..pdf',
  },
  {
    title: 'M.Tech School of Material Science & Nanotechnology',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/School_of_Material_Science__Nanotechnology.pdf',
  },
  {
    title: 'Master of Business Administration',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/MBA.pdf',
  },
  {
    title: 'Master of Computer Application',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/MCA.pdf',
  },
  {
    title: 'Doctor of Philosophy ( Ph.D.)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Ph.D..pdf',
  },
];

const notification12 = [
  {
    title:
      '12TH CONVOCATION WILL BE HELD ON 26-03-15, DR. APJ ABDUL KALAM WILL BE THE CHIEF GUEST OF THE CONVOCATION',
    href: '#',
  },
  {
    title:
      'Degree Awarded News including D.Sc. to Prof. Sanjay Govind Dhande and Prof. Pritam Singh',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/convo_news_2.pdf',
  },
  {
    title:
      'Cheif Guest Address by Bharat Ratna Dr. APJ Abdul Kalam News)- Media Coverage',
    href: 'http://nitkkr.ac.in/docs/convo_news_2.PDF',
  },
  {
    title:
      'Thanks to Every One for their direct/in-direct support in the successful completion of 12th Convocation of the Institute. You may drop your suggestions at academic@nitkkr.ac.in for improvement in next year 26-03-15 : Live Webcast of the 12th Convocation from 3 PM onwards ( Now the link is no longer available )',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Teaching_remain_Suspended_on_26th_March_In_Lieu_of_Convocation-2015.pdf',
  },
  {
    title:
      '24-03-15 : Teaching remain Suspended on 26th March, In Lieu of Convocation-2015.',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Teaching_remain_Suspended_on_26th_March_In_Lieu_of_Convocation-2015.pdf',
  },
  {
    title: '24-03-15 : Rehearsal of 12th Convocation-2015 for All Senators.',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Senators_Rehearsal_of_12th_Convocation.pdf',
  },
  { title: 'Rehearsal of 12th Convocation-2015', href: '#' },
  {
    title: 'Final Minute-To-Minute Programme:- 12th Convocation-2015.',
    href: '#',
  },
  {
    title:
      'Route Map for 12th Convocation of National Institute of Technology, Kurukshetra.',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Route_Map.pdf',
  },
  { title: 'Invitation', href: '#' },
  { title: 'Schedule', href: '#' },
  {
    title: 'Imp. Instructions',
    href: 'http://nitkkr.ac.in/docs/Imp._Instructions.PDF',
  },
  {
    title:
      'Transportation Facility available from Kurukshetra Rly Station  and Pipli for Degree Recepient',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/transport_convo15-1.pdf',
  },
  {
    title: 'Advt. of Convocation-2015 in Newspaper.',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Advst._of_Convocation_2015_in_Newspaper.pdf',
  },
  {
    title: 'Important Notice for Registration for Convocation-2015.',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Notice_for_ID_card_on_Convocation_Registration.pdf',
  },
  {
    title: 'Online Registration',
    href: 'https://docs.google.com/a/nitkkr.ac.in/forms/d/1cc1d88U-FUmeFa1GvCi0q9Jh-aMfLbzrXYEw7gSP7kI/viewform',
  },
  {
    title: 'Schedule for Convocation-2015',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Convocation_Update_2015-2.docx',
  },
  {
    title:
      '12th Convocation Notification ( Students must check their name and their father name in hindi and english and report the discrepency to Academic Section by 09-03-14)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Notification_regarding_12th_Convocation.pdf',
  },
  {
    title: 'Annexure-B(Academic Awards and Medal Revised List )',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Topper_students_list_12th_Convocation.pdf',
  },
  {
    title:
      'Annexure-A [ List is updated for the requests received till 5 pm, 02-03-15 on 03-03-15 at 2:30 pm. Final corrections are uploaded in the list on 20-03-15 at 2:00 PM.] Plz Verify',
    href: '#',
  },
  {
    title:
      'Supplementary List-1 ( B.Tech. M.Tech. & Ph.D.)[ Please verify the name in Hindi and English]',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/suplementary-1.pdf',
  },
  {
    title: 'B.Tech. Civil Engineering',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/1_civil_a_9.03.15.pdf',
  },
  {
    title: 'B.Tech. Computer Engineering',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/2_computer_a_9.03.15.pdf',
  },
  {
    title: 'B.Tech. Information Technology',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/7_IT_9.03.15.pdf',
  },
  {
    title: 'B.Tech. Electronics & Comm. Engineering',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/4_Electronics_9.03.15.pdf',
  },
  {
    title: 'B.Tech. Electrical Engineering',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/3_Electrical_9.03.15.pdf',
  },
  {
    title: 'B.Tech.Mechanical Engieering',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/5_Mechanical_a_9.03.15.pdf',
  },
  {
    title: 'B.Tech. Industrial Engineering & Management',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/6_IEM_9.03.15.pdf',
  },
  {
    title: 'M.Tech. Civil Engg. (Transportation Engg.)',
    href: 'https://nitkkr.ac.in/wp-content/uploads/2021/12/Civil_Transport_9.3.15.pdf',
  },
];

// This is an array of object coz, someone amy want to add some othere data to it, in future.
const data: ConvocationData = {
  years: {
    '19th': {
      notifications: notification19,
    },
    '18th': {
      notifications: notification18,
    },
    '17th': {
      notifications: notification17,
    },
    '16th': {
      notifications: notification16,
    },
    '12th': {
      notifications: notification12,
    },
  },
};

export function getConvocationData(year: string) {
  return data.years[year];
}
