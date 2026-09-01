"use client";

import { useState, useEffect, useCallback } from "react";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="nav-header">
        <nav
          className="nav"
          aria-label="Main Navigation"
          style={{
            background: scrolled
              ? "rgba(8, 8, 8, 0.94)"
              : "rgba(8, 8, 8, 0.4)",
          }}
        >
          <Link href="/" className="brand" data-cursor="HOME" onClick={closeMenu}>
            <span className="brand-logo">{personal.initials}</span>
            <strong className="brand-text">
              PRATIK<br />JADHAV
            </strong>
          </Link>

          <div className="nav-links" role="navigation" aria-label="Site sections">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} data-cursor="GO">
                {item.label}
              </a>
            ))}
          </div>

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
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
            >
              <span className="mobile-toggle-label mono">{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
              <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            className="mobile-menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-top-bar">
              <div className="mobile-menu-status mono">
                <i className="status-dot" /> AVAILABLE FOR WORK
              </div>
              <button
                className="mobile-menu-close-btn mono"
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                CLOSE ✕
              </button>
            </div>

            <div className="mobile-menu-content">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                >
                  <span className="mobile-menu-num mono">0{i + 1}</span>
                  <span className="mobile-menu-text">{item.label}</span>
                  <span className="mobile-menu-arrow">↗</span>
                </motion.a>
              ))}
              <motion.a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mobile-menu-resume-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05, duration: 0.35 }}
              >
                <span className="mobile-menu-num mono">07</span>
                <span className="mobile-menu-text">DOWNLOAD RESUME</span>
                <span className="mobile-menu-arrow">↗</span>
              </motion.a>
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-socials mono">
                <a href={personal.socials.github} target="_blank" rel="noreferrer" onClick={closeMenu}>
                  GITHUB ↗
                </a>
                <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" onClick={closeMenu}>
                  LINKEDIN ↗
                </a>
                <a href={`mailto:${personal.email}`} onClick={closeMenu}>
                  EMAIL ↗
                </a>
              </div>
              <div className="mobile-footer-meta mono">
                <span>{personal.location.toUpperCase()}</span>
                <span>© {new Date().getFullYear()}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
