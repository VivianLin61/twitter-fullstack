import Image from 'next/image';
import React from 'react';
import {
  AiFillLike,
  AiOutlineRetweet,
  AiOutlineShopping,
} from 'react-icons/ai';

export const FeedCard = () => {
  return (
    <div className='flex gap-2 border-t border-b max-w-xl mx-auto my-8 p-4  shadow-md rounded-md'>
      <Image
        className='h-10 w-10 rounded-full'
        src='https://pbs.twimg.com/profile_images/1256841238298292232/ycqwaMI2_400x400.jpg'
        alt='Naval'
        width={40}
        height={40}
      />
      <div className='px-2'>
        <div className='font-medium'>Naval Ravikant</div>
        <p className='text-base text-white'>
          "You don’t want fame, you want respect." "The same standards that you
          apply to other people." "Respect comes from living up to their
          standards." "You don’t want respect, you want self-respect."
        </p>
        <div className='grid grid-cols-4 items-start justify-between mt-4'>
          <AiFillLike className='h-6 w-6' />
          <AiOutlineRetweet className='h-6 w-6' />
          <AiOutlineShopping className='h-6 w-6' />
          <AiOutlineShopping className='h-6 w-6' />
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
