import Image from "next/image";

export default function Navbar() {
  const links = [
    { label: "The Craft", href: "#the-craft" },
    { label: "The Women", href: "#heritage" },
    { label: "The Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 md:px-16 lg:px-20 py-5 bg-black/40 backdrop-blur-md border-b border-white/5">
      {/* Logo */}
      <a href="#" className="block">
        <Image
          src="/Tipo-website/images/logo.webp"
          alt="TI:PO Po:Ro Apong logo"
          width={80}
          height={40}
          className="h-8 w-auto object-contain"
        />
      </a>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[11px] uppercase tracking-[0.14em] text-brand-offwhite/60 hover:text-brand-offwhite transition-all duration-300 border-b border-transparent hover:border-brand-gold pb-0.5"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
