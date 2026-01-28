"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

const MENU_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const requestClose = (href?: string) => {
    if (href) setPendingHref(href);
    setIsClosing(true);
  };

  const handleMenuEnd = () => {
    if (!isClosing) return;
    setOpen(false);
    setIsClosing(false);
    if (pendingHref) {
      router.push(pendingHref);
      setPendingHref(null);
    }
  };

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
              onClick={() => (open ? requestClose() : setOpen(true))}
              className="text-header-accent transition-opacity hover:opacity-80"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <nav
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-14 bg-header-bg ${isClosing ? "animate-menu-out" : "animate-menu-in"}`}
          aria-label="Mobile menu"
          onAnimationEnd={handleMenuEnd}
        >
          {MENU_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href + label}
                href={href}
                className={`font-barlow text-5xl font-extralight uppercase tracking-widest transition-colors hover:text-header-accent ${isActive ? "text-header-accent" : "text-white"}`}
                onClick={(e) => {
                  e.preventDefault();
                  requestClose(href);
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}
