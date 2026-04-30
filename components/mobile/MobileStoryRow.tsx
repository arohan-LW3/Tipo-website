import Image from "next/image";

interface MobileStoryRowProps {
  eyebrow?: string;
  glowEyebrow?: boolean;
  eyebrowAboveImage?: boolean;
  bold: string;
  light?: string;
  boldFirst?: boolean;
  body: string[];
  image: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  pullQuote?: string[];
  id?: string;
  offsetTop?: number;
  imageScale?: number;
  imageOffsetY?: number;
  imageContainerStyle?: React.CSSProperties;
  imageGap?: number;
}

export default function MobileStoryRow({
  eyebrow,
  glowEyebrow,
  eyebrowAboveImage,
  bold,
  light,
  boldFirst = true,
  body,
  image,
  imageAlt,
  imageWidth = 800,
  imageHeight = 600,
  pullQuote,
  id,
  offsetTop,
  imageScale,
  imageOffsetY,
  imageContainerStyle,
  imageGap,
}: MobileStoryRowProps) {
  const BoldSpan = (
    <span className="block font-bold uppercase text-[20px] leading-[1.2] tracking-[0.18em]">
      {bold}
    </span>
  );
  const LightSpan = light ? (
    <span className="block font-light text-[20px] leading-[1.2] tracking-[0.08em]">
      {light}
    </span>
  ) : null;

  return (
    <div
      id={id}
      className="py-14 px-6 flex flex-col"
      style={{ gap: imageGap ?? 30, ...(offsetTop !== undefined ? { marginTop: offsetTop } : {}) }}
    >
      {eyebrow && eyebrowAboveImage && (
        <span className={`tx-eyebrow block text-[12px] tracking-[0.25em] text-brand-gold uppercase${glowEyebrow ? " animate-glow-drl" : ""}`}>
          {eyebrow}
        </span>
      )}
      <div className="w-full rounded-2xl overflow-hidden" style={{ borderRadius: 16, transform: `${imageScale ? `scale(${imageScale})` : ""}${imageOffsetY ? ` translateY(${imageOffsetY}px)` : ""}`.trim() || undefined, transformOrigin: "center center", ...imageContainerStyle }}>
        <Image
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={`w-full object-cover block ${imageContainerStyle?.height ? "h-full" : "h-auto"}`}
          style={{ borderRadius: 16 }}
        />
      </div>
      <div className="flex flex-col gap-3">
        {eyebrow && !eyebrowAboveImage && (
          <span className={`tx-eyebrow block text-[12px] tracking-[0.25em] text-brand-gold uppercase${glowEyebrow ? " animate-glow-drl" : ""}`}>
            {eyebrow}
          </span>
        )}
        <h2 className="tx-serif-light text-brand-gold m-0">
          {boldFirst ? (
            <>
              {BoldSpan}
              {LightSpan}
            </>
          ) : (
            <>
              {LightSpan}
              {BoldSpan}
            </>
          )}
        </h2>
        <div className="tx-body flex flex-col gap-3 mt-1">
          {body.map((p, i) => (
            <p
              key={i}
              className="text-[14px] leading-[1.8] text-brand-text m-0"
            >
              {p}
            </p>
          ))}
        </div>
        {pullQuote && (
          <div className="tx-serif-bold mt-2 text-brand-text">
            {pullQuote.map((l, i) => (
              <p key={i} className="text-[15px] leading-[1.4] m-0">
                {l}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
