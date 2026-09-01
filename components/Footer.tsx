"use client";

import Link from "next/link";
import { personal } from "@/lib/profileData";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <Link href="/" className="footer-logo">
            <span className="footer-logo-mark">{personal.initials}</span>
            <div>
              <span className="footer-name mono">{personal.name.toUpperCase()}</span>
              <span className="footer-role-tag mono">FULL-STACK DEVELOPER · AI TOOLS &amp; AUTOMATION</span>
            </div>
          </Link>
          <p className="footer-tagline">{personal.openTo}</p>
        </div>

        <div className="footer-links-col">
          <span className="footer-col-label mono">NAVIGATE</span>
          <nav className="footer-nav" aria-label="Footer section navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="footer-nav-link mono">
                {link.label.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-links-col">
          <span className="footer-col-label mono">CONNECT</span>
          <nav className="footer-nav footer-social-nav" aria-label="Footer social links">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="footer-nav-link mono"
              data-cursor="GITHUB"
            >
              GITHUB ↗
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-nav-link mono"
              data-cursor="LINKEDIN"
            >
              LINKEDIN ↗
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="footer-nav-link mono"
              data-cursor="EMAIL"
            >
              EMAIL ↗
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="footer-nav-link footer-resume-link mono"
              data-cursor="RESUME"
            >
              DOWNLOAD RESUME ↗
            </a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy mono" suppressHydrationWarning>
          © {year} {personal.name}
        </span>
        <span className="footer-copy mono">PUNE, INDIA</span>
      </div>
    </footer>
  );
}
