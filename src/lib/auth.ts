import NextAuth, { DefaultSession, NextAuthOptions, getServerSession } from "next-auth"

import { PrismaAdapter } from "@next-auth/prisma-adapter";

import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import { GetServerSidePropsContext } from "next";
import { prisma } from "@/lib/db";

import { getProvidersEnv } from "@/utils/env";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            // ...other properties
            // role: UserRole;
        } & DefaultSession["user"];
    }

    // interface User {
    //   // ...other properties
    //   // role: UserRole;
    // }
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        session({ session, token }) {
            if (session.user && token.sub) {
                session.user.id = token.sub;
            }
            return session;
        },
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: getProvidersEnv().DISCORD_CLIENT_ID,
            clientSecret: getProvidersEnv().DISCORD_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId: getProvidersEnv().GOOGLE_CLIENT_ID,
            clientSecret: getProvidersEnv().GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error", // Error code passed in query string as ?error=
    },


}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
    req: GetServerSidePropsContext["req"];
    res: GetServerSidePropsContext["res"];
}) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
};
