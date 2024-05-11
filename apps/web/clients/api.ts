import { QueryClient } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';
const isClient = typeof window !== 'undefined';
const url = 'http://localhost:8000/graphql';
export const graphqlClient = new GraphQLClient(url, {
  headers: () => ({
    Authorization: isClient ? `Bearer ${localStorage.getItem('token')}` : '',
  }),
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
