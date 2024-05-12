'use client';
import { Tweet } from 'gql/graphql';
import { useGetAllTweets } from 'hooks/tweets';
import React from 'react';

import FeedCard from './FeedCard';

export const Feed = () => {
  const { tweets = [] } = useGetAllTweets();
  return (
    <>
      {tweets?.map((tweet: Tweet) =>
        tweet ? <FeedCard key={tweet?.id} tweet={tweet as Tweet} /> : null
      )}
    </>
  );
};
