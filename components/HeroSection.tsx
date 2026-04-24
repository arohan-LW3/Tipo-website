"use client";
import Image from "next/image";
import {  useEffect } from "react";

export default function HeroSection() {

  useEffect(() => {
    const video = document.getElementById("bgVideo") as HTMLVideoElement;
    if (video) {
      // Try to play
          const playPromise = video.play();
          
          if (playPromise !== undefined) {
              playPromise.catch(error => {
                  // Autoplay was prevented
                  console.log('Autoplay prevented:', error);
                  
                  // Show poster image instead
                  video.style.display = 'none';
              });
          }

          // Optional: Pause video when tab is not visible (saves battery/bandwidth)
          document.addEventListener('visibilitychange', function() {
              if (document.hidden) {
                  video.pause();
              } else {
                  video.play();
              }
          });
    }

     
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      {/* Hero area — pure black to match bottle */}
      <div className="relative w-full flex flex-col items-center justify-center bg-black">
        {/* Bottle centered + Discover positioned beside it */}
        <div className="relative z-10 flex flex-col items-center w-full">
            <div className="video-background relative w-full h-[100svh] overflow-hidden" >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/Tipo-website/videos/reveal-video_poster.jpg"
                    id="bgVideo"
                    className="absolute inset-0 w-full h-full object-cover" >
                    {/* Mobile-optimized source (served to narrow viewports) */}
                    <source
                      src="/Tipo-website/videos/reveal-video_bg_mobile.mp4"
                      type="video/mp4"
                      media="(max-width: 767px)"
                    />
                    {/* WebM for better compression (Chrome, Firefox) */}
                    <source src="/Tipo-website/videos/reveal-video_bg_high.webm" type="video/webm" />
                    {/* MP4 fallback (Safari, older browsers) */}
                    <source src="/Tipo-website/videos/reveal-video_bg_high.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay for text readability */}
                <div className="video-overlay absolute inset-0 bg-black/20 pointer-events-none"></div>
          </div>
          <a
            href="#the-craft"
            className="tx-serif-light text-[10pt] absolute top-1/2 uppercase tracking-[0.25em] text-brand-gold whitespace-nowrap hover:text-brand-goldlight transition-colors duration-300 cursor-pointer animate-glow left-1/2 -translate-x-1/2 -translate-y-[calc(50%_+_60px)] md:left-[80px] md:translate-x-0 md:-translate-y-[calc(50%-180px)]"
          >
            Discover &gt;&gt;
          </a>
        </div>
      </div>

      {/* Himalaya background with built-in shape divider cutout */}
      <div id="the-craft" className="w-full relative z-20" style={{ minHeight: "61vw" }}>
        {/* Himalaya new image — black cutout at top blends seamlessly with hero.
            Height capped at 90% of the wrapper so the image is vertically
            cropped from the bottom (top anchor preserved for bottle blend). */}
        <div className="absolute top-0 inset-x-0 h-[90%]">
          <Image
            src="/Tipo-website/images/himalaya-new.webp"
            alt="Eastern Himalayas with shape divider cutout"
            fill
            className="object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 22%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.65) 100%)",
            }}
          />
        </div>

        {/* Text content — positioned over the himalaya image.
            pl values match Discover's left offsets so text shares the
            same vertical axis (x=180 mobile, x=80 desktop). */}
        <div className="relative z-10 pt-10 md:pt-[240px] pb-10 md:pb-52">
          <div className="pl-6 md:pl-[340px] pr-6 md:pr-10 max-w-full md:max-w-[740px] text-left">
            {/* THE CRAFT label */}
            <span className="tx-serif-light block text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-6">
              The Craft
            </span>

            {/* Subtitle — descriptive line */}
            <p className="tx-serif-light text-brand-gold text-[22px] md:text-[24px] leading-[1.15] mb-0">
              Born at the Foothills of the
            </p>

            {/* Main heading — emphasized phrase */}
            <h1 className="tx-heading text-brand-gold text-[22px] md:text-[24px] uppercase leading-[1.15] mb-6">
              Eastern Himalayas
            </h1>

            {/* Intro paragraphs */}
            <div className="tx-body flex flex-col gap-4 max-w-[420px]">
              <p className="text-[13px] leading-[1.55] text-brand-text">
                Po:ro Apong is born where the Eastern Himalayan foothills spill into
                Assam&apos;s Brahmaputra Valley.
              </p>
              <p className="text-[13px] leading-[1.55] text-brand-text">
                From this landscape emerges a living library of
                flavour&mdash;60+ forest botanicals, each shaped by soil,
                climate and time. Herbs are gathered from the mountains; rice rises
                from the river&apos;s alluvial fields.
              </p>
              <p className="text-[13px] leading-[1.55] text-brand-text">
                Every year the valley resets
                itself&mdash;flood, monsoon, heat and generous
                humidity&mdash;creating one of India&apos;s richest biodiversities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
