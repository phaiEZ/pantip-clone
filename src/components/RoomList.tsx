import Link from 'next/link';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type RoomListProps = {
  data: RoomItemProps[];
};

type RoomItemProps = {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  description: string;
  link_url: string;
  room_icon_url: string;
  is_pinned: boolean;
  pinned_time: string | null;
  order: number | null;
};

const RoomItem: React.FC<RoomItemProps> = ({
  name,
  name_en,
  link_url,
  room_icon_url,
}) => {
  return (
    <Link href={link_url}>
      <li className="m-2 flex cursor-pointer flex-col items-center p-4">
        <img
          src={room_icon_url}
          alt={`${name_en} Icon`}
          className="size-10"
          style={{ filter: 'grayscale(100%) brightness(50%) contrast(100%)' }}
        />
        <div className="text-center text-[#222222]">{name}</div>

      </li>
    </Link>
  );
};

const RoomList: React.FC<RoomListProps> = ({ data }) => {
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -150,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 150,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <div className="relative mt-3">
        <button
          type="button"
          onClick={scrollLeft}
          className="absolute left-0 z-10 hidden rounded-full bg-white p-2 text-black shadow-md md:flex"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <FaChevronLeft />
        </button>
        <ul
          ref={scrollContainerRef}
          className="minimal-scrollbar flex overflow-x-auto whitespace-nowrap"
          style={{ paddingLeft: '20px', paddingRight: '20px' }}
        >
          {data.map(item => (
            <RoomItem
              key={item.id}
              id={item.id}
              name={item.name}
              name_en={item.name_en}
              slug={item.slug}
              description={item.description}
              link_url={item.link_url}
              room_icon_url={item.room_icon_url}
              is_pinned={item.is_pinned}
              pinned_time={item.pinned_time}
              order={item.order}
            />
          ))}
        </ul>

        <button
          type="button"
          onClick={scrollRight}
          className="absolute right-0 z-10 hidden rounded-full bg-white p-2 text-black shadow-md md:flex"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RoomList;
