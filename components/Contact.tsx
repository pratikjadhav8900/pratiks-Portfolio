"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/lib/profileData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fail silently
    }
  };

  return (
    <section className="contact section" id="contact">
      <motion.p
        className="contact-kicker mono"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <i className="red-dot" />
        HAVE A PROJECT IN MIND?
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        LET&apos;S MAKE<br />
        <span className="contact-italic">something good.</span>
      </motion.h2>

      <motion.div
        className="contact-action-wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          className="contact-link"
          href={`mailto:${personal.email}`}
          data-cursor="EMAIL ME"
        >
          GET IN TOUCH ↗
        </a>

        <button
          className="copy-email-btn mono"
          type="button"
          onClick={handleCopy}
          data-cursor="COPY"
        >
          {copied ? "COPIED! ✓" : personal.email}
        </button>
      </motion.div>

      {/* Social links row */}
      <motion.div
        className="contact-socials"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <a
          href={personal.socials.github}
          target="_blank"
          rel="noreferrer"
          className="contact-social-link mono"
          data-cursor="GITHUB"
        >
          GITHUB ↗
        </a>
        <span className="contact-social-sep" aria-hidden="true">/</span>
        <a
          href={personal.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="contact-social-link mono"
          data-cursor="LINKEDIN"
        >
          LINKEDIN ↗
        </a>
        <span className="contact-social-sep" aria-hidden="true">/</span>
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="contact-social-link mono"
          data-cursor="RESUME"
        >
          DOWNLOAD RESUME (PDF) ↗
        </a>
      </motion.div>

      {/* Direct phone & location */}
      <motion.div
        className="contact-direct-info mono"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.55 }}
        style={{ marginTop: "24px", fontSize: "10px", letterSpacing: "1.5px", color: "var(--muted)" }}
      >
        <span>{personal.location.toUpperCase()}</span>
        <span style={{ margin: "0 10px", opacity: 0.4 }}>·</span>
        <a
          href={`tel:${personal.phone.replace(/\s+/g, "")}`}
          style={{ color: "rgba(255,255,255,0.55)", transition: "color 0.2s" }}
        >
          {personal.phone}
        </a>
      </motion.div>
    </section>
  );
}
