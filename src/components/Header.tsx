"use client";

import Link from "next/link";
import { useState } from "react";

function CrestLogo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-header-accent"
      aria-hidden
    >
      <path
        d="M20 4l2.5 6.5L29 13l-6.5 2.5L20 22l-2.5-6.5L11 13l6.5-2.5L20 4z"
        fill="currentColor"
      />
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M20 10v20M10 20h20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50 px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-header-accent transition-opacity hover:opacity-80" aria-label="Italiano Ristorante home">
            <CrestLogo />
          </Link>

          <Link
            href="/"
            className="font-gilda text-3xl tracking-wide text-header-accent text-white font-bold sm:text-3xl"
          >
            LENCA
          </Link>

          <div className="flex items-center gap-5">
            <Link
              href="/cart"
              className="text-header-accent transition-opacity hover:opacity-80"
              aria-label="Cart"
            >
              <CartIcon />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="text-header-accent transition-opacity hover:opacity-80 lg:hidden"
              aria-expanded={open}
              aria-label="Menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <nav
            className="fixed right-0 top-0 z-50 flex h-full w-64 flex-col gap-4 bg-black/90 px-6 pt-24 lg:hidden"
            aria-label="Mobile menu"
          >
            <Link href="/" className="font-gilda text-lg text-white hover:text-header-accent" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/menu" className="font-gilda text-lg text-white hover:text-header-accent" onClick={() => setOpen(false)}>Menu</Link>
            <Link href="/about" className="font-gilda text-lg text-white hover:text-header-accent" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="font-gilda text-lg text-white hover:text-header-accent" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </>
      )}
    </>
  );
}
