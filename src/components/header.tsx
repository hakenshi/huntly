"use client";

import { Button, buttonVariants } from "@/src/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import HuntlyLogo from "./huntly-logo";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && 
          menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <motion.header 
        className="w-[95%] px-4 sm:px-6 py-4 mt-3 rounded-full text-white fixed left-1/2 transform -translate-x-1/2 top-0 z-50 mb-20"
        animate={{
          backgroundColor: isMenuOpen ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.3)",
          backdropFilter: isMenuOpen ? "blur(0px)" : "blur(12px)",
          borderColor: isMenuOpen ? "rgba(0,0,0,0)" : "rgba(39,39,42,0.8)"
        }}
        transition={{ duration: 0.3 }}
        style={{ borderWidth: 1 }}
      >
        <nav className="flex justify-between items-center w-full">
          {/* Logo */}
          <HuntlyLogo href="#hero" />

          {/* Desktop Nav */}
          <div className="md:flex hidden space-x-8">
            <Link href="#features" className="transition-all font-medium hover:scale-105 hover:text-red-500">Recursos</Link>
            <Link href="#pricing" className="transition-all font-medium hover:scale-105 hover:text-red-500">Preços</Link>
            <Link href="#faq" className="transition-all font-medium hover:scale-105 hover:text-red-500">FAQ</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link className="hover:scale-105 hover:text-white/80 transition-transform" href={"/login"}>Login</Link>
            <Link href={"/register"} className={`${buttonVariants({ variant: "gradient" })} hover:scale-105 transition-transform rounded-full`}>Começar Grátis</Link>
          </div>

          {/* Mobile Button */}
          <div ref={buttonRef} className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} size={"icon"} variant="ghost">
              {isMenuOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu (fora do header) */}
      <motion.div
        ref={menuRef}
        className="md:hidden fixed left-1/2 transform -translate-x-1/2 mt-2 w-[95%] rounded-xl bg-black/30 backdrop-blur-md border border-zinc-900/80 z-40"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20,
          scale: isMenuOpen ? 1 : 0.95
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col items-center gap-4 p-4 mt-20">
          <Link href="#features" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 transition-all hover:text-red-500">Recursos</Link>
          <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 transition-all hover:text-red-500">Preços</Link>
          <Link href="#faq" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-2 transition-all hover:text-red-500">FAQ</Link>

          <div className="flex flex-col items-center gap-3 w-full mt-2">
            <Link href={"/login"} onClick={() => setIsMenuOpen(false)} className="hover:text-white/80 transition-colors">Login</Link>
            <Link href={"/register"} onClick={() => setIsMenuOpen(false)} className={`${buttonVariants({ variant: "gradient" })} w-3/4 rounded-full`}>Começar Grátis</Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
