import { PrismaClient } from "@prisma/client";
import { getEnv } from "@/utils/env";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log:
            getEnv().NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });

if (getEnv().NODE_ENV !== "production") globalForPrisma.prisma = prisma;
