import Link from 'next/link';
import React from 'react';

type Avatar = {
  large: string;
  medium: string;
  small: string;
  original?: string;
};

type Tag = {
  name: string;
  slug: string;
};

type Author = {
  id: number;
  name: string;
  avatar: Avatar;
  slug: string;
};

type Topic = {
  topic_id: number;
  topic_type: number;
  title: string;
  thumbnail_url: string | null;
  views_count: number;
  comments_count: number;
  votes_count: number;
  author: Author;
  created_time: string;
  tags: Tag[];
  category: string;
};

type Room = {
  room_id: number;
  room_name_th: string;
  room_name_en: string;
  tag_name: string;
  type: string;
  topics: Topic[];
};

type RecommendedRoomProps = {
  room: Room;
};

const RecommendedRoom: React.FC<RecommendedRoomProps> = ({ room }) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-4 shadow-md">
      {room.tag_name && (<h2 className="mb-4 text-2xl font-bold text-[#FF385C]">{room.tag_name}</h2>)}
      {room.room_name_th && (
        <h2 className="mb-4 text-2xl font-bold text-[#FF385C]">
          {room.room_name_th}
          (
          {room.room_name_en}
          )
        </h2>
      )}

      <ul className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {room.topics.map(topic => (
          <li key={topic.topic_id} className="rounded-md border px-3 pb-4 pt-2 ">
            <Link href={`https://pantip.com/topic/${topic.topic_id}`}>
              <div className="flex items-center">
                {topic.thumbnail_url && (
                  <img
                    src={topic.thumbnail_url}
                    alt={topic.title}
                    className="mr-4 size-20 rounded-lg object-cover"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{topic.title}</h3>
                  <div className="text-sm text-gray-600">
                    <p>
                      by
                      {topic.author.name}
                    </p>
                    <p>
                      Views:
                      {topic.views_count}
                      {' '}
                      | Comments:
                      {topic.comments_count}
                      {' '}
                      | Votes:
                      {topic.votes_count}
                    </p>
                    <div className="mt-2 flex items-center">
                      <img
                        src={topic.author.avatar.small}
                        alt={topic.author.name}
                        className="mr-2 size-6 rounded-full"
                      />
                      <span className="text-sm text-gray-600">{topic.author.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedRoom;
