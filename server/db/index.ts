import { PrismaClient } from '@prisma/client'

const prisma: Partial<PrismaClient> = new PrismaClient()

export { prisma }