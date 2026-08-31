"use client";

import { motion } from "framer-motion";
import { whatIDo } from "@/lib/profileData";

export default function WhatIDo() {
  return (
    <section className="whatiido-section section" id="whatido">
      <div className="section-label">
        <div className="section-label-left">
          <span className="section-number mono">05</span>
          <span className="section-title">WHAT I DO</span>
        </div>
      </div>

      <div className="whatido-grid">
        {whatIDo.map((item, i) => (
          <motion.div
            key={item.number}
            className="whatido-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
          >
            <div className="whatido-card-top">
              <span className="whatido-number mono">{item.number}</span>
              <div className="whatido-icon-wrap" aria-hidden="true">
                {i === 0 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                )}
                {i === 1 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                )}
                {i === 2 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                )}
                {i === 3 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                )}
              </div>
            </div>
            <h3 className="whatido-title">{item.title}</h3>
            <p className="whatido-desc">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
