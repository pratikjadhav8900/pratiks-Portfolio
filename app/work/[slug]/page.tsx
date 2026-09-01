import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/lib/projectsData";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for footer navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="case-study-page">
      <Navigation />

      <main className="case-study-main">
        {/* Back Link */}
        <div className="back-link-wrap">
          <Link href="/#work" className="back-link mono">
            ← BACK TO WORK
          </Link>
        </div>

        {/* Hero Header */}
        <header className="case-study-header">
          <div className="header-meta">
            <span className="case-num mono">{project.number}</span>
            <span className="case-cat mono">{project.category}</span>
            {project.badge && (
              <span className="case-badge-pill mono">
                <i className="status-dot" /> {project.badge}
              </span>
            )}
          </div>

          <div className="case-title-row">
            <h1 className="case-title">{project.name}</h1>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="case-live-btn mono"
                data-cursor="LAUNCH"
              >
                <i className="status-dot" /> VISIT LIVE WEBSITE ↗
              </a>
            )}
          </div>
          <p className="case-tagline">{project.tagline}</p>
        </header>

        {/* Quick Highlights Metrics Bar */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="case-metrics-bar">
            {project.highlights.map((h) => (
              <div key={h.label} className="case-metric-item">
                <span className="case-metric-label mono">{h.label}</span>
                <span className="case-metric-value">{h.value}</span>
              </div>
            ))}
          </section>
        )}

        {/* Tech Stack Pills */}
        <section className="case-tech-section">
          <h3 className="section-subhead mono">TECHNOLOGY STACK &amp; ARCHITECTURE</h3>
          <div className="tech-pills-row">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Media / Visual Showcase Section */}
        <section className="case-media-section">
          <div className="case-visual-frame">
            <div className="case-visual-top-bar">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="window-title mono">
                {project.slug === "tailoring-turba" ? "tailoringturba.com — Interactive Customizer" : "CoreG1 — Enterprise Inventory & Control Center"}
              </span>
              <span className="window-status mono">
                {project.liveUrl ? "LIVE DEPLOYMENT" : "OFFLINE-FIRST BUILD"}
              </span>
            </div>

            <div className="case-visual-image-wrap">
              <img
                src={project.imagePlaceholder}
                alt={`${project.name} preview showcase`}
                className="case-showcase-img"
              />
              {project.liveUrl && (
                <div className="visual-live-overlay">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="visual-launch-btn mono"
                    data-cursor="LAUNCH"
                  >
                    <span>OPEN DIRECT DEMO ↗</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Overview & Problem Grid */}
        <section className="case-grid-section">
          <div className="case-block">
            <h2 className="case-heading">Overview</h2>
            <p className="case-text">{project.fullOverview}</p>
          </div>

          <div className="case-block">
            <h2 className="case-heading">The Problem</h2>
            <p className="case-text">{project.problem}</p>
          </div>
        </section>

        {/* Solution & Architecture */}
        <section className="case-block-full">
          <h2 className="case-heading">Solution &amp; Engineering Design</h2>
          <p className="case-text">{project.solution}</p>
        </section>

        {/* Key Features */}
        <section className="case-features-section">
          <h2 className="case-heading">Key Features &amp; Modules</h2>
          <ul className="features-list">
            {project.features.map((feature, i) => (
              <li key={i} className="feature-item">
                <span className="feature-dot" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Challenges & Outcome */}
        <section className="case-grid-section">
          <div className="case-block">
            <h2 className="case-heading">Engineering Challenges</h2>
            <p className="case-text">{project.challenges}</p>
          </div>

          <div className="case-block">
            <h2 className="case-heading">Impact &amp; Outcome</h2>
            <p className="case-text">{project.outcome}</p>
          </div>
        </section>

        {/* Next Project Footer Link */}
        <section className="next-project-section">
          <span className="mono">NEXT CASE STUDY</span>
          <Link href={`/work/${nextProject.slug}`} className="next-project-link">
            <h2>{nextProject.name}</h2>
            <span className="next-arrow">→</span>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
