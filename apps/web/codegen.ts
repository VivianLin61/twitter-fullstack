import type { CodegenConfig } from '@graphql-codegen/cli';

const backendURL = 'http://localhost:8000/graphql';
const config: CodegenConfig = {
  overwrite: true,
  schema: backendURL,
  documents: '**/*.{ts,tsx}',
  generates: {
    'gql/': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
