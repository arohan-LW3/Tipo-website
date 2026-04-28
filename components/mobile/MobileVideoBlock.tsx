export default function MobileVideoBlock() {
  return (
    <section className="py-8 px-6" style={{ background: "#1F2122" }}>
      <div className="flex flex-col gap-5">
        <span className="tx-eyebrow block text-[12px] tracking-[0.25em] text-brand-gold uppercase">
          Witness the Process
        </span>
        <div
          className="relative w-full overflow-hidden rounded-xl bg-black"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            src="https://www.youtube.com/embed/QipHkYuCm74"
            title="Po:ro Apong — The Process"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
