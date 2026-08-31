"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/profileData";

export default function Skills() {
  return (
    <section className="skills-section section" id="skills">
      <div className="section-label">
        <div className="section-label-left">
          <span className="section-number mono">08</span>
          <span className="section-title">TOOLKIT & TECHNOLOGIES</span>
        </div>
        <span className="section-count mono">
          {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} SKILLS
        </span>
      </div>

      <motion.h2
        className="section-headline"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        BUILD.&nbsp;
        <span className="section-headline-italic">SHIP.</span>
        &nbsp;ITERATE.
      </motion.h2>

      <div className="skills-grid">
        {skillCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.label}
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="skill-cat-label mono">{cat.label}</span>
            <ul className="skill-cat-list">
              {cat.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skill}
                  className="skill-cat-item"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.04 }}
                >
                  <span className="skill-item-dot" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
