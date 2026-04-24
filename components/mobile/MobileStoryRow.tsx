import Image from "next/image";

interface MobileStoryRowProps {
  eyebrow?: string;
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
}

export default function MobileStoryRow({
  eyebrow,
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
      className="py-14 px-6 flex flex-col gap-6"
      style={offsetTop !== undefined ? { marginTop: offsetTop } : undefined}
    >
      <div className="w-full rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-auto object-cover block"
        />
      </div>
      <div className="flex flex-col gap-3">
        {eyebrow && (
          <span className="tx-eyebrow block text-[12px] tracking-[0.25em] text-brand-gold uppercase">
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
