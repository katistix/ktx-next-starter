import { PrismaClient } from "@prisma/client";
import { serverEnv } from "@/utils/serverEnv";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log:
            serverEnv.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });

if (serverEnv.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
