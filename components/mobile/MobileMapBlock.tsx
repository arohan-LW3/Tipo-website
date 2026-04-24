import Image from "next/image";

export default function MobileMapBlock() {
  return (
    <section className="bg-black py-14 px-6 relative">
      <div className="text-center flex flex-col gap-[14px] mb-8">
        <h2 className="tx-serif-light text-brand-gold leading-[1.2] m-0">
          <span className="block font-bold uppercase text-[20px] tracking-[0.18em]">
            Welcome
          </span>
          <span className="block font-light text-[20px] tracking-[0.08em]">
            TiPo&apos;s Po:Ro Apong
          </span>
          <span className="block font-light text-[20px] tracking-[0.08em]">
            to your world
          </span>
        </h2>
        <div className="flex flex-col gap-1 mt-2">
          <p className="tx-body text-[13px] leading-[1.7] text-brand-text m-0">
            Every culture has a fermentation that is unique to them.
          </p>
          <p className="tx-body text-[13px] leading-[1.7] text-brand-text m-0">
            Japan has Sak&eacute;, Korea has Soju, Europe has Wine.
          </p>
          <p className="tx-serif-bold text-[15px] leading-[1.4] text-[#C8C8C8] mt-2 mb-0">
            India has Po:Ro Apong.
          </p>
        </div>
      </div>

      <Image
        src="/Tipo-website/images/map.webp"
        alt="Brahmaputra Valley origin"
        width={1200}
        height={600}
        className="w-full h-auto object-contain block"
      />

      <div
        className="flex justify-end mt-6"
        style={{
          marginRight: -20,
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 70% at 65% 55%, black 35%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 60% 70% at 65% 55%, black 35%, transparent 100%)",
        }}
      >
        <Image
          src="/Tipo-website/images/bottle.jpeg"
          alt="TI:PO bottle"
          width={375}
          height={900}
          className="object-contain"
          style={{ width: 220, height: "auto" }}
        />
      </div>

      <Image
        src="/Tipo-website/images/motif-latest.webp"
        alt=""
        aria-hidden
        width={600}
        height={60}
        className="block mx-auto mt-10 h-[18px] w-auto"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 50%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 50%, transparent 100%)",
        }}
      />

      <div className="text-center mt-8">
        <h3 className="tx-eyebrow font-bold text-[16px] tracking-[0.18em] uppercase text-brand-gold m-0">
          Contact &amp; Distribution
        </h3>
        <p className="tx-body-medium text-[12px] leading-[1.7] text-[#C8C8C8] mt-[10px]">
          +91 88220 92973
          <br />
          info@heritagetipo.com
        </p>
      </div>
    </section>
  );
}
