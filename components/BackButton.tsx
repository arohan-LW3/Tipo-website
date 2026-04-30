"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="flex items-center gap-2 tx-serif-light text-[11px] uppercase tracking-[0.14em] text-[#D4922A] transition-all duration-300 hover:opacity-70 bg-transparent border-0 cursor-pointer p-0"
    >
      <span style={{ fontSize: 16, letterSpacing: 0 }}>←</span>
      <span>Back</span>
    </button>
  );
}
