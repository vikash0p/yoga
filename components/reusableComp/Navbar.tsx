'use client'
import { MoveRight } from "lucide-react";
import { links } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar: React.FC = () => {


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
              className="cursor-pointer w-40 h-12"
            />
          </Link>
        </div>
        {/* links */}
        <div className="flex space-x-10">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="text-xl">{link.label}</span>
            </Link>
          ))}
        </div>
        {/* book the session */}
        <button className="px-10  flex flex-row gap-2 border border-black rounded-full py-3 items-center group me-20"  ><span>Book Now</span>  <MoveRight className="group-hover:translate-x-2 transition" /></button>
      </div>
    </nav>
  );
};

export default Navbar;
