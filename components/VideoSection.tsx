export default function VideoSection() {
  return (
    <section className="py-20 md:py-[96px] mt-0 md:mt-[40px]" style={{ backgroundColor: "#1F2122" }}>
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-14 flex flex-col items-center gap-8">
        {/* Label */}
        <div className="w-full max-w-[1138px]" style={{ marginTop: "-20px" }}>
          <span className="tx-serif-bold text-[14px] uppercase tracking-[0.25em] text-[#D4922A]">
            Witness the Process
          </span>
        </div>

        {/* YouTube Video */}
        <div className="w-full max-w-[1139px]">
          <div className="relative w-full overflow-hidden rounded-[15px]" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/QipHkYuCm74"
              title="Po:ro Apong — The Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
