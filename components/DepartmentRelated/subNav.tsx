import Link from 'next/link';
import { Button } from '../ui/button';

const SubNav = () => {
  const subLinks = [
    { key: 'About', title: 'About', link: '#' },
    { key: 'VisionAndMission', title: 'Vision & Mission', link: '#' },
    { key: 'HODMessage', title: "HOD's Message", link: '#' },
    { key: 'Programs', title: 'Programs', link: '#' },
    { key: 'FacultyAndMore', title: 'Faculty And More', link: '#' },
    { key: 'PhotoGallery', title: 'Photo Gallery', link: '#' },
  ];

  return (
    <div className="mb-3 backdrop-blur-md">
      <div className="border-1 flex justify-evenly space-x-10 rounded-full border  border-white bg-opacity-30 p-3 px-4">
        {subLinks.map((btn) => (
          <Link
            key={btn.key}
            href={btn.link}
            className="text-white  transition-all duration-300 hover:scale-105"
          >
            {btn.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubNav;
