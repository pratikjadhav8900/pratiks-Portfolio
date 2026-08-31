"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 200, damping: 28, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 200, damping: 28, mass: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closest = target.closest("[data-cursor]") as HTMLElement | null;
      if (closest) {
        setLabel(closest.dataset.cursor || "");
        setIsHovered(true);
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closest = target.closest("[data-cursor]") as HTMLElement | null;
      if (closest) {
        setLabel("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [rawX, rawY]);

  return (
    <motion.div
      ref={cursorRef}
      className={`custom-cursor ${isHovered ? "is-hovered" : ""}`}
      style={{ x, y }}
      aria-hidden="true"
    >
      {label && <span className="cursor-label">{label}</span>}
    </motion.div>
  );
}
