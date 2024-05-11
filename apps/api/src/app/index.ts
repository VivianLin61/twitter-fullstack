import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";

export const initServer = async () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  const graphqlServer = new ApolloServer({
    typeDefs: `
        type Query {
            hello: String
        }
    `,
    resolvers: {
      Query: {
        hello: () => "Hello, world!",
      },
    },
  });
  await graphqlServer.start();

  //highlight-start
  app.use(
    "/graphql",
    expressMiddleware(graphqlServer, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  return app;
  //highlight-end
};
