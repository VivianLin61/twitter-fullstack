import { GraphQLClient } from 'graphql-request';
// import { QueryClient } from 'react-query';

const isClient = typeof window !== 'undefined';
const url = 'http://localhost:8000/graphql';
export const graphqlClient = new GraphQLClient(url, {
  headers: () => ({
    Authorization: isClient ? `Bearer ${localStorage.getItem('token')}` : '',
  }),
});

// export const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });
