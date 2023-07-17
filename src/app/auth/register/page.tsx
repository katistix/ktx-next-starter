"use client"

import { HSeparator } from "@/components/primitives/HSeparator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthErrorToast } from "@/utils/authErrorMessages";
import { faDiscord, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {


    // Stated for the form (if you want to use it)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleCredentialsRegister = async (e: any) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

    };

    const handleSocialRegister = async (provider: string) => {
        await signIn(provider, {
            callbackUrl: "/",
        });
    }

    useAuthErrorToast();




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
                            Welcome to our app!
                        </h1>
                        <p className="text-gray-500 text-md">
                            Create an account to continue!
                        </p>
                    </div>
                    {/* Social Logins */}
                    <div className="flex flex-col items-center justify-center w-full space-y-4">
                        {/* Facebook */}
                        <Button
                            className=" shadow-md w-full !bg-blue-500"
                            onClick={() => handleSocialRegister("facebook")}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className="ml-2">Continue with Facebook</span>
                        </Button>

                        <Button
                            className="shadow-md w-full !bg-white !text-gray-700"
                            onClick={() => handleSocialRegister("google")}>
                            <FontAwesomeIcon icon={faGoogle} />
                            <span className="ml-2">Continue with Google</span>
                        </Button>
                        <Button
                            className="shadow-md w-full !bg-indigo-700 !text-white"
                            onClick={() => handleSocialRegister("discord")}>
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
                        {/* Confirm Password */}
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {/* Login button */}
                        <Button
                            type="submit"
                            className="w-full"
                            onClick={handleCredentialsRegister}
                        >
                            Create Account
                        </Button>
                    </form>
                    {/* Already have account */}
                    <div className="flex flex-col items-center justify-center w-full space-y-2">
                        <p className="mt-4 text-xs text-gray-500">
                            Already have an account?
                            <Link
                                className="ml-1 text-xs font-medium text-gray-900"
                                href="/auth/signin">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}