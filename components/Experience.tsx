"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience, type ExperienceItem } from "@/lib/profileData";

const TYPE_LABEL: Record<string, string> = {
  internship: "INTERNSHIP",
  "full-time": "FULL-TIME",
  contract: "CONTRACT",
  "part-time": "PART-TIME",
  freelance: "FREELANCE",
};

function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 0); // First (current) role expanded by default

  return (
    <motion.div
      className={`exp-card ${item.isCurrent ? "exp-card--current" : ""}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Timeline connector */}
      <div className="exp-timeline-col">
        <div className={`exp-dot ${item.isCurrent ? "exp-dot--current" : ""}`} />
        {index < experience.length - 1 && <div className="exp-line" />}
      </div>

      {/* Content */}
      <div className="exp-content">
        <div className="exp-header">
          <div className="exp-header-left">
            <span className="exp-index mono">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <div className="exp-role-title-row">
                <h3 className="exp-role">{item.role}</h3>
                {item.isCurrent && (
                  <span className="exp-current-badge mono">
                    <i className="status-dot" /> CURRENT
                  </span>
                )}
              </div>
              <div className="exp-meta">
                <span className="exp-company">{item.company}</span>
                <span className="exp-meta-sep">·</span>
                <span className="exp-location mono">{item.location}</span>
              </div>
            </div>
          </div>

          <div className="exp-header-right">
            <span className="exp-date mono">{item.dateRange}</span>
            <span className="exp-type-badge mono">{TYPE_LABEL[item.type] || item.type.toUpperCase()}</span>
          </div>
        </div>

        <p className="exp-description">{item.description}</p>

        {/* Quick highlight tags preview if available */}
        {item.highlights && item.highlights.length > 0 && (
          <div className="exp-highlights-row">
            {item.highlights.slice(0, 4).map((h) => (
              <span key={h} className="exp-highlight-pill mono">
                {h}
              </span>
            ))}
          </div>
        )}

        <button
          className="exp-toggle mono"
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          data-cursor="TOGGLE"
        >
          {expanded ? "COLLAPSE DETAILS ↑" : "VIEW DETAILS & RESPONSIBILITIES ↓"}
        </button>

        {/* Expanded Responsibilities & Details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="exp-expanded-wrap"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="exp-resp-heading mono">KEY RESPONSIBILITIES &amp; EVIDENCE</span>
              <ul className="exp-responsibilities">
                {item.responsibilities.map((resp, i) => (
                  <motion.li
                    key={i}
                    className="exp-resp-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <span className="exp-resp-dot" />
                    <span>{resp}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="section exp-section" id="experience">
      <div className="section-label">
        <div className="section-label-left">
          <span className="section-number mono">02</span>
          <span className="section-title">EXPERIENCE &amp; CAREER HISTORY</span>
        </div>
        <span className="section-count mono">
          {String(experience.length).padStart(2, "0")} ROLES
        </span>
      </div>

      <motion.div
        className="exp-section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="exp-eyebrow mono">
          <i className="red-dot" />
          THE SHORT VERSION IS OVER. NOW, THE RECEIPTS.
        </span>
        <h2 className="section-headline">
          Where I&apos;ve<br />
          <span className="section-headline-italic">built &amp; delivered.</span>
        </h2>
      </motion.div>

      <div className="exp-list">
        {experience.map((item, index) => (
          <ExperienceCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
