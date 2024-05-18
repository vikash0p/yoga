"use client";
import MyButton from "@/components/reusableComp/MyButton";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    const{theme}=useTheme()
  return (
    <div className="w-full h-screen flex flex-col justify-center py-20 items-center">
      <div className="w-full h-full m-auto ">
        <div className="relative max-w-sm md:max-w-2xl lg:max-w-4xl h-full m-auto">
          {/* {theme === "light" && (
            <Image
              src={"/light.png"}
              alt="not-found"
              fill
              className="object-contain object-center"
              sizes="100vw"
            />
          )} */}
          {theme === "dark" ? (
            <Image
              src={"/404.png"}
              alt="not-found"
              fill
              className="object-contain object-center"
              sizes="100vw"
            />
          ) : (
            <Image
              src={"/light.png"}
              alt="not-found"
              fill
              className="object-contain object-center"
              sizes="100vw"
            />
          )}
        </div>
      </div>
      <Link href="/">
        <MyButton
          text="Return Home"
          ariaLabel="Click Me Button with Arrow Icon not found"
        />{" "}
      </Link>
    </div>
  );
}
