import { Tweet } from "@prisma/client";
import { GraphQLContext } from "../../interface";
import { prismaClient } from "../clients/db";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { redisClient } from "../clients/redis";
import { TweetService } from "../service/tweet";
interface CreateTweetData {
  content: string;
  imgUrl?: string;
}

const s3Client = new S3Client({
  region: process.env.AWS_DEFAULT_REGION,
});

const queries = {
  getAllTweets: async () => {
    const cachetTweets = await redisClient.get("ALL_TWEETS");
    if (cachetTweets) return JSON.parse(cachetTweets);
    const tweets = await TweetService.getAllTweets();
    await redisClient.set("ALL_TWEETS", JSON.stringify(tweets));
    return tweets;
  },
  getTweetImgPresignedUrl: async (
    parent: any,
    { ImgName, ImgType }: { ImgName: string; ImgType: string },
    ctx: GraphQLContext
  ) => {
    if (!ctx.user || !ctx.user?.id) throw new Error("Unauthorized action");
    const allowedImgTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/webp",
    ];

    if (!allowedImgTypes.includes(ImgType))
      throw new Error("Invalid image type");
    const putObjectCommand = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `uploads/${ctx.user.id}/${
        ImgName.split(".")[0]
      }-${Date.now().toString()}.${ImgType.split("/")[1]}`,
    });
    const signedUrl = await getSignedUrl(s3Client, putObjectCommand, {
      expiresIn: 300,
    });

    return signedUrl;
  },
};

const mutations = {
  createTweet: async (
    parent: any,
    { payload }: { payload: CreateTweetData },
    ctx: GraphQLContext
  ) => {
    if (!ctx.user?.id) throw new Error("Unauthorized action");
    const tweet = await prismaClient.tweet.create({
      data: {
        content: payload.content,
        imgUrl: payload.imgUrl,
        author: { connect: { id: ctx.user?.id } },
      },
    });
    return tweet;
  },
};

const extraResolvers = {
  Tweet: {
    author: (parent: Tweet) =>
      prismaClient.user.findUnique({ where: { id: parent.authorId } }),
  },
};

export const resolvers = { mutations, extraResolvers, queries };
