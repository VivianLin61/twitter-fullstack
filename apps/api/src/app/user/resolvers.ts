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
  },

  getUserById: async (
    parent: any,
    { id }: { id: string },
    context: GraphQLContext
  ) => await UserService.getUserById(id),
};

const mutations = {
  followUser: async (
    parent: any,
    { to }: { to: string },
    ctx: GraphQLContext
  ) => {
    if (!ctx.user || !ctx.user.id) throw new Error("Unauthenticated");
    await UserService.followUser(ctx.user.id, to);
    return true;
  },
  unfollowUser: async (
    parent: any,
    { to }: { to: string },
    ctx: GraphQLContext
  ) => {
    if (!ctx.user || !ctx.user.id) throw new Error("Unauthenticated");
    await UserService.unfollowUser(ctx.user.id, to);
    return true;
  },
};
const extraResolvers = {
  User: {
    tweets: (parent: User) =>
      prismaClient.tweet.findMany({ where: { author: { id: parent.id } } }),
    followers: async (parent: User) => {
      const result = await prismaClient.follows.findMany({
        where: { following: { id: parent.id } },
        include: { follower: true },
      });
      return result.map((e) => e.follower);
    },
    following: async (parent: User) => {
      const result = await prismaClient.follows.findMany({
        where: { follower: { id: parent.id } },
        include: { following: true },
      });
      return result.map((e) => e.following);
    },
  },
};

export const resolvers = { queries, extraResolvers, mutations };
