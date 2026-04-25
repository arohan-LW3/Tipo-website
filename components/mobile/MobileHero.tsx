"use client";

import { useEffect, useRef } from "react";

export default function MobileHero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.style.display = "none";
        });
      }
      const onVisibilityChange = () => {
        if (document.hidden) video.pause();
        else video.play().catch(() => {});
      };
      document.addEventListener("visibilitychange", onVisibilityChange);
      return () => document.removeEventListener("visibilitychange", onVisibilityChange);
    }
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight || 852;
      const p = Math.max(0, Math.min(1, y / vh));
      if (videoRef.current) {
        videoRef.current.style.opacity = `${1 - p * 0.85}`;
        videoRef.current.style.transform = `scale(${1 - p * 0.04})`;
      }
      if (ctaRef.current) {
        ctaRef.current.style.opacity = `${Math.max(0, 1 - p * 1.4)}`;
        ctaRef.current.style.transform = `translateX(-50%) translateY(${p * 30}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="md:hidden sticky top-[30px] z-[1] w-full h-[80svh] bg-black flex flex-col items-center justify-center"
    >
      <div ref={wrapRef} className="relative z-10 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/tipo-main-website/videos/reveal-video_poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ willChange: "transform, opacity" }}
        >
          <source src="/tipo-main-website/videos/reveal-video_bg_mobile.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark overlay for CTA legibility */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        {/* Bottom fade — blends hero into sections slipping over it */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </div>

      <a
        ref={ctaRef}
        href="#the-craft"
        className="animate-glow absolute left-1/2 bottom-[-80px] z-20 inline-flex items-center justify-center gap-3 no-underline"
        style={{
          transform: "translateX(-50%)",
          minHeight: 50,
          minWidth: 169,
          padding: "13px 25px",
          fontFamily: '"Mainlux", sans-serif',
          fontWeight: 300,
          fontSize: "10pt",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--color-brand-gold)",
          background: "rgba(0,0,0,0.78)",
          border: "1px solid var(--color-brand-gold)",
          borderRadius: 999,
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          boxShadow:
            "0 8px 30px rgba(212,146,42,0.25), inset 0 0 0 1px rgba(212,146,42,0.15)",
          willChange: "transform, opacity",
        }}
      >
        <span>Discover</span>
        <span aria-hidden="true" style={{ letterSpacing: 0 }}>
          »
        </span>
      </a>
    </section>
  );
}
