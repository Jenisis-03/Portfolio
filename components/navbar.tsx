"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Subham
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative inline-block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md opacity-75 blur-lg filter"
                  aria-hidden="true"
                ></span>
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 relative text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-md opacity-75 blur-lg filter"
                  aria-hidden="true"
                ></span>
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}