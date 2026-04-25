import Image from "next/image";

export default function CommunitySection() {
  return (
    <section className="bg-brand-black py-20 md:py-28 mt-0 md:-mt-[120px]">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start">
        {/* Left — Image (shown after text on mobile) */}
        <div className="order-1 md:order-1">
          <Image
            src="/tipo-main-website/images/value-lives.webp"
            alt="Women of the Self Help Groups in traditional dresses"
            width={580}
            height={500}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Right — Text (shown first on mobile) */}
        <div data-parallax-text className="flex flex-col gap-4 order-2 md:order-2 w-full md:max-w-[480px] md:py-20">
          <h2 className="text-xl md:text-2xl leading-snug text-[#D4922A]">
            <span className="tx-eyebrow block">Value lives</span>
            <span className="tx-tracked-light block">in the system</span>
          </h2>
          <div className="tx-body flex flex-col gap-4">
            <p className="text-[16px] leading-[1.8] text-brand-text">
              To keep it intact, we spent two years selecting and partnering
              with two Self Help Groups: Polo SHG (Leimekuri) and Aaradha SHG
              (Memberchuk), who are now part of the supply chain.
            </p>
            <p className="text-[16px] leading-[1.8] text-brand-text">
              The tradition stays with its rightful owners: the women
              brewmasters remain in control; we didn&apos;t outsource heritage,
              we safeguarded it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
