"use client"

import ResponsiveNavbar from "@/components/layout/ResponsiveNavbar";
import {
    signOut, useSession,
} from "next-auth/react";

import Image from 'next/image'

export default function Home() {
    const session = useSession();

    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-24">
            Welcome to homepage {session.data?.user.name}! <br />
            <Image
                src={session.data?.user.image ?? "/default_avatar.png"}
                alt="Picture of the author"
                width={50}
                height={50}
            />
            <button
                className="w-full !bg-indigo-700 !text-white"
                onClick={() => void signOut()}
            >Sign out</button>

        </main>
    )
}
