/** 
 * Helper function to get environment variables with error handling
 */

const getEnv = () => {
    const NODE_ENV = process.env.NODE_ENV;
    return {
        NODE_ENV,
    }
}

const getProvidersEnv = () => {
    // Get the env for GoogleProvider
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
        throw new Error("Missing env variables for GoogleProvider");
    }

    // Get the env for DiscordProvider
    const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
    const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
    if (!DISCORD_CLIENT_ID || !DISCORD_CLIENT_SECRET) {
        throw new Error("Missing env variables for DiscordProvider");
    }

    return {
        GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET,
        DISCORD_CLIENT_ID,
        DISCORD_CLIENT_SECRET,
    };
};

const getDatabaseEnv = () => {
    const DATABASE_URL = process.env.DATABASE_URL;
    if (!DATABASE_URL) {
        throw new Error("Missing env variable for DATABASE_URL");
    }

    // Postgres database env variables
    const POSTGRES_URL = process.env.POSTGRES_URL;
    const POSTGRES_PRISMA_URL = process.env.POSTGRES_PRISMA_URL;
    const POSTGRES_URL_NON_POOLING = process.env.POSTGRES_URL_NON_POOLING;
    const POSTGRES_USER = process.env.POSTGRES_USER;
    const POSTGRES_HOST = process.env.POSTGRES_HOST;
    const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
    const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE;

    if (!POSTGRES_URL || !POSTGRES_PRISMA_URL || !POSTGRES_URL_NON_POOLING || !POSTGRES_USER || !POSTGRES_HOST || !POSTGRES_PASSWORD || !POSTGRES_DATABASE) {
        throw new Error("Missing env variables for Postgres");
    }

    return {
        DATABASE_URL,
        POSTGRES_URL,
        POSTGRES_PRISMA_URL,
        POSTGRES_URL_NON_POOLING,
        POSTGRES_USER,
        POSTGRES_HOST,
        POSTGRES_PASSWORD,
        POSTGRES_DATABASE,
    };
};

const getNextAuthEnv = () => {
    const NEXTAUTH_URL = process.env.NEXTAUTH_URL;
    if (!NEXTAUTH_URL) {
        throw new Error("Missing env variable for NEXTAUTH_URL");
    }

    const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;
    if (!NEXTAUTH_SECRET) {
        throw new Error("Missing env variable for NEXTAUTH_SECRET");
    }

    return {
        NEXTAUTH_URL,
        NEXTAUTH_SECRET,
    };
}

export {
    getEnv,
    getProvidersEnv,
    getDatabaseEnv,
    getNextAuthEnv,
}