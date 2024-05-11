import { GraphQLContext } from "../../interface";
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

export const resolvers = { queries };
