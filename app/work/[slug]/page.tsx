import Link from "next/link";
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
          </div>

          <h1 className="case-title">{project.name}</h1>
          <p className="case-tagline">{project.tagline}</p>
        </header>

        {/* Tech Stack Pills */}
        <section className="case-tech-section">
          <h3 className="section-subhead mono">TECHNOLOGY STACK</h3>
          <div className="tech-pills-row">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
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

        {/* Media Placeholder Showcase */}
        <section className="case-media-section">
          <div className="media-placeholder-card">
            <div className="placeholder-content">
              <span className="mono">INTERACTIVE PREVIEW / SCREENSHOT PLACEHOLDER</span>
              <p>[ Upload screenshot for {project.name} to public/images/projects/{project.slug}.png ]</p>
            </div>
          </div>
        </section>

        {/* Solution & Architecture */}
        <section className="case-block-full">
          <h2 className="case-heading">Solution &amp; Architecture</h2>
          <p className="case-text">{project.solution}</p>
        </section>

        {/* Key Features */}
        <section className="case-features-section">
          <h2 className="case-heading">Key Features</h2>
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
            <h2 className="case-heading">Outcome</h2>
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
