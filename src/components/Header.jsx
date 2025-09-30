"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 bg-white/90 backdrop-blur-md border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 transition-colors">
              <img
                src="https://heyboss.heeyo.ai/1753312924-43b2c701.png"
                alt="Traveler Content"
                className="h-8 w-8 lg:h-10 lg:w-10 transition-all duration-300 brightness-0 invert"
              />
              <span className="text-xl lg:text-2xl font-bold text-[rgb(71,85,105)] hover:text-[rgb(100,116,139)]">
                Travelers Content
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/become-creator"
              className="font-medium transition-all duration-300 text-[rgb(71,85,105)] hover:text-[rgb(100,116,139)]"
            >
              Become a Creator
            </a>
            <a
              href="#help"
              className="font-medium transition-all duration-300 text-[rgb(71,85,105)] hover:text-[rgb(100,116,139)]"
            >
              Help
            </a>
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 active:scale-95 disabled:opacity-50 px-6 py-3 text-base text-[rgb(71,85,105)] hover:text-[rgb(100,116,139)]"
            >
              Log In
            </Link>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center font-medium rounded-lg border-2 border-slate-600 text-slate-600 bg-white hover:bg-slate-600 hover:text-white px-6 py-3 text-base"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-black/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white/95 border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="#become-creator" className="block font-medium text-slate-800">Become a Creator</a>
            <a href="#help" className="block font-medium text-slate-800">Help</a>
            <Link href="/login" className="block pt-2">Log In</Link>
            <Link href="/signup" className="block font-semibold border-2 border-slate-600 text-center rounded-lg px-4 py-2 mt-2">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
}
