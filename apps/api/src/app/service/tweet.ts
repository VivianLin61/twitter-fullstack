import { prismaClient } from "../clients/db";

export interface CreateTweetData {
  content: string;
  imgUrl?: string;
  userId: string;
}

export class TweetService {
  public static getAllTweets() {
    return prismaClient.tweet.findMany({ orderBy: { createdAt: "desc" } });
  }
  public static async createTweet(data: CreateTweetData) {
    const tweet = await prismaClient.tweet.create({
      data: {
        content: data.content,
        imgUrl: data.imgUrl,
        author: { connect: { id: data.userId } },
      },
    });

    return tweet;
  }
}
