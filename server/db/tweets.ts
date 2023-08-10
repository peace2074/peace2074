import { prisma } from ".";


export const createTweet = (tweetData) => {
    return prisma.tweet?.create({
        data: tweetData
    })
}

export const getTweets = async (params = {}) => {
    try {
        return await prisma.tweet?.findMany({
            ...params
        })
    } catch (error) {
        return []

    }
}

export const getTweetById = (tweetId: string, params: { where?: object } = {}) => {
    return prisma.tweet?.findUnique({
        ...params,
        where: {
            ...params.where,
            id: tweetId
        },
    })
}