'use client';
import { Tweet } from 'gql/graphql';
import { useGetCurrentUser } from 'hooks/user';
import React from 'react';

import FeedCard from './FeedCard';

const UserTweets = () => {
  const { user } = useGetCurrentUser();
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
