"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/lib/profileData";

const SOCIAL_ICONS = [
  {
    label: "GitHub",
    href: personal.socials.github,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: personal.socials.linkedin,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
      </svg>
    ),
  },
];

function AnimatedLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={className} style={{ display: "block", overflow: "hidden" }}>
      <motion.span
        style={{ display: "block" }}
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-inner">

        {/* Top info bar */}
        <div className="hero-top-bar">
          <div className="hero-location mono">
            <i className="red-dot" />
            <span>{personal.location.toUpperCase()} · OPEN TO THE WORLD</span>
          </div>
          <div className="hero-role mono">
            FULL-STACK DEVELOPER &amp; AI SPECIALIST
          </div>
        </div>

        {/* Headline */}
        <div className="hero-headline-area">
          <div className="hero-headline">
            <h1>
              <AnimatedLine delay={0.1}>HI, I&apos;M</AnimatedLine>
              <AnimatedLine delay={0.25}>PRATIK</AnimatedLine>
              <AnimatedLine delay={0.4}>
                <span className="italic-word">full-stack dev.</span>
                <motion.span
                  className="hero-inline-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.85 }}
                >
                  <i className="red-dot" /> AVAILABLE
                </motion.span>
              </AnimatedLine>
            </h1>

            {/* Role subtitle */}
            <motion.p
              className="hero-subtitle mono"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              FULL-STACK DEVELOPER&nbsp;&nbsp;/&nbsp;&nbsp;AI TOOLS &amp; AUTOMATION&nbsp;&nbsp;/&nbsp;&nbsp;DATA ANALYST
            </motion.p>
          </div>

          {/* Bottom strip */}
          <motion.div
            className="hero-bottom-strip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <p className="hero-intro-text">
              I build high-performance <strong>full-stack web applications</strong>, desktop software &amp;{" "}
              <strong>AI-assisted systems</strong> that solve real-world problems.
            </p>

            <div className="hero-cta-group">
              <a href="#work" className="cta-button-primary" data-cursor="EXPLORE">
                <span>VIEW MY WORK</span>
                <span className="cta-arrow-circle">↗</span>
              </a>
              <a href="#contact" className="cta-button-secondary" data-cursor="CONTACT">
                GET IN TOUCH
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="cta-button-ghost mono"
                data-cursor="RESUME"
              >
                RESUME ↗
              </a>
            </div>

            <div className="hero-social-strip">
              {SOCIAL_ICONS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="hero-social-link"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={s.label}
                  data-cursor={s.label.toUpperCase()}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
