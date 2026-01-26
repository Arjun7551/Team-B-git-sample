"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#ffedd5] to-[#fed7aa] border-b border-orange-300">
      <div className="w-full px-10 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif text-orange-900">
          Vedic Encyclopedia
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="text-orange-900 font-medium"
        >
          Menu ☰
        </button>
      </div>

      {open && (
        <nav className="w-full bg-white border-t border-orange-200">
          <div className="px-10 py-4 flex gap-10 text-orange-800">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            
            <Link href="/#category" onClick={() => setOpen(false)}>
              Categories
            </Link>

            <Link href="/#about" onClick={() => setOpen(false)}>
              About
            </Link>


            <Link href="/login" onClick={() => setOpen(false)}>
              Admin Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
