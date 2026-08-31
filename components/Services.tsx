"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { servicesData, processSteps, type ServiceItem } from "@/lib/profileData";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const shouldReduce = useReducedMotion() ?? false;

  const closeModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  // Keyboard close
  useEffect(() => {
    if (!selectedService) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedService, closeModal]);

  return (
    <section className="section services-section" id="services">
      {/* Section Label */}
      <div className="section-label">
        <div className="section-label-left">
          <span className="section-number mono">06</span>
          <span className="section-title">SERVICES &amp; WHAT I BUILD</span>
        </div>
        <span className="section-count mono">
          {String(servicesData.length).padStart(2, "0")} CAPABILITIES
        </span>
      </div>

      {/* Editorial Headline */}
      <div className="services-header">
        <motion.h2
          className="section-headline services-main-headline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          I DON&apos;T JUST WRITE CODE.<br />
          <span className="section-headline-italic">I build the thing around the problem.</span>
        </motion.h2>

        <motion.p
          className="services-lead-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
        >
          I work with founders, businesses, and product teams to design, build, automate, and improve
          digital products and online experiences — from high-converting storefronts to bespoke AI workflows.
        </motion.p>
      </div>

      {/* ── Editorial Service Grid ────────────────────────── */}
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            className={`service-card ${service.id === "business-websites" || service.id === "ecommerce-solutions" ? "service-card--featured" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.05, ease }}
            onClick={() => setSelectedService(service)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedService(service);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${service.title}`}
            data-cursor="VIEW"
          >
            {/* Top row */}
            <div className="service-card-top">
              <span className="service-card-number mono">{service.number}</span>
              <span className="service-card-arrow" aria-hidden="true">↗</span>
            </div>

            {/* Title & Short Description */}
            <div className="service-card-body">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.shortDescription}</p>
            </div>

            {/* Quick capability preview */}
            <ul className="service-card-caps">
              {service.capabilities.slice(0, 3).map((cap) => (
                <li key={cap} className="service-card-cap-item">
                  <span className="service-cap-dot" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>

            {/* Card Footer: Tech tags + Related Project */}
            <div className="service-card-footer">
              <div className="service-tech-tags">
                {service.techStack.slice(0, 3).map((t) => (
                  <span key={t} className="service-tech-tag mono">{t}</span>
                ))}
              </div>

              {service.relatedProject && (
                <span className="service-related-badge mono">
                  CASE: {service.relatedProject.name.toUpperCase()} ↗
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── HOW I WORK Process Section ───────────────────── */}
      <div className="process-block">
        <div className="process-header">
          <span className="process-eyebrow mono">
            <i className="red-dot" />
            WORKFLOW / HOW I DELIVER
          </span>
          <h3 className="process-title">From initial conversation to live production.</h3>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              className="process-step-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease }}
            >
              <div className="process-step-top">
                <span className="process-step-num mono">{step.number}</span>
                <span className="process-step-line" />
              </div>
              <h4 className="process-step-name">{step.title}</h4>
              <p className="process-step-summary">{step.summary}</p>
              <p className="process-step-detail">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Services Bottom CTA Bar ──────────────────────── */}
      <motion.div
        className="services-cta-bar"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease }}
      >
        <div className="services-cta-text">
          <h3 className="services-cta-heading">
            HAVE A PROJECT<br />
            <span className="services-cta-italic">in mind?</span>
          </h3>
          <p className="services-cta-sub">
            Let&apos;s build something useful, fast, and engineered to last.
          </p>
        </div>

        <div className="services-cta-buttons">
          <a
            href="#contact"
            className="services-btn-primary mono"
            data-cursor="CONTACT"
          >
            START A CONVERSATION ↗
          </a>
          <a
            href="#work"
            className="services-btn-secondary mono"
            data-cursor="WORK"
          >
            VIEW MY WORK ↗
          </a>
        </div>
      </motion.div>

      {/* ── Detail Modal / Drawer ────────────────────────── */}
      <AnimatePresence>
        {selectedService && (
          <div
            className="service-modal-backdrop"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <motion.div
              className="service-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease }}
            >
              {/* Modal Header */}
              <div className="service-modal-header">
                <div className="service-modal-meta">
                  <span className="service-modal-num mono">{selectedService.number}</span>
                  <span className="service-modal-badge mono">SERVICE CAPABILITY</span>
                </div>
                <button
                  className="service-modal-close"
                  type="button"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Title & Description */}
              <h3 id="service-modal-title" className="service-modal-title">
                {selectedService.title}
              </h3>
              <p className="service-modal-desc">{selectedService.description}</p>

              {/* What I can help with */}
              <div className="service-modal-section">
                <span className="service-modal-section-label mono">WHAT I DELIVER</span>
                <ul className="service-modal-cap-list">
                  {selectedService.capabilities.map((c) => (
                    <li key={c} className="service-modal-cap-item">
                      <span className="service-cap-dot" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="service-modal-section">
                <span className="service-modal-section-label mono">TECHNOLOGIES &amp; TOOLS</span>
                <div className="service-modal-tech-pills">
                  {selectedService.techStack.map((tech) => (
                    <span key={tech} className="service-modal-tech-pill mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related project link if present */}
              {selectedService.relatedProject && (
                <div className="service-modal-section service-modal-project-box">
                  <div>
                    <span className="service-modal-section-label mono">RELEVANT PROJECT EVIDENCE</span>
                    <p className="service-modal-project-name">
                      {selectedService.relatedProject.name}
                    </p>
                  </div>
                  <Link
                    href={`/work/${selectedService.relatedProject.slug}`}
                    className="service-modal-project-link mono"
                    onClick={closeModal}
                  >
                    VIEW CASE STUDY ↗
                  </Link>
                </div>
              )}

              {/* Modal Action Footer */}
              <div className="service-modal-footer">
                <a
                  href="#contact"
                  className="service-modal-cta-primary mono"
                  onClick={closeModal}
                >
                  DISCUSS THIS SERVICE ↗
                </a>
                <button
                  className="service-modal-cta-secondary mono"
                  type="button"
                  onClick={closeModal}
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
