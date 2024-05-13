import React from 'react';

import UserProfile from '@/components/UserProfile';
import UserTweets from '@/components/UserTweets';

const ProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <UserProfile id={params.id} />
      <UserTweets id={params.id} />
    </main>
  );
};

export default ProfilePage;
