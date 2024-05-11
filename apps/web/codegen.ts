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
  hooks: {
    afterOneFileWrite: [
      "sed -i '' -e '1s|.*|import type { GraphQLClient, RequestOptions } from \"graphql-request\";|' -e '2s|.*|type GraphQLClientRequestHeaders = RequestOptions[\"requestHeaders\"];|' src/lib/graphql/generated.ts",
    ],
  },
};

export default config;
