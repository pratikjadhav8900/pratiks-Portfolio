"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projectsData";

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) {
  return (
    <motion.article
      className="project-row"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="project-row-link"
        data-cursor="VIEW CASE"
      >
        <span className="project-number mono">{project.number}</span>

        <div className="project-title">
          <h2>{project.name}</h2>
          <div className="project-meta">
            <span className="project-category mono">{project.category}</span>
            <div className="project-tech-tags">
              {project.techStack.slice(0, 3).map((tech) => (
                <span key={tech} className="project-tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="project-desc">{project.description}</p>

        <div className="project-arrow-wrap">
          <span className="arrow">↗</span>
        </div>
      </Link>
    </motion.article>
  );
}

export default function SelectedWork() {
  return (
    <section className="section work-section" id="work">
      <div className="section-label">
        <div className="section-label-left">
          <span className="section-number mono">03</span>
          <span className="section-title">SELECTED WORK</span>
        </div>
        <span className="section-count mono">
          {String(projectsData.length).padStart(2, "0")} PROJECTS
        </span>
      </div>

      <div className="project-list">
        {projectsData.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
