'use client';
import { useGetCurrentUser } from 'hooks/user';
import Link from 'next/link';
import React, { FC } from 'react';
import {
  BiEnvelope,
  BiSearch,
  BiSolidHomeCircle,
  BiUser,
} from 'react-icons/bi';
import { BsBell, BsBookmark, BsTwitter } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { RiFileList2Line } from 'react-icons/ri';
import { VscVerified } from 'react-icons/vsc';

import { ProfileButton } from './ProfileButton';

type sidebarElementType = {
  icon: JSX.Element;
  text: string;
  link: string;
};

const Sidebar: FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const { user } = useGetCurrentUser();
  const sidebarElements: sidebarElementType[] = [
    { icon: <BiSolidHomeCircle />, text: 'Home', link: '/' },
    { icon: <BiSearch />, text: 'Explore', link: '/' },
    { icon: <BsBell />, text: 'Notifications', link: '/' },
    { icon: <BiEnvelope />, text: 'Messages', link: '/' },
    { icon: <RiFileList2Line />, text: 'Lists', link: '/' },
    { icon: <BsBookmark />, text: 'Bookmarks', link: '/' },
    { icon: <FiUsers />, text: 'Communities', link: '/' },
    { icon: <VscVerified />, text: 'Verified', link: '/' },
    { icon: <BiUser />, text: 'Profile', link: `/${user?.id}` },
    { icon: <CgMoreO />, text: 'More', link: '/' },
  ];
  return (
    <nav
      className={`${className} fixed bottom-0 flex w-full items-center border-t border-t-gray-600 p-2 md:relative md:flex md:flex-col md:border-t-0 lg:items-end`}
    >
      <div className='w-full md:w-fit'>
        <div className='mb-2 hidden w-max rounded-full p-2 text-3xl transition-all hover:bg-gray-900 md:block'>
          <BsTwitter />
        </div>
        <ul className='menuContainer flex justify-around py-1 md:block'>
          {sidebarElements.map((element) => (
            <Link href={element.link} key={element.text}>
              <li className='flex w-max cursor-pointer items-center justify-evenly gap-5 rounded-full p-2 transition-all  hover:bg-gray-900 md:my-4'>
                <span className='text-2xl'>{element.icon}</span>
                <span className='hidden text-xl font-medium lg:block'>
                  {element.text}
                </span>
              </li>
            </Link>
          ))}
        </ul>
        <button className='hidden h-12 w-full max-w-[56rem] rounded-full bg-blue-500 py-2 font-medium text-white lg:block'>
          Post
        </button>
      </div>
      <ProfileButton className='absolute bottom-0 right-0 mb-4 hidden w-full max-w-fit items-center gap-2 md:flex' />
    </nav>
  );
};

export default Sidebar;
