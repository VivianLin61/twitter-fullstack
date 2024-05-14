'use client';
import { User } from 'gql/graphql';
import { useGetCurrentUser } from 'hooks/user';
import Image from 'next/image';
import React from 'react';

import { LoginButton } from './LoginButton';

export const RightSidebar = () => {
  const { user } = useGetCurrentUser();
  //   console.log(user.recommendedUsers);
  return (
    <div className='flex flex-col items-center gap-2 p-4 text-center '>
      {!user && (
        <LoginButton>
          <h1 className='mb-2 text-2xl font-semibold'>New to twitter?</h1>
        </LoginButton>
      )}
      {user?.recommendedUsers?.map((el: User) => (
        <div className='flex items-center gap-3' key={el?.id}>
          {el?.profileImgUrl && (
            <Image
              src={el?.profileImgUrl}
              alt='user-image'
              className='rounded-full'
              width={50}
              height={50}
            />
          )}
          {el?.firstName}
        </div>
      ))}
    </div>
  );
};
export default RightSidebar;
