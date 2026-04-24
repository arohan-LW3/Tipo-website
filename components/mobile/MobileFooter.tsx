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

  return (
    <footer
      id="contact"
      className="md:hidden py-12 px-7"
      style={{
        background:
          "linear-gradient(135deg, #2e2e2e 0%, #242424 35%, #171717 70%, #0e0e0e 100%)",
      }}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Tipo-website/images/logo.webp"
            alt="TI:PO"
            className="h-[22px] w-auto object-contain mb-[10px] self-start"
          />
          <p className="tx-serif-light text-[13px] leading-[1.6] text-[#C8C8C8] m-0">
            Po:Ro Apong
          </p>
          <p className="tx-body text-[13px] leading-[1.6] text-[#C8C8C8] m-0">
            Handcrafted by Women
          </p>
          <p className="tx-body text-[13px] leading-[1.6] text-[#C8C8C8] m-0">
            Traditional Indian Rice Wine
          </p>
          <p className="tx-body text-[13px] leading-[1.6] text-[#C8C8C8] mt-4 mb-0">
            From the Brahmaputra Valley,
            <br />
            Assam, India
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {cols.map((c) => (
            <div key={c.title} className="flex flex-col">
              <h4 className="tx-eyebrow font-bold text-[13px] tracking-[0.22em] uppercase text-brand-gold mb-[10px]">
                {c.title}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="tx-body font-light text-[13px] leading-[2] text-[#C8C8C8] no-underline hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
