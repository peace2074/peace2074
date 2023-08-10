import { prisma } from ".";

export const createMediaFile = (mediaFile: { url: any; providerPublicId: any; userId: any; tweetId: string; }) => {
    return prisma.mediaFile?.create({
        data: mediaFile
    })
}
