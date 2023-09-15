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
    POSTGRES_USER: z.string().nonempty(),
    POSTGRES_PASSWORD: z.string().nonempty(),
    DATABASE_URL: z.string().nonempty(),
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