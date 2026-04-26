import Image from "next/image";

export default function HeritageSection() {
  return (
    <section id="heritage" className="bg-brand-black py-20 md:py-[clamp(112px,7.8vw,200px)] mt-8 md:mt-[60px] scroll-mt-20">
      <div className="max-w-[clamp(1152px,75vw,1800px)] mx-auto px-10 md:px-[clamp(64px,5.5vw,120px)]">
        {/* Two-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-[clamp(40px,3vw,80px)] gap-y-12 items-start">
          {/* Left — Text */}
          <div data-parallax-text className="flex flex-col gap-4 md:gap-2 w-full md:max-w-[clamp(480px,33.3vw,680px)] md:py-20 translate-y-0 md:-translate-y-[20px] order-2 md:order-1">
            <h2 className="text-[20px] md:text-[clamp(24px,1.67vw,38px)] leading-snug text-[#D4922A]">
              <span className="tx-eyebrow block">It takes a village,</span>
              <span className="tx-tracked-light block">they say!</span>
            </h2>
            <div className="tx-body flex flex-col gap-4 md:gap-2">
              <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.4] md:leading-[1.5] text-brand-text">
                Po:ro Apong is made by women, and it has always been so.
                Knowledge is passed through apprenticeship, not instruction.
                Girls grow up assisting long before they are trusted to decide.
                Years are spent observing, repeating, correcting, and waiting.
              </p>
              <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.4] md:leading-[1.5] text-brand-text">
                Authority is not granted; it is recognized.
              </p>
              <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.4] md:leading-[1.5] text-brand-text">
                The role of the brewmaster is earned through time, judgment,
                and restraint. What exists is a lineage &mdash; a continuous
                chain of women who carry the responsibility of brewing the
                Po:ro Apong, season after season.
              </p>
              <p className="text-[clamp(16px,1.11vw,22px)] leading-[1.4] md:leading-[1.5] text-brand-text">
                This structure has preserved the craft not by freezing it in
                time, but by keeping it human.
              </p>
            </div>
          </div>

          {/* Right — Image */}
          <div className="order-1 md:order-2">
            <Image
              src="/tipo-main-website/images/it-takes-a-village.webp"
              alt="Women brewmasters of the village in traditional attire"
              width={560}
              height={480}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
