import parse from 'html-react-parser';
import React from 'react';

export type AnnouncementItem = {
  announce_id: number;
  category_name: string;
  type: string;
  display_message: string;
  created_time: string;
};

type AnnouncementProps = {
  announcements: AnnouncementItem[];
};

const Announcement: React.FC<AnnouncementProps> = ({ announcements }) => {
  // Map category names to colors
  const categoryColors: { [key: string]: string } = {
    highlight: 'bg-orange-500',
    activity: 'bg-blue-500',
  };

  return (
    <div className=" rounded-lg bg-[#FF385C]  shadow-md">
      <div className=" rounded-t-lg border-b-2 px-4 py-2 text-sm font-bold text-white">
        Announce
      </div>
      <div className="flex flex-col">
        {announcements.map((announcement: AnnouncementItem) => (
          <div
            key={announcement.announce_id}
            className="flex items-center border-b-2 border-white px-4 py-2 text-sm text-white"
          >
            <span
              className={`rounded-lg px-2 py-1 text-xs font-semibold text-white ${categoryColors[announcement.category_name] || 'bg-gray-500'}`}
            >
              {announcement.category_name.charAt(0).toUpperCase() + announcement.category_name.slice(1)}
            </span>
            <span className="ml-2">
              {parse(announcement.display_message)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
