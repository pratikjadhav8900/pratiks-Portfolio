"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/lib/profileData";

export default function Education() {
  return (
    <section className="edu-section section" id="education">
      <div className="section-label">
        <div className="section-label-left">
          <span className="section-number mono">07</span>
          <span className="section-title">ACADEMICS &amp; CREDENTIALS</span>
        </div>
        <span className="section-count mono">
          {String(education.length).padStart(2, "0")} DEGREES · {String(certifications.length).padStart(2, "0")} CERTIFICATIONS
        </span>
      </div>

      <motion.h2
        className="section-headline"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Where I&apos;ve<br />
        <span className="section-headline-italic">studied &amp; certified.</span>
      </motion.h2>

      <div className="edu-grid">
        {education.map((item, i) => (
          <motion.div
            key={item.id}
            className="edu-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="edu-card-header">
              <div className="edu-card-left">
                <span className="edu-degree">{item.degree}</span>
                <span className="edu-field">{item.field}</span>
              </div>
              <div className="edu-card-right">
                <span className="edu-date mono">{item.dateRange}</span>
                {item.completed && (
                  <span className="edu-badge mono">COMPLETED</span>
                )}
              </div>
            </div>

            <div className="edu-institution-row">
              <span className="edu-institution">{item.institution}</span>
              <span className="edu-location mono">{item.location}</span>
            </div>

            {item.details && (
              <p className="edu-details">{item.details}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Certifications Block */}
      {certifications && certifications.length > 0 && (
        <div className="edu-certs-block">
          <span className="edu-certs-eyebrow mono">
            <i className="red-dot" />
            PROFESSIONAL CERTIFICATIONS
          </span>
          <div className="edu-certs-grid">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.name}
                className="edu-cert-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <span className="edu-cert-provider mono">{cert.provider}</span>
                <h4 className="edu-cert-name">{cert.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
