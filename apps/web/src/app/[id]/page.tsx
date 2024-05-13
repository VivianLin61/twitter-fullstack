// "use client";
import React from 'react';

import UserProfile from '@/components/UserProfile';
import UserTweets from '@/components/UserTweets';

const ProfilePage = () => {
  return (
    <main>
      <UserProfile />
      <UserTweets />
    </main>
  );
};

export default ProfilePage;
