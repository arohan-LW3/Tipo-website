"use client";
import { useEffect, useRef } from "react";

export default function CursorEffects() {
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: -2000, y: -2000 });

  useEffect(() => {
    const MAGNIFY_SELECTOR = [
      "#desktop-site img",
      "nav a",
      "nav img",
    ].join(", ");
    const MAX_DIST = 300;
    const MAX_SCALE = 1.1;
    let targets: HTMLElement[] = [];

    const cacheTargets = () => {
      targets = Array.from(document.querySelectorAll<HTMLElement>(MAGNIFY_SELECTOR)).filter(
        (el) => el.classList.contains("force-magnify") || !el.closest(".no-magnify")
      );
      targets.forEach((el) => {
        el.style.transition = "transform 0.2s ease-out";
        el.style.willChange = "transform";
      });
    };
    setTimeout(cacheTargets, 600);

    const update = () => {
      const { x, y } = posRef.current;
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dist = Math.hypot(x - cx, y - cy);
        const t = Math.max(0, 1 - dist / MAX_DIST);
        const scale = 1 + (MAX_SCALE - 1) * t;
        el.style.transform = `scale(${scale})`;
      });
    };

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    const onLeave = () => {
      posRef.current = { x: -2000, y: -2000 };
      targets.forEach((el) => { el.style.transform = "scale(1)"; });
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return null;
}
