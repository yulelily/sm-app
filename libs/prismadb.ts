import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// prevent nextjs from spawning 100 prisma clients like a mob of gremlins
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV != "production") {
  globalThis.prisma = client;
}

export default client;
