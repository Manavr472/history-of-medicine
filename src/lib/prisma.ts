import { PrismaClient } from '@/generated/prisma'

declare global {
  // This prevents multiple instances of Prisma Client in development
  var prisma: PrismaClient | undefined
}

export const prisma = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma
}
