'use client';

import { useEffect, useState } from 'react';

import Announcement from '@/components/Announce';
import HighlightCarousel from '@/components/HighlightCarousel';
import RecommendedRoom from '@/components/RecommendRoom';
import RoomList from '@/components/RoomList';

export default function Index() {
  const [announcement, setAnnouncement] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [roomList, setRoomList] = useState([]);
  const [recommendRoom, setRecommendRoom] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pantip.com/api/forum-service/forum/get_announce?room=homepage&limit=3', {
          method: 'GET',
          headers: {
            ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        await setAnnouncement(result.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pantip.com/api/forum-service/home/get_room_recommend?tracking_code=%7Bsacpjz1ewqgGrD0XqPvYx%7D', {
          method: 'GET',
          headers: {
            ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        await setRoomList(result.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pantip.com/api/forum-service/home/get_highlight', {
          method: 'GET',
          headers: {
            ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        await setHighlight(result.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pantip.com/api/forum-service/home/get_suggest_topic_behavior?tracking_code=sacpjz1ewqgGrD0XqPvYx', {
          method: 'GET',
          headers: {
            ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        await setRecommendRoom(result.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <Announcement announcements={announcement} />
      <RoomList data={roomList} />
      <HighlightCarousel data={highlight} />
      {recommendRoom.length > 0 && recommendRoom.map((room, index) => (
        <RecommendedRoom key={index} room={room} />
      ))}

    </div>
  );
}
