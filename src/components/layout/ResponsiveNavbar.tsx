"use client";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
// Icons
import { faFacebook, faDiscord, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSession } from "next-auth/react";

type NavbarLink = {
    text: string;
    icon: IconDefinition
    href: string;
};

type Props = {
    className: string;
};

const ResponsiveNavbar = (props: Props) => {
    const session = useSession();

    const title: string | JSX.Element = "App Title";

    const links: NavbarLink[] = [
        { text: "Home", href: "#", icon: faHome },
        { text: "About", href: "#", icon: faHome },

    ];
    const profileLink = "#"


    const avatar = session.data?.user.image || "/default_avatar.png";
    const username = session.data?.user.name || "User";


    return (
        <>
            {/* Desktop */}
            <div
                className={` max-sm:hidden z-10 top-0 flex justify-between w-full h-16 bg-white shadow-sm ${props.className}`}
            >
                {/* Logo container */}
                <div className="flex items-center justify-between px-4 py-2">
                    <div className="text-xl font-semibold">{title}</div>
                </div>
                {/* Links container (desktop) */}
                <div className="flex items-center justify-between gap-4 px-4 py-2">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href}>
                            {link.text}
                        </Link>
                    ))}
                    {/* User profile */}
                    <div className="flex items-center gap-4">
                        <Link href={profileLink} className="!no-underline ">
                            <div className="flex items-center gap-2">
                                <Image
                                    className="w-8 h-8 rounded-full"
                                    src={avatar}
                                    alt={username}
                                    width={32}
                                    height={32}
                                />
                                {/* Username and view profile under */}
                                <div className="flex flex-col items-start justify-center">
                                    <div className="text-sm font-medium">
                                        {username}
                                    </div>
                                    <span className="text-xs text-violet-400">
                                        View profile
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
            {/* Mobile */}
            <div
                className={` border-t-[1px] fixed sm:hidden z-10 bottom-0 flex flex-col w-full h-16 bg-white shadow-sm ${props.className}`}
            >
                {/* Links container (mobile), actually icons */}
                <div className="flex items-center justify-around h-full gap-4 px-4 py-2">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <FontAwesomeIcon
                                icon={link.icon}
                                className="w-6 h-6"
                            />
                        </Link>
                    ))}
                    {/* Profile avatar */}
                    <Link
                        href={profileLink}
                        className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full"
                    >
                        <Image
                            className="w-8 h-8 rounded-full"
                            src={avatar}
                            alt={username}
                            width={32}
                            height={32}
                        />
                    </Link>
                </div>
            </div>
        </>

    );
};
export default ResponsiveNavbar;