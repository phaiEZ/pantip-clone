import Link from 'next/link';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type HighlightItem = {
  name: string;
  message: string;
  weight: number;
  image_url: string[];
  post_url: string;
};

type HighlightCarouselProps = {
  data: HighlightItem[];
};

const HighlightCarousel: React.FC<HighlightCarouselProps> = ({ data }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    <div className="my-6 ">

      <div className="rounded-lg  bg-[#FF385C] shadow-lg">
        <div className="px-5 pt-4 text-xl font-bold text-white ">Highlight</div>
        <div className="relative flex items-center ">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={scrollLeft}
            className="absolute left-0 z-10 hidden rounded-full bg-white p-2 text-black shadow-md md:flex"
          >
            <FaChevronLeft />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="minimal-scrollbar flex gap-4 overflow-x-auto p-4"
          >

            {data.map((item, index) => (
              <Link href={item.post_url} key={index} className="w-60 shrink-0 rounded-lg bg-white p-4 shadow-md">
                <img
                  src={item.image_url[0] || '/path/to/placeholder.jpg'}
                  alt={item.name}
                  className="mb-4 w-full rounded object-contain"
                />
                <div className="text-sm text-black">{item.name}</div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={scrollRight}
            className="absolute right-0 z-10 hidden rounded-full bg-white p-2 text-black shadow-md md:flex"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighlightCarousel;
