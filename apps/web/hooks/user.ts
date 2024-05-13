import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from 'clients/api';
import { getCurrentUserQuery, getUserByIdQuery } from 'graphql/query/user';

export const useGetCurrentUser = () => {
  const query = useQuery({
    queryKey: ['getCurrentUser'],
    queryFn: () => graphqlClient.request(getCurrentUserQuery),
  });
  return { ...query, user: query.data?.getCurrentUser };
};

export const useGetUserById = (id: string) => {
  const query = useQuery({
    queryKey: ['getUserById'],
    queryFn: () => graphqlClient.request(getUserByIdQuery, { id }),
  });
  return { ...query, user: query.data?.getUserById };
};
