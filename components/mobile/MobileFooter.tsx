"use client";

import { useState } from "react";

export default function MobileFooter() {
  const cols = [
    {
      title: "Explore",
      links: ["The Origin", "The Craft", "The Women", "The Wine", "Chronicle"],
    },
    {
      title: "Experience",
      links: ["Visit TI:PO", "For Restaurants", "Shop", "Stockist Finder"],
    },
    { title: "Connect", links: ["Instagram", "YouTube", "Contact", "Press Kit"] },
  ];

  const [open, setOpen] = useState<string | null>(null);

  return (
    <footer
      id="contact"
      className="md:hidden py-12 px-7 relative"
      style={{
        background:
          "linear-gradient(135deg, #2e2e2e 0%, #242424 35%, #171717 70%, #0e0e0e 100%)",
        zIndex: 3,
      }}
    >
      <div className="flex flex-col gap-8">
        {/* Brand block */}
        <div className="flex flex-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/tipo-main-website/images/logo.webp"
            alt="TI:PO"
            className="h-[22px] w-auto object-contain mb-[10px] self-start"
          />
          <p className="tx-serif-light text-[13px] leading-[1.6] text-[#C8C8C8] m-0">Po:Ro Apong</p>
          <p className="tx-body text-[13px] leading-[1.6] text-[#C8C8C8] m-0">Handcrafted by Women</p>
          <p className="tx-body text-[13px] leading-[1.6] text-[#C8C8C8] m-0">Traditional Indian Rice Wine</p>
          <p className="tx-body text-[13px] leading-[1.6] text-[#C8C8C8] mt-4 mb-0">
            From the Brahmaputra Valley,<br />Assam, India
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-white/10">
          {cols.map((col) => (
            <div key={col.title}>
              <button
                onClick={() => setOpen(open === col.title ? null : col.title)}
                className="w-full flex items-center justify-between py-4 bg-transparent border-0 cursor-pointer"
              >
                <span className="tx-eyebrow font-bold text-[13px] tracking-[0.22em] uppercase text-brand-gold">
                  {col.title}
                </span>
                <span
                  className="text-brand-gold text-[18px] transition-transform duration-300"
                  style={{ transform: open === col.title ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === col.title ? 300 : 0, opacity: open === col.title ? 1 : 0 }}
              >
                <ul className="list-none p-0 mt-0 mb-4 flex flex-col">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="tx-body font-light text-[13px] leading-[2.2] text-[#C8C8C8] no-underline hover:text-white transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
