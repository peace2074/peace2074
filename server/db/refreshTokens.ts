import { prisma } from "."
import type { TReshreshToken } from "~~/types";

export const createRefreshToken = (refreshToken: TReshreshToken) => {
    return prisma.refreshToken?.create({
        data: refreshToken
    })
}

export const getRefreshTokenByToken = (rtoken: string) => {
    if (!rtoken) return 'null'
    return prisma.refreshToken?.findUnique({
        where: {
            token: rtoken
        }
    })
}


export const removeRefreshToken = (rtoken: TReshreshToken) => {
    return prisma.refreshToken?.delete({
        where: {
            id: rtoken.id
        }
    })
}