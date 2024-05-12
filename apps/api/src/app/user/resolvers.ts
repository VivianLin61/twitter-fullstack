import { User } from "@prisma/client";
import { GraphQLContext } from "../../interface";
import { prismaClient } from "../clients/db";
import { UserService } from "../service/user";

const queries = {
  verifyGoogleToken: async (parent: any, { token }: { token: string }) => {
    const newToken = UserService.verifyGoogleAuthToken(token);
    return newToken;
  },
  getCurrentUser: async (parent: any, args: any, context: GraphQLContext) => {
    if (!context.user?.id) return null;
    const id = context.user.id;
    console.log(id);
    const user = await UserService.getUserById(id);
    return user;
    // return await UserService.getUserById(context.user.id);
  },
};

const extraResolvers = {
  User: {
    tweets: (parent: User) =>
      prismaClient.tweet.findMany({ where: { author: { id: parent.id } } }),
  },
};

export const resolvers = { queries, extraResolvers };
