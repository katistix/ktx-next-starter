"use client"

import {
    signIn, useSession,
} from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SigninPage() {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        // Get callbackUrl from query parameters
        const urlQuery = window.location.search;
        const urlParams = new URLSearchParams(urlQuery);
        const callbackUrl = urlParams.get("callbackUrl");

        if (session.data) {
            // If the user is logged in, redirect to the callbackUrl
            router.replace(callbackUrl ?? "/");
        }
    }, [session, router]);



    return (
        <button
            className="w-full !bg-indigo-700 !text-white"
            onClick={() => void signIn("discord")}
        >Login with discord</button>
    )

}