"use client";

import { Button } from "@/src/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HuntlyLogo from "./huntly-logo";

export function Header() {
  return (
    <header className="w-[95%] px-6 py-4 bg-black/30 backdrop-blur-md mt-3 rounded-full text-white fixed left-1/2 transform -translate-x-1/2 top-0 z-50 border border-zinc-900/80">
      <nav className="flex justify-between items-center w-full">
        <HuntlyLogo href="#hero" />
        <div className="md:flex hidden space-x-8">
          <Link href="#features" className="text-white transition-all font-medium hover:scale-105">Recursos</Link>
          <Link href="#pricing" className="text-white transition-all font-medium hover:scale-105">Preços</Link>
          <Link href="#faq" className="text-white transition-all font-medium hover:scale-105">FAQ</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link className="hover:scale-105 hover:text-white/80 transition-transform" href={"/login"}>Login</Link>
          <Button variant={"gradient"} className="hover:scale-105 transition-transform rounded-full">Começar Grátis</Button>
        </div>

        {/* <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <a href="#features" className="text-lg">Recursos</a>
              <a href="#pricing" className="text-lg">Preços</a>
              <a href="#faq" className="text-lg">FAQ</a>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full">Login</Button>
                <Button variant={"gradient"} className="w-full">Começar Grátis</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet> */}
      </nav>
    </header>
  );
}
