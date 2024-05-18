"use client";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/utils/data";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
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
          </SheetTitle>
        </SheetHeader>
        <div>
          <div className="flex flex-col gap-5 mt-10">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <span className="text-xl">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
