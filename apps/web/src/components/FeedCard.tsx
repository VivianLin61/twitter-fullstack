import { Tweet } from 'gql/graphql';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import { CgPoll } from 'react-icons/cg';
import { FaRetweet } from 'react-icons/fa';
import { FiMoreHorizontal, FiUpload } from 'react-icons/fi';

interface feedCardProps {
  tweet: Tweet;
}

const FeedCard: React.FC<feedCardProps> = ({ tweet }) => {
  return (
    <div className='grid grid-cols-12 p-4 gap-3 cursor-pointer border-b-[0.5px] border-gray-800 hover:bg-gray-900/20 transition-all'>
      {tweet.author?.profileImgUrl && (
        <Image
          src={tweet.author.profileImgUrl}
          width={50}
          height={50}
          alt='avatar'
          className='col-span-1 rounded-full'
        />
      )}
      <div className='col-span-11 '>
        <span className='float-right text-gray-600 py-1'>
          <FiMoreHorizontal />
        </span>
        <Link href={`/${tweet.author?.id}`}>
          <span className='font-semibold'>
            {tweet.author?.firstName} {tweet.author?.lastName}
          </span>
        </Link>
        <div className='my-1'>{tweet.content}</div>
        {tweet.imgUrl && (
          <Image
            src={tweet.imgUrl}
            alt='tweet image'
            height={200}
            width={300}
          />
        )}
      </div>
      <div className='col-span-11 col-start-2 flex justify-between items-center text-gray-600 text-xl'>
        <span className='flex items-center gap-2'>
          <BiMessageRounded />
          <span className='text-sm'>652</span>
        </span>
        <span className='flex items-center gap-2'>
          <FaRetweet />
          <span className='text-sm'>652</span>
        </span>
        <span className='flex items-center gap-2'>
          <AiOutlineHeart />
          <span className='text-sm'>652</span>
        </span>
        <span className='flex items-center gap-2'>
          <CgPoll />
          <span className='text-sm'>652</span>
        </span>
        <FiUpload />
      </div>
    </div>
  );
};

export default FeedCard;
