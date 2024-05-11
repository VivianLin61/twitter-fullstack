import React from 'react';
import { BiHomeCircle } from 'react-icons/bi';
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsHash,
  BsPerson,
  BsThreeDots,
  BsTwitter,
} from 'react-icons/bs';

import FeedCard from '@/components/FeedCard';

interface TwitterSidebarButton {
  title: string;
  icons: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icons: <BiHomeCircle />,
  },
  {
    title: 'Explore',
    icons: <BsHash />,
  },
  {
    title: 'Notifications',
    icons: <BsBell />,
  },
  {
    title: 'Messages',
    icons: <BsEnvelope />,
  },
  {
    title: 'Bookmarks',
    icons: <BsBookmark />,
  },
  {
    title: 'Profile',
    icons: <BsPerson />,
  },
  {
    title: 'More',
    icons: <BsThreeDots />,
  },
];
export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-12 h-screen w-screen px-56'>
        <div className='col-span-3 justify-start pt-8'>
          <div className='text-4xl hover:bg-gray-600 rounded-full p-2 h-fit cursor-pointer transition-all'>
            <BsTwitter />
          </div>
          <div className='mt-4 text-2xl font-semibold'>
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className='flex justify-start items-center gap-4 hover:bg-gray-800 w-fit p-5 rounded-2xl cursor-pointer'
                >
                  <span className='text-2xl'>{item.icons}</span>
                  <span className='text-xl'>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className='mt-5 px-3'>
              <button className='bg-[#1d9bf0] font-semibold text-lg rounded-full w-full p-4'>
                Tweet
              </button>
            </div>
          </div>
        </div>

        <div className='col-span-6 border-r-[1px] border-l-[1px] border-gray-400'>
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        <div className='col-span-3'></div>
      </div>
    </div>
  );
}
