'use client';
import { User } from 'gql/graphql';
import { useGetUserById } from 'hooks/user';
import Image from 'next/image';
import React from 'react';

import FollowButton from './FollowButton';

const UserProfile = ({ id }: { id: string }) => {
  const { user } = useGetUserById(id);

  return (
    <section className='border-b border-gray-600'>
      <Image
        src='https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
        width={800}
        height={300}
        alt='cover'
        className='h-56 w-full object-cover'
      />
      <FollowButton className='float-right m-4' user={user as User} />
      <div className='-mt-24 px-4'>
        {user?.profileImgUrl && (
          <Image
            src={user?.profileImgUrl}
            width={200}
            height={200}
            alt='profile image'
            className='rounded-full border-4 border-black'
          />
        )}
        <h3 className='text-2xl font-bold'>
          {user?.firstName} {user?.lastName}
        </h3>
        {user && (
          <p className='text-gray-600'>
            @{user?.firstName}
            {user?.lastName}
          </p>
        )}
      </div>
      <div className=' flex items-center gap-2 text-center'>
        <button>
          <span>{user?.following?.length} </span>
          <span className='text-gray-600'>Following</span>
        </button>
        <button>
          <span>{user?.followers?.length} </span>
          <span className='text-gray-600'>Followers</span>
        </button>
      </div>
    </section>
  );
};

export default UserProfile;
