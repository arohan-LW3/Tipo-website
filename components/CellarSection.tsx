import Image from "next/image";

export default function CellarSection() {
  return (
    <section className="bg-brand-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20">
        {/* Two-column 50/50: matches StoryIntro so the image renders identically sized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start">
          {/* Left — image (2400x1800 / 4:3 frame) */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden scale-[1]">
            <Image
              src="/tipo-main-website/images/winery.webp"
              alt="Traditional winery with worker overseeing the process"
              fill
              className="object-cover"
            />
          </div>

          {/* Right — text */}
          <div className="flex flex-col gap-4 w-full md:max-w-[480px] pb-10 md:pt-10 md:-mt-10">
            <h2 className="text-xl md:text-2xl leading-snug text-[#D4922A]">
              <span className="tx-eyebrow block">Technology is the valet,</span>
              <span className="tx-tracked-light block">not the star.</span>
            </h2>
            <p className="tx-serif-light text-[16px] leading-[1.4] text-[#D4922A]">
              Tipo did not reinterpret
              <br />
              Po:ro Apong.
            </p>
            <div className="tx-body flex flex-col gap-4">
              <p className="text-[16px] leading-[1.4] md:leading-[1.8] text-brand-text">
                Our role is deliberately modest: introduce hygiene, scientific
                filtration, and clean bottling in modern winery setting so the
                Po:ro Apong can travel without altering its character.
              </p>
              <p className="text-[16px] leading-[1.4] md:leading-[1.8] text-brand-text">
                This quiet preservation is overseen by Ajoy Shaw, DipWSET, our
                Chief Winemaker, ensuring what reaches you is what was made at
                the source: the Brahmaputra Valley, kept pristine in glass.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
