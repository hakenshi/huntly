"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-[95%] px-6 py-4 bg-black/30 backdrop-blur-md mt-3 rounded-full text-white fixed left-1/2 transform -translate-x-1/2 top-0 z-50 border border-zinc-900/80">
      <nav className="flex justify-between items-center w-full">
        <div className="text-2xl font-bold text-white">Huntly</div>
        <div className="md:flex hidden space-x-8">
          <a href="#features" className="hover:text-gray-300 text-white transition-colors font-medium">Recursos</a>
          <a href="#pricing" className="hover:text-gray-300 text-white transition-colors font-medium">Preços</a>
          <a href="#faq" className="hover:text-gray-300 text-white transition-colors font-medium">FAQ</a>
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
