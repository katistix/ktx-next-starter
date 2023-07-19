import { z } from 'zod';

export const serverEnvSchema = z.object({
    // Node
    NODE_ENV: z.string(),

    // Next Auth
    NEXTAUTH_SECRET: z.string().nonempty(),
    NEXTAUTH_URL: z.string().nonempty(),
    // Next Auth Discord Provider
    DISCORD_CLIENT_ID: z.string().nonempty(),
    DISCORD_CLIENT_SECRET: z.string().nonempty(),
    // Next Auth Google Provider
    GOOGLE_CLIENT_ID: z.string().nonempty(),
    GOOGLE_CLIENT_SECRET: z.string().nonempty(),
    // Database
    POSTGRES_URL: z.string().nonempty(),
    POSTGRES_PRISMA_URL: z.string().nonempty(),
    POSTGRES_URL_NON_POOLING: z.string().nonempty(),
    POSTGRES_USER: z.string().nonempty(),
    POSTGRES_HOST: z.string().nonempty(),
    POSTGRES_PASSWORD: z.string().nonempty(),
    POSTGRES_DATABASE: z.string().nonempty(),
    // Stripe
    // ...
});

try {
    serverEnvSchema.parse(process.env);
}
catch (error) {
    console.error(error);
    process.exit(1);
}
export const serverEnv = serverEnvSchema.parse(process.env);