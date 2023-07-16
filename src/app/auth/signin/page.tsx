"use client"

import {
    signIn, useSession,
} from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { faFacebook, faDiscord, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@/components/ui/input";
import { HSeparator } from "@/components/primitives/HSeparator";
import Link from "next/link";


export default function SigninPage() {
    const session = useSession();
    const router = useRouter();

    const handleCredentialsSignin = async (e: any) => {
        e.preventDefault();
    };

    const handleSocialSignin = async (provider: string) => {
        await signIn(provider);
    };


    // States for the form (if you want to use it)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Redirect to callbackUrl if the user is logged in
    useEffect(() => {
        // Get callbackUrl from query parameters

        if (session.status === "authenticated") {
            // If the user is logged in, redirect to the callbackUrl
            router.replace("/");
        }
    }, [session, router]);


    return (
        <div className="flex items-center justify-center w-full h-screen">
            {/* Image Panel */}
            <div className="flex items-center justify-center w-1/2 h-full max-md:hidden">
                <img
                    className="object-cover w-full h-full"
                    src="https://dummyimage.com/750x1000"
                    alt=""
                />
            </div>
            {/* Form Panel */}
            <div className="flex items-center justify-center w-1/2 h-full max-md:w-screen">
                {/* Form container */}
                <div className="flex flex-col items-center justify-center p-8 space-y-4 max-md:w-full max-md:px-14 shrink-0">
                    {/* Welcome container */}
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-4xl font-bold text-gray-800">
                            Welcome back, user
                        </h1>
                        <p className="text-gray-500 text-md">
                            Welcome back! Please enter your details!
                        </p>
                    </div>
                    {/* Social Logins */}
                    <div className="flex flex-col items-center justify-center w-full space-y-4">
                        {/* Facebook */}
                        <Button
                            className=" shadow-md w-full !bg-blue-500"
                            onClick={() => handleSocialSignin("facebook")}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className="ml-2">Continue with Facebook</span>
                        </Button>

                        <Button
                            className="shadow-md w-full !bg-white !text-gray-700"
                            onClick={() => handleSocialSignin("google")}>
                            <FontAwesomeIcon icon={faGoogle} />
                            <span className="ml-2">Continue with Google</span>
                        </Button>
                        <Button
                            className="shadow-md w-full !bg-indigo-700 !text-white"
                            onClick={() => handleSocialSignin("discord")}>
                            <FontAwesomeIcon icon={faDiscord} />
                            <span className="ml-2">Continue with Discord</span>
                        </Button>
                    </div>
                    {/* or container */}
                    <HSeparator text="or" />

                    {/* Form */}
                    <form className="flex flex-col items-center justify-center w-full space-y-4">
                        {/* Email */}
                        <Input
                            type="email"
                            placeholder="Email"
                            className="w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* Password */}
                        <Input
                            type="password"
                            placeholder="Password"
                            className="w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* Forgot password */}
                        <div className="flex justify-end w-full">
                            <Link
                                className="mb-4 text-xs text-gray-500"
                                href="#">Forgot password?</Link>
                        </div>
                        {/* Login button */}
                        <Button
                            type="submit"
                            className="w-full"
                            onClick={handleCredentialsSignin}
                        >
                            Log in
                        </Button>
                    </form>
                    {/* Don't have an account */}
                    <div className="flex flex-col items-center justify-center w-full space-y-2">
                        <p className="mt-4 text-xs text-gray-500">
                            {`Don't have an account?`}
                            <Link
                                className="ml-1 text-xs font-medium text-gray-900"
                                href="#">
                                Sign up for free
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}