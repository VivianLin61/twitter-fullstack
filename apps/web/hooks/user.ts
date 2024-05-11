import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from 'clients/api';
import { getCurrentUserQuery } from 'graphql/query/user';

export const useGetCurrentUser = () => {
  const query = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: () => graphqlClient.request(getCurrentUserQuery),
  });
  return { ...query, user: query.data?.getCurrentUser };
};
