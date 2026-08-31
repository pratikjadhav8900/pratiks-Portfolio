"use client";

import { motion } from "framer-motion";
import { personal, currently } from "@/lib/profileData";

function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`bento-card ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="section-label">
        <div className="section-label-left">
          <span className="section-number mono" style={{ color: "rgba(0,0,0,0.4)" }}>04</span>
          <span className="section-title mono" style={{ color: "rgba(0,0,0,0.5)" }}>ABOUT</span>
        </div>
      </div>

      <div className="about-bento">

        {/* Headline card */}
        <BentoCard className="bento-card--headline" delay={0}>
          <div>
            <h2>
              I like turning<br />
              <span className="about-highlight">ideas</span> into<br />
              real things.
            </h2>
          </div>
          <div className="bento-headline-footer">
            <span className="mono">{personal.location.toUpperCase()}</span>
            <span className="mono">B.E. CS · SPPU 2024</span>
          </div>
        </BentoCard>

        {/* Bio card */}
        <BentoCard className="bento-card--bio" delay={0.1}>
          {personal.bio.map((para, i) => (
            <p key={i} style={{ marginBottom: i < personal.bio.length - 1 ? "16px" : 0 }}>
              {para}
            </p>
          ))}
        </BentoCard>

        {/* Currently card */}
        <BentoCard className="bento-card--currently" delay={0.15}>
          <span className="currently-label mono">CURRENTLY</span>
          <div className="currently-item">
            <span className="currently-key mono">BUILDING</span>
            <span className="currently-val">{currently.building}</span>
          </div>
          <div className="currently-item">
            <span className="currently-key mono">EXPLORING</span>
            <span className="currently-val">{currently.exploring}</span>
          </div>
          <div className="currently-item">
            <span className="currently-key mono">OPEN TO</span>
            <span className="currently-val">{currently.openTo}</span>
          </div>
        </BentoCard>

        {/* Background stat card — structured 3-part metrics showcase */}
        <BentoCard className="bento-card--stat" delay={0.2}>
          <div className="bento-stat-col">
            <span className="bento-stat-number">2+</span>
            <div className="bento-stat-text">
              <span className="bento-stat-title mono">YEARS IN TECH</span>
              <span className="bento-stat-sub">Dev &amp; Education</span>
            </div>
          </div>

          <div className="bento-stat-divider" />

          <div className="bento-stat-col">
            <span className="bento-stat-number">3</span>
            <div className="bento-stat-text">
              <span className="bento-stat-title mono">CORE BUILDS</span>
              <span className="bento-stat-sub">AI · POS/ERP · E-Commerce</span>
            </div>
          </div>

          <div className="bento-stat-divider" />

          <div className="bento-stat-col">
            <span className="bento-stat-number">SPPU</span>
            <div className="bento-stat-text">
              <span className="bento-stat-title mono">B.E. COMPUTER ENG</span>
              <span className="bento-stat-sub">Completed May 2024</span>
            </div>
          </div>
        </BentoCard>

      </div>
    </section>
  );
}
