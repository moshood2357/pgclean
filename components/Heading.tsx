"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#4CD1FE]">
          <Link href="/">PG Clean Ltd.</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-1 py-2 transition-colors ${
                  isActive
                    ? "text-[#4CD1FE] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-[#4CD1FE]"
                    : "text-gray-700 hover:text-[#41bae2]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Call Button */}
        <a
          href="tel:+47926961792"
          className="hidden md:inline-flex items-center gap-2 bg-[#4CD1FE] text-white px-4 py-2 rounded-2xl hover:bg-[#41bae2] transition"
        >
          <Phone size={18} />
          Call Now
        </a>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg w-full absolute top-full left-0">
          <div className="flex flex-col gap-4 p-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-800 text-lg font-medium ${
                    isActive ? "text-[#4CD1FE]" : "hover:text-[#41bae2]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Call Button */}
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 bg-[#4CD1FE] text-white px-4 py-2 rounded-2xl hover:bg-[#41bae2] mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
