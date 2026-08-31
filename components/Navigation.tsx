"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/lib/profileData";

const NAV_ITEMS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="nav"
        aria-label="Main Navigation"
        style={{
          background: scrolled
            ? "rgba(8, 8, 8, 0.92)"
            : "rgba(8, 8, 8, 0.3)",
        }}
      >
        <Link href="/" className="brand" data-cursor="HOME">
          <span className="brand-logo">{personal.initials}</span>
          <strong className="brand-text">
            PRATIK<br />JADHAV
          </strong>
        </Link>

        <nav className="nav-links" aria-label="Site sections">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} data-cursor="GO">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a
            href={personal.resumeUrl}
            className="nav-resume-link mono"
            target="_blank"
            rel="noreferrer"
            data-cursor="RESUME"
            aria-label="Download Resume"
          >
            RESUME ↗
          </a>
          <span className="availability">
            <i className="status-dot" /> AVAILABLE
          </span>
          <button
            className="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-content">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.06, duration: 0.4 }}
                style={{ color: "var(--red-bright)" }}
              >
                DOWNLOAD RESUME ↗
              </motion.a>
            </div>
            <div className="mobile-socials mono">
              <a href={personal.socials.github} target="_blank" rel="noreferrer">GITHUB ↗</a>
              <a href={personal.socials.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
              <a href={`mailto:${personal.email}`}>EMAIL ↗</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
