"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logoLeft from "../../assets/MUN_LOGO.png";
import logoRight from "../../assets/MUN_LOGO.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-navbar-border bg-black backdrop-blur supports-[backdrop-filter]:bg-navbar">
      <div className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logoLeft}
              alt="Left Logo"
              className="h-10 w-auto object-contain"
              width={100}
              height={100}
            />
          </div>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className=" hover:text-black transition-colors duration-200 font-medium"
                style={{ color: "var(--primary)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logoRight}
              alt="Right Logo"
              className="hidden md:block h-10 w-auto object-contain"
              width={100}
              height={100}
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-navbar-link hover:text-navbar-link-hover transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" style={{ color: "var(--primary)" }} />
              ) : (
                <Menu className="h-6 w-6" style={{ color: "var(--primary)" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-navbar-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-navbar-link hover:text-navbar-link-hover transition-colors duration-200 font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ color: "var(--primary)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
