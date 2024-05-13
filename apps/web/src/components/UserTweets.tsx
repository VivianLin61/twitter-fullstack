'use client';
import { Tweet } from 'gql/graphql';
import { useGetUserById } from 'hooks/user';
import React from 'react';

import FeedCard from './FeedCard';

const UserTweets = ({ id }: { id: string }) => {
  const { user } = useGetUserById(id);
  const tweets = user?.tweets;
  return (
    <>
      {tweets?.map((tweet: Tweet) =>
        tweet ? <FeedCard key={tweet?.id} tweet={tweet as Tweet} /> : null
      )}
    </>
  );
};

export default UserTweets;
