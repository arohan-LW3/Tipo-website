"use client";

import { useState } from "react";
import Image from "next/image";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "The Craft", href: "#the-craft" },
    { label: "The Women", href: "#heritage" },
    { label: "The Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: open
          ? "linear-gradient(to bottom, rgba(0,0,0,0.92), rgba(0,0,0,0.75))"
          : "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)",
        backdropFilter: open ? "blur(12px)" : "none",
        WebkitBackdropFilter: open ? "blur(12px)" : "none",
        transition: "background 0.35s ease, backdrop-filter 0.35s ease",
      }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <a href="#top" className="block">
          <Image
            src="/tipo-main-website/images/logo.webp"
            alt="TI:PO Po:Ro Apong logo"
            width={80}
            height={30}
            className="h-[26px] w-auto object-contain"
          />
        </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex flex-col items-center justify-center gap-[5px] w-8 h-8 bg-transparent border-0 p-0 cursor-pointer"
        >
          <span
            className="block w-5 h-[1.5px] bg-brand-gold transition-all duration-300"
            style={{ transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }}
          />
          <span
            className="block w-5 h-[1.5px] bg-brand-gold transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-[1.5px] bg-brand-gold transition-all duration-300"
            style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }}
          />
        </button>
      </div>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? 240 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <ul className="list-none m-0 py-6 flex flex-col items-center gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="tx-serif-light text-[12px] uppercase tracking-[0.14em] text-[#D4922A] no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
