'use client'
import { links } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {


  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={128}
              height={48}
              className="cursor-pointer w-32 h-12"
            />
          </Link>
        </div>
        <div className="flex space-x-4">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="text-lg">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
