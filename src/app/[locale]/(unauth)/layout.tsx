'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { TbDatabaseSmile } from 'react-icons/tb';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const searchUrl = `https://pantip.com/search?q=${encodeURIComponent(searchQuery)}`;
      window.location.href = searchUrl;
    }
  };

  return (
    <div>
      <nav className="my-auto flex flex-col items-center justify-between border-b-2 px-6 py-4 md:flex-row">
        <div className="mb-4 flex w-full justify-between text-2xl font-bold text-[#FF385C] md:mb-0 md:w-auto">
          <Link href="/">
            <div className="flex items-center justify-center text-3xl">
              <TbDatabaseSmile />
              Pantip
            </div>
          </Link>
          <div className="relative">
            <button
              type="button"
              onClick={toggleDropdown}
              className="flex items-center space-x-2 rounded-full border border-gray-300 p-2 transition-shadow hover:shadow-lg md:hidden"
            >
              <span className="text-sm">User</span>
              <Image
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="User"
                width={24}
                height={24}
                className="rounded-full"
              />
            </button>
          </div>
        </div>

        <div className="flex w-full items-center rounded-full bg-gray-100 p-2 px-6 shadow-sm md:mb-0 md:w-1/3">
          <input
            type="text"
            placeholder="ค้นหาบน Pantip"
            className="w-full  bg-transparent focus:outline-none"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button
            type="button"
            className="ml-2 rounded-full bg-[#FF385C] p-2 text-white transition-colors hover:bg-[#5c202b]"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between gap-4 space-x-4 text-[#222222]">
          <Link href="/">ตั้งกระทู้</Link>
          <Link href="/">คอมมูนิตี้</Link>
          <div className="relative">
            <button
              type="button"
              onClick={toggleDropdown}
              className="hidden items-center space-x-2 rounded-full border border-gray-300 p-2 transition-shadow hover:shadow-lg md:flex"
            >
              <span className="text-sm">ผู้ใช้งาน</span>
              <Image
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="User"
                width={24}
                height={24}
                className="rounded-full"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 hidden w-48 flex-col rounded-lg border border-gray-300 bg-white shadow-lg md:flex">
                <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  โปรไฟล์
                </Link>
                <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  ตั้งค่า
                </Link>
                <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-6 px-4">{props.children}</div>
    </div>
  );
}
