interface ClubEvent {
  description: string;
  images: string[];
}

interface RSVP {
  name: string;
  contact: string;
  email?: string;
}

interface FacultyInCharge {
  id: number;
  name: string;
  contact?: string;
}

interface Club {
  name: string;
  tagline?: string;
  email?: string;
  aboutUs: string;
  events?: ClubEvent[];
  RSVP?: RSVP[];
  socials?: string[];
  category?: string;
  images?: string[];
  department?: string;
  facultyInCharge1?: FacultyInCharge;
  facultyInCharge2?: FacultyInCharge;
}

type ClubData = Record<string, Club>;

const fineArts: Club = {
  name: 'FINE ARTS AND MODELLING CLUB',
  tagline: '',
  email: '',
  aboutUs:
    'Fine Arts and Modelling club is one of the official clubs of NIT Kurukshetra. It is the hub of artists who come together to ameliorate and sustain art culture in the college. And while doing the same, it provides ample opportunities to those with artistic inclination to hone and flaunt their skills with art and craft.What we doTo uphold the motive of preserving the art culture, Fine Arts and Modelling club turns the college premises into a piece of art during fests. We intend to enkindle that spark of creativity in an individual which is a relish not just for the sake of art but for enjoying its beauty in life. Alongside the hectic schedule that we as engineers have, everyone needs an escape to look into the world in a different way, a better way, that transcends all rationality that we hold. Here, at Fine Arts, we strive for everyone to find their escape into this aesthetic little world of ours. The members are inducted officially by the Secretary of the club under the supervision of the professor-in-charge and range from all years, irrespective of their branches. Apart from that, the competitions organised by the club are an open door for that matter.',
  events: [
    {
      description:
        'During Confluence, the annual cultural fest of NIT Kurukshetra, the club members undertake a month-long project of painting a huge canvas to be stretched out across the background at Open  Air Theatre.',
      images: [
        'https://nitkkr.ac.in/wp-content/uploads/2022/03/fa1-scaled.jpg',
      ],
    },
    {
      description:
        'FA club paints ‘The Wall’ (Apollo wall) during Confluence, for which the members work for days. In the end it’s all worth the efforts because it takes the aura of the fest to a whole new level. With the colors so bright, wall paintings are undoubtedly overwhelming.',
      images: ['https://nitkkr.ac.in/wp-content/uploads/2022/03/fa2.jpg'],
    },
    {
      description:
        'It is the art of deception that gets one’s eyes into believing a 2dimensional painting to be a 3- dimensional lively scene. Apart from the walls, even the ground doesn’t miss the symphony of colors. An art of perception, anamorphic art finds its way on the pathway near OAT and in the market.',
      images: [
        'https://nitkkr.ac.in/wp-content/uploads/2022/03/fa3.jpg',
        'https://nitkkr.ac.in/wp-content/uploads/2022/03/fa4-scaled.jpg',
      ],
    },
    {
      description:
        'An exhibition of artworks is organized wherein art submissions of students from and even outside college are there. It is a perfect platform for an artist to showcase his work not just to the students but to the faculty members who, quite zealously, visit art gallery on Confluence.',
      images: ['https://nitkkr.ac.in/wp-content/uploads/2022/03/fa5.jpg'],
    },
    {
      description:
        'Origami Exhibition- With utter finesse, when paper is folded, skill and precision work hand in hand and Origami brings out its magic in the form of delicate yet beautiful articles. Such articles are provided a special place, an Origami Exhibition itself.During the fests (viz. Confluence, Talent show, Utkarsh), Fine Arts club organizes various competitions for students to flaunt their artistic skills- Abstract painting, monochromatic painting, Rangoli making, still life, face painting to name a few. With the serene dance of colors all around, the campus is draped by the aurora that never fails to render the viewers spellbound.',
      images: [
        'https://nitkkr.ac.in/wp-content/uploads/2022/03/fa6-scaled.jpg',
      ],
    },
  ],
  RSVP: [
    {
      name: 'Parag Agrawal (Secretary)',
      contact: '9728430471',
    },
    {
      name: 'Ankit Abhinav (Secretary)',
      contact: '9728426177',
    },
    {
      name: 'Smriti Gupta (Secretary)',
      contact: '8570849585',
    },
    {
      name: 'Om Ashish (Secretary)',
      contact: '7206460804',
    },
  ],
  socials: [
    'https://www.facebook.com/faclubnitk',
    'https://www.facebook.com/artgallerynitk',
    'Confluence NIT Kurukshetra',
    'Photography Club NIT Kurukshetra',
    ' photo.nitk@gmail.com',
  ],
  category: 'cultural',
  department: '',
};

const photographyClub: Club = {
  name: 'Photography Club',
  aboutUs:
    'This is the official club of NIT Kurukshetra responsible for covering all the events during various fests (like Confluence, Techspardha, Talent Show), guest lectures, seminars, etc. Apart from photography, the club indulges in movie making, video editing, app designing, graphic designing (Photoshop) and web designing. The club is a conglomerate of photography enthusiasts who teach and mould students in photography, video making and designing skills.The club also organizes various fun events during cultural fests like Confluence (the annual cultural fest of NIT Kurukshetra) and Talent Show. Events like Impressions (story depiction through pictures), Shutterbug (theme based photography), Cinematography (Short movie making), Capsun (Caption Writing), etc. that not only test one’s photography skills but also the person’s creativity. The flagship events include Limelight, the much loved fashion photography event and Photo Scavenger Hunt, a treasure hunt with pictures. The members of the club are very enthusiastic about learning and developing new skills and expanding their creativity. Individuals who are hardworking, dedicated and creative are the best fit for our club, in addition to those who have a prior knowledge in photography, videography, designing or editing.',
  socials: [
    'https://www.facebook.com/PhotographyNITkkr/ ',
    ' https://www.facebook.com/Conflu/',
    '@photog.nitk',
    '',
  ],
  RSVP: [
    {
      name: 'Adil Hashim (Secretary)',
      contact: '7206212680',
    },
    {
      name: 'Vibhansh Saini (Secretary)',
      contact: '9728434787',
    },
  ],
  images: [
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/pg1-scaled.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/pg3-scaled.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/pg2-scaled.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/pg2-scaled.jpg',
  ],
};

const musicAndDramatics: Club = {
  name: 'Music & Dramatics',
  aboutUs:
    'Music and Dramatics Club has an important role to play in various fests and pre-shows of NIT Kurukshetra and is the principle organizer of dance, music, dramatic events of annual cultural fests and pre-shows for year-long. The life at NIT Kurukshetra boasts of a wonderful cultural life with inter and intra college fests like Confluence and Talent how and Music and Dramatics Club being the organizer for all the onstage events.You may find us behind the stage, juggling with things to make sure they don’t fall and the event doesn’t go off the track. Nope, we don’t always work behind the curtains, we also coordinate with various other colleges of the North India for publicity of the fests and also their teams are welcomed and guided by our hospitality team. To say the least, we do the ESM (Event Stage Management), EP(External Publicity) and manage all the hustlea2 behind cultural fest.',
  events: [
    {
      description: 'Independence Day',
      images: [],
    },
    {
      description: 'Republic Day',
      images: [],
    },
    {
      description: 'Mr. and Miss. Fresher',
      images: [],
    },
    {
      description: 'Solo/ duet / group / folk dance',
      images: [],
    },
    {
      description: 'Choreo',
      images: [],
    },
    {
      description: 'Instrumental Solo',
      images: [],
    },
    {
      description: 'Battle of Bands',
      images: [],
    },
    {
      description: 'Solo / Duet Singing',
      images: [],
    },
    {
      description: 'Hindi / Western Singing',
      images: [],
    },
    {
      description: 'Fashion Parade',
      images: [],
    },
    {
      description: 'Mime',
      images: [],
    },
    {
      description: 'Nukkad',
      images: [],
    },
    {
      description: 'Ekanki',
      images: [],
    },
    {
      description: 'Monoacting',
      images: [],
    },
  ],
  socials: [
    'https://www.facebook.com/MadNitkkr/',
    'https://www.facebook.com/Conflu/',
  ],
  RSVP: [
    {
      name: 'Anmol Bhatia',
      contact: '9752811144',
    },
    {
      name: 'Lakshita Dodeja',
      contact: '7404277648',
    },
    {
      name: 'Lalit Burrak',
      contact: '9416579941',
    },
    {
      name: 'Sanjana Annamaneni',
      contact: '9728430252',
    },
  ],
  images: [
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/mad1-scaled.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/mad2-scaled.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/mad3-scaled.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/mad4.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/mad5-scaled.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/mad7-scaled.jpg',
  ],
};

const studentActivityClub: Club = {
  name: 'Students Activity Club',
  aboutUs:
    'It’s the major, managerial club of the college which plays the most important role in the organization and overall management of the both the cultural fests namely, Talent Show and Confluence.SAC plays a prominent role in bringing life to the heart of the institute i.e. AE Lawns, by organising fun events including all the games at the stalls, the stage and the DJ during the Fests',
  events: [
    { description: 'Mathematica', images: [] },
    { description: 'Treasure hunt', images: [] },
    { description: 'Beg Borrow Steal', images: [] },
    { description: 'Gully cricket', images: [] },
    { description: 'Street Soccer', images: [] },
    { description: 'Masterchef', images: [] },
    { description: 'Student of the year', images: [] },
    { description: 'Roadies', images: [] },
    { description: 'Sherlock Adventures', images: [] },
    { description: '9 baj gaye kya', images: [] },
    { description: 'Meme Contest', images: [] },
    { description: 'Online Treasure Hunt', images: [] },
    { description: 'Online Roadies', images: [] },
  ],
  images: [
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/sac2-scaled.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/sac3-scaled.jpg',
  ],
  socials: [
    ' https://www.facebook.com/sacnitkkr',
    ' https://www.facebook.com/Conflu',
  ],
  RSVP: [
    {
      name: ' Anshul Verma',
      contact: '9728431667',
    },
    {
      name: 'Kashish Suri',
      contact: '9671556901',
    },
    {
      name: 'Lakshay Arora',
      contact: '7206697009',
    },
    {
      name: 'Nehal Aggarwal',
      contact: '7206210584',
    },
  ],
};

const PGclubs: Club = {
  name: 'PG Club',
  aboutUs:
    'The Post Graduate’s Club is one of the official clubs of NIT Kurukshetra. We, a team of post-graduation students, helps and guides the students to subsist the on-going events in the premises and outside as well. PG club helps you to interact with other branches of the institute and to develop in all aspects. The Club also organizes various events during the major fests of the institute i.e. ‘Talent Show’ and ‘Confluence’, namely. A total of almost 70 members including MCA, MBA and M.Tech students actively participate in the functions of the club. The first and the foremost task that the club undertakes is to ensure the involvement of all the post-graduate streams. Besides this, the Invitation and Reception Committees are what comes under the work of PG Club. The club is responsible for getting ID cards to the working members as well as the external participants during the Major Fest and have the honor to welcome the delegates.',
  events: [
    {
      description:
        'Chessmate: An event for the young minds with great strategies having the facet of playing chess.',
      images: [],
    },
    {
      description:
        'Bollywood Blockbuster: A team quiz like event on Bollywood movies, music etc.',
      images: [],
    },
    {
      description:
        'Travesty: Impromptu caricature art event for all the aspiring artists.',
      images: [],
    },
    {
      description:
        'IPL Betting: For cricket lovers, it’s not just an event but life.',
      images: [],
    },
    {
      description:
        'Splitsvilla: It’s a team event where people get a chance to show not only their strength and intellect but also reverent heart.',
      images: [],
    },
  ],
  socials: ['https://www.facebook.com/Conflu/'],
  images: [
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/pgc1.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/pgc3.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/pgc2.jpg',
    'https://nitkkr.ac.in/wp-content/uploads/2022/03/pgc4.jpg',
  ],
};

const hikingAndTrekkingClub: Club = {
  name: 'Hiking and trekking club',
  aboutUs:
    'Hiking and trekking club as the name proposes, is in charge of sorting out Trips, Excursions and Adventure Activities close by conferring learning about Safety, Health and Environment. We as a group for the most part concentrate on the Overall advancement of the understudies i.e. from comprehensive Management aptitudes to powerful Health. By offering presentation to different and unrehearsed requests on different outings, HTC sustains and give better shape to one’s Character and Personality. HTC likewise adds to the Cultural Fests of NIT Kurukshetra i.e. CONFLUENCE AND TALENT SHOW. HTC composes different workshops for the most part identified with Safety and Health rules amid a trek. HTC is adding to society likewise by raising certain social issues like Women Empowerment, bestowing Educational Skill sets particularly to individuals living in sloping ranges.',
  socials: ['www.facebook.com/htcnitkkr'],
  RSVP: [
    {
      name: 'Tushar Singla',
      contact: '9416730994',
    },
    {
      name: 'Shiven',
      contact: '8901108899',
    },
    {
      name: 'Vibhuti Dembi',
      contact: '9711664251',
    },
  ],
};

const AVA: Club = {
  name: 'Audio visual aid',
  aboutUs:
    'Audio Visual & Aid Club is a Student’s Club of National Institute of Technology, Kurukshetra. It mainly focuses on the Sound and Light System Handling of Jubilee Hall, AE Lawns and OAT along with other areas of college during national level cultural fest CONFLUENCE and technical fest TECHSPARDHA.However, it also aims to provide a platform to the interested students who want to learn, develop and improve their knowledge for Sound and Lighting under the guidance of senior club members. The credit for the remixes played at AE Lawn during the Fests goes to the members of the AVA club. Also the light and sound handling during the performances in the Jubilee Hall is done by the members of AVA Club. The AVA Club is heavily involved in all the institute activities. It also organizes various events related to Music and Sound effects during cultural fests (Confluence and Talent Show). Thus, inviting the students to show their talents. It also aims to provide sufficient guidance to the students and help them to show their talent in the world of Music and Lights.',
  socials: ['https:/www.facebook.com/Conflu/'],
};

const spicmacay: Club = {
  name: 'SPICMACAY',
  tagline:
    'Society for the Promotion of Indian Classical Music and Culture Amongst Youth',
  email: 'registrar@nitkkr.ac.in',
  aboutUs:
    'SPICMACAY is a non-political nationwide voluntary movement that organizes programs of classical music and dance, folk arts, crafts, yoga, and more to make students aware of Indian and world heritage. Founded by Dr. Kiran Seth in 1977, the club at NIT Kurukshetra provides a platform for talented performers and organizes workshops with famous artists to enhance skills.',
  events: [
    {
      description:
        "Performances for Independence Day, Republic Day, Women's Day, Unity Day, and inaugurations for various fests.",
      images: [],
    },
    {
      description:
        'Workshop conducted by ISKON devotees, chanting success mantras and motivating youngsters.',
      images: [],
    },
    {
      description: 'NIT’s Got Talent - a platform to showcase unique talents.',
      images: [],
    },
  ],
  RSVP: [
    {
      name: 'Anupriya Gupta',
      contact: '7206539267',
      email: 'anupriyagupta9596@gmail.com',
    },
    {
      name: 'Nalin Agarwal',
      contact: '9728430593',
      email: 'nagrawal327@gmail.com',
    },
    {
      name: 'Himanshu Gambhir',
      contact: '9971594360',
      email: 'himanshugambhir@outlook.com',
    },
    {
      name: 'Harmanjot Singh',
      contact: '9780880893',
      email: 'harmansingh3001@gmail.com',
    },
    {
      name: 'Lakshay Makkar',
      contact: '8059705375',
      email: 'lakshaymakkar1997@gmail.com',
    },
    {
      name: 'Aastha Chawla',
      contact: '9996337132',
      email: 'aasthachawla1997@gmail.com',
    },
    {
      name: 'Anahita Garg',
      contact: '9416205180',
      email: 'anahitagarg98@gmail.com',
    },
    {
      name: 'Hardik Sachdeva',
      contact: '9996531501',
      email: 'hardiksachdeva98@gmail.com',
    },
    {
      name: 'Eshan Pratim Mishra',
      contact: '8901215426',
      email: 'ep.mishra10@gmail.com',
    },
    {
      name: 'Harshit Singhal',
      contact: '8923710404',
      email: 'harshsinghal97@gmail.com',
    },
  ],
  socials: [
    'https://www.facebook.com/spicmacaynitkkr/',
    'https://www.youtube.com/channel/UCav3u4EWFKY_LdXfI2QVomg',
  ],
  category: 'cultural',
  department: '',
  facultyInCharge1: {
    name: 'Prof. Mahesh Aeidapu',
    contact: '',
    id: 3,
  },
  facultyInCharge2: {
    name: 'Prof. Karan Sharma',
    contact: '',
    id: 4,
  },
};

export const club_data: ClubData = {
  'fine-arts-and-modelling-club': fineArts,
  'photography-club': photographyClub,
  'music-and-dramatics': musicAndDramatics,
  'students-activity-club': studentActivityClub,
  'pg-club': PGclubs,
  'hiking-and-trekking-club': hikingAndTrekkingClub,
  'audio-visual-aid': AVA,
  spicmacay: spicmacay,
};
