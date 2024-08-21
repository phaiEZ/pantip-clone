'use client';

import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  type TagInfo = {
    name: string;
    slug: string;
    pageview: number;
    topic_count: number;
    follow_count: number;
  };

  const [topTags, setTopTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pantip.com/api/forum-service/home/get_tag_hit?limit=10', {
          method: 'GET',
          headers: {
            ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        await setTopTags(result.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="border-t bg-gray-100 px-4 py-8 text-gray-600">
      <div className="container mx-auto grid grid-cols-1 gap-16 md:grid-cols-4">

        <div>
          <h5 className="mb-2 font-bold text-gray-800">แท็กยอดนิยม</h5>
          <ul className="container mx-auto flex flex-col">
            {topTags.map((tagInfo: TagInfo, index) => (<li key={index}><a href={`https://pantip.com/tag/${tagInfo.name}`} className="hover:underline">{tagInfo.name}</a></li>))}

          </ul>
        </div>

        <div>
          <h5 className="mb-2 font-bold text-gray-800">Support</h5>
          <ul>
            <li><a href="https://pantip.com/about/tos" className="hover:underline">กฎ กติกาและมารยาท</a></li>
            <li><a href="https://pantip.com/about/defamation" className="hover:underline">คำแนะนำการโพสต์</a></li>
            <li><a href="https://pantip.com/about/privacy" className="hover:underline">นโยบายเกี่ยวกับข้อมูลส่วนบุคคล</a></li>
            <li><a href="https://pantip.com/about/privilege" className="hover:underline">สิทธิ์การใช้งานของสมาชิก</a></li>
            <li><a href="https://pantip.com/about/contact" className="hover:underline">ติดต่อทีมงาน Pantip</a></li>
          </ul>
        </div>

      </div>

      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
        <p>&copy; 2024 PantipClone, Inc. All rights reserved · </p>
      </div>
    </footer>
  );
};

export default Footer;
