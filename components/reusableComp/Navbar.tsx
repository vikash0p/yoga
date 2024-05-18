"use client";
import { links } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Sidebar } from "./SideBar";
import { useTheme } from "next-themes";
import MyButton from "./MyButton";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  return (
    <nav
      className={`p-4 sticky top-0 left-0 right-0 z-50 ${
        theme === "light" && "bg-[#eae6e1] "
      }`}
    >
      <div className="w-full flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center">
          <Link href="/" className="relative w-40 h-12">
            <Image
              src="/logo.svg"
              alt="logo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 200px"
              className="cursor-pointer w-40 h-12 object-contain aspect-auto"
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
          <MyButton
            text={"Book Now"}
            ariaLabel="Click Me Button with Arrow Icon"
          />
          {/* add the ModeToggle */}
          <div className="lg:ms-5 xl:ms-10">
            <ModeToggle />
          </div>
        </div>

        {/* add the sidebar */}
        <button type="button" className="md:hidden">
          <Sidebar />
          <span className="sr-only">Toggle Sidebar</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
