import { graphqlClient, queryClient } from 'clients/api';
import { User } from 'gql/graphql';
import {
  followUserMutation,
  unfollowUserMutation,
} from 'graphql/mutation/user';
import { useGetCurrentUser } from 'hooks/user';
import { HTMLAttributes, useCallback, useMemo } from 'react';

interface FollowButtonProps extends HTMLAttributes<HTMLButtonElement> {
  user: User;
}

const FollowButton: React.FC<FollowButtonProps> = ({ className, user }) => {
  const { user: currentUser } = useGetCurrentUser();
  const amIfollowing = useMemo(() => {
    if (!user) return false;
    return currentUser?.following?.findIndex(
      (element: User) => element?.id === user?.id
    ) !== -1
      ? true
      : false;
  }, [currentUser?.following, user?.id]);

  const handleFollow = useCallback(async () => {
    if (!user?.id) return;
    await graphqlClient.request(followUserMutation, { to: user.id });
    await queryClient.invalidateQueries(['getCurrentUser']);
    await queryClient.invalidateQueries(['getUserById']);
  }, [queryClient, user?.id]);
  const handleUnfollow = useCallback(async () => {
    if (!user?.id) return;
    await graphqlClient.request(unfollowUserMutation, { to: user.id });
    await queryClient.invalidateQueries(['getCurrentUser']);
    await queryClient.invalidateQueries(['getUserById']);
  }, [queryClient, user?.id]);
  return !amIfollowing ? (
    <button
      className={`${className} rounded-full bg-white p-1 px-2 font-bold text-black`}
      onClick={handleFollow}
    >
      Follow
    </button>
  ) : (
    <button
      className={`${className} rounded-full bg-white p-1 px-2 font-bold text-black`}
      onClick={handleUnfollow}
    >
      Unfollow
    </button>
  );
};

export default FollowButton;
