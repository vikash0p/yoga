"use client";
import { MoveRight } from "lucide-react";
import { links } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";
import { Sidebar } from "./SideBar";
import { useTheme } from "next-themes";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  return (
    <nav className="p-4">
      <div className="w-full flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={128}
              height={48}
              priority
              sizes="(max-width: 768px) 100vw, 200px"
              className="cursor-pointer w-40 h-12"
            />
          </Link>
        </div>
        {/* links */}
        <div className="hidden md:space-x-5 xl:space-x-10 md:flex">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="text-xl">{link.label}</span>
            </Link>
          ))}
        </div>
        {/* book session and mode toggle */}
        <div className="lg:flex hidden flex-row gap-3 lg:me-6 xl:me-10 ">
          {/* book the session */}
          <button
            className={`px-10  flex flex-row gap-2 border border-black rounded-full py-3 items-center group ${
              theme === "dark" && "border-white"
            }`}
          >
            <span>Book Now</span>{" "}
            <MoveRight className="group-hover:translate-x-2 transition" />
          </button>

          {/* add the ModeToggle */}
          <div className="lg:ms-5 xl:ms-10">
            <ModeToggle />
          </div>
        </div>

        {/* add the sidebar */}
        <div className="md:hidden">
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
