export default function Footer() {
  const exploreLinks = [
    { label: "The Origin", href: "#" },
    { label: "The Craft", href: "#the-craft" },
    { label: "The Women", href: "#heritage" },
    { label: "The Wine", href: "#" },
    { label: "Chronicle", href: "#" },
  ];

  const experienceLinks = [
    { label: "Visit TI:PO", href: "#" },
    { label: "For Restaurants", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Stockist Finder", href: "#" },
  ];

  const connectLinks = [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Press Kit", href: "#" },
  ];

  const columns: { title: string; links: { label: string; href: string }[] }[] = [
    { title: "Explore", links: exploreLinks },
    { title: "Experience", links: experienceLinks },
    { title: "Connect", links: connectLinks },
  ];

  const bodyLine = "tx-body text-[clamp(14px,0.97vw,20px)] leading-[1.6] text-[#C8C8C8]";

  return (
    <footer
      id="contact"
      className="py-10 px-6 md:py-[clamp(60px,4.2vw,100px)] md:px-[clamp(64px,5.5vw,120px)] no-magnify"
      style={{
        background:
          "linear-gradient(135deg, #2e2e2e 0%, #242424 35%, #171717 70%, #0e0e0e 100%)",
      }}
    >
      {/* 4 columns on desktop, 2-col grid on mobile (brand spans full width) */}
      <div className="max-w-[clamp(1152px,75vw,1800px)] mx-auto grid grid-cols-2 gap-x-6 gap-y-10 items-start w-full md:flex md:flex-wrap md:justify-between">
        {/* Column 1 — Brand */}
        <div className="flex flex-col col-span-2 md:col-span-1">
          <img
            src="/tipo-main-website/images/logo.webp"
            alt="TI:PO Po:Ro Apong logo"
            className="h-6 w-auto object-contain mb-3 self-start"
          />
          <p className="tx-serif-light text-[clamp(14px,0.97vw,20px)] leading-[1.6] text-[#C8C8C8]">
            Po:Ro Apong
          </p>
          <p className={bodyLine}>Handcrafted by Women</p>
          <p className={bodyLine}>Traditional Indian Rice Wine</p>
          <p className={`${bodyLine} mt-5`}>
            From the Brahmaputra Valley,
            <br />
            Assam, India
          </p>
        </div>

        {columns.map(({ title, links }) => (
          <div
            key={title}
            className={
              "flex flex-col" +
              (title === "Connect" ? " col-span-2 md:col-span-1" : "")
            }
          >
            <h4 className="tx-eyebrow uppercase text-[clamp(14px,0.97vw,20px)] mb-3 text-[#D4922A]">
              {title}
            </h4>
            <ul
              className={
                title === "Connect"
                  ? "flex flex-row md:flex-col gap-x-6 gap-y-2"
                  : "flex flex-col"
              }
            >
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="tx-body text-[clamp(14px,0.97vw,20px)] leading-[2] text-[#C8C8C8] hover:text-white transition-colors duration-300 border-b border-transparent md:hover:border-brand-gold pb-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
