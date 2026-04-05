import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="bg-brand-silver py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20 flex flex-col items-center gap-8">
        {/* Label */}
        <span className="text-[10px] uppercase tracking-[0.25em] text-brand-darkgray/60 font-medium">
          Witness the Process
        </span>

        {/* Video placeholder */}
        <div className="w-full max-w-4xl">
          <Image
            src="https://placehold.co/960x540/b0afa8/888888?text=Animated+Video"
            alt="Animated video showcasing the Po:ro Apong process"
            width={960}
            height={540}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
