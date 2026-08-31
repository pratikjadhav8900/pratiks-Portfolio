"use client";

import {
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { story } from "@/lib/profileData";
import { projectsData } from "@/lib/projectsData";

// ─── Types ──────────────────────────────────────────────────
type Phase = "idle" | "story" | "end";

// ─── Helpers ────────────────────────────────────────────────
const TOTAL = story.steps.length;

const ease = [0.16, 1, 0.3, 1] as const;

function StepTitle({
  title,
  italic,
  shouldReduce,
}: {
  title: string;
  italic?: string;
  shouldReduce: boolean;
}) {
  const words = title.split(" ");
  return (
    <h2 className="story-step-title">
      {words.map((word, i) => (
        <span key={i} className="story-title-word-wrap">
          <motion.span
            className="story-title-word"
            initial={shouldReduce ? {} : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, delay: i * 0.09, ease }}
          >
            {word}
          </motion.span>
        </span>
      ))}
      {italic && (
        <span className="story-title-word-wrap">
          <motion.span
            className="story-title-word story-title-italic"
            initial={shouldReduce ? {} : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, delay: words.length * 0.09, ease }}
          >
            {italic}
          </motion.span>
        </span>
      )}
    </h2>
  );
}

// ─── Step renderers ──────────────────────────────────────────
function StepDefault({ subtitle }: { subtitle?: string[] }) {
  if (!subtitle) return null;
  return (
    <motion.div
      className="story-subtitle-lines"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.45 }}
    >
      {subtitle.map((line) => (
        <span key={line} className="story-subtitle-line">{line}</span>
      ))}
    </motion.div>
  );
}

function StepProjects() {
  return (
    <motion.div
      className="story-project-list"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {projectsData.map((p, i) => (
        <motion.a
          key={p.slug}
          href={`/work/${p.slug}`}
          className="story-project-row"
          data-cursor="VIEW CASE"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.55 + i * 0.1 }}
          whileHover={{ x: 6 }}
        >
          <span className="story-project-num mono">{p.number}</span>
          <div>
            <span className="story-project-name">{p.name}</span>
            <span className="story-project-cat mono">{p.category}</span>
          </div>
          <span className="story-project-arrow">↗</span>
        </motion.a>
      ))}
    </motion.div>
  );
}

function StepProcess({ items }: { items: string[] }) {
  return (
    <motion.div
      className="story-process-flow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      {items.map((item, i) => (
        <span key={item} className="story-process-row">
          <motion.span
            className="story-process-item"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
          >
            {item}
          </motion.span>
          {i < items.length - 1 && (
            <motion.span
              className="story-process-arrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            >
              →
            </motion.span>
          )}
        </span>
      ))}
    </motion.div>
  );
}

function StepAreas({
  items,
  skills,
}: {
  items: string[];
  skills?: string[];
}) {
  return (
    <motion.div
      className="story-areas"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      <ul className="story-areas-list">
        {items.map((item, i) => (
          <motion.li
            key={item}
            className="story-areas-item"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.6 + i * 0.07 }}
          >
            <span className="story-areas-dot" />
            {item}
          </motion.li>
        ))}
      </ul>
      {skills && (
        <motion.div
          className="story-skills-pills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.85 }}
        >
          {skills.map((s) => (
            <span key={s} className="story-skill-pill mono">{s}</span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────
export default function StorySection() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [stepIdx, setStepIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1); // for slide direction
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion() ?? false;

  // ── Navigation ────────────────────────────────────────────
  const goNext = useCallback(() => {
    if (stepIdx < TOTAL - 1) {
      setDir(1);
      setStepIdx((i) => i + 1);
    } else {
      setPhase("end");
    }
  }, [stepIdx]);

  const goPrev = useCallback(() => {
    if (stepIdx > 0) {
      setDir(-1);
      setStepIdx((i) => i - 1);
    } else {
      setPhase("idle");
    }
  }, [stepIdx]);

  const startStory = useCallback(() => {
    setDir(1);
    setStepIdx(0);
    setPhase("story");
  }, []);

  const skipStory = useCallback(() => {
    setPhase("idle");
    // Scroll past this section to experience
    const exp = document.getElementById("experience");
    if (exp) exp.scrollIntoView({ behavior: "smooth" });
  }, []);

  // ── Keyboard ──────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "story") return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
      if (e.key === "Escape") skipStory();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [phase, goNext, goPrev, skipStory]);

  // ── Slide variants ────────────────────────────────────────
  const slideVariants = {
    enter: (d: number) => ({
      opacity: shouldReduce ? 1 : 0,
      x: shouldReduce ? 0 : d * 40,
    }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({
      opacity: 0,
      x: shouldReduce ? 0 : -d * 40,
    }),
  };

  const step = story.steps[stepIdx];

  return (
    <section
      ref={sectionRef}
      id="story"
      className="story-section"
      aria-label="Interactive personal story"
    >
      <AnimatePresence mode="wait">
        {/* ── IDLE ─────────────────────────────────────────── */}
        {phase === "idle" && (
          <motion.div
            key="idle"
            className="story-idle"
            initial={{ opacity: shouldReduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="story-idle-label mono">
              <span className="story-idle-num">01</span>
              <span>/</span>
              <span>{story.label}</span>
            </div>

            <h2 className="story-idle-headline">
              <AnimatedWord text="TELL" delay={0} reduce={shouldReduce} />
              <AnimatedWord text="ME" delay={0.07} reduce={shouldReduce} />
              <br />
              <AnimatedWord text="ABOUT" delay={0.14} reduce={shouldReduce} />
              <br />
              <AnimatedWord text="YOURSELF." delay={0.21} italic reduce={shouldReduce} />
            </h2>

            <motion.div
              className="story-idle-cta"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65 }}
            >
              <button
                className="story-start-btn"
                type="button"
                onClick={startStory}
                data-cursor="START"
                aria-label="Start the 60 second version"
              >
                <span>START</span>
                <span className="story-start-arrow">→</span>
              </button>
              <button
                className="story-skip-link mono"
                type="button"
                onClick={skipStory}
                aria-label="Skip story and continue to portfolio"
              >
                SKIP TO PORTFOLIO ↓
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* ── STORY STEPS ──────────────────────────────────── */}
        {phase === "story" && (
          <motion.div
            key="story"
            className="story-active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Progress bar */}
            <div className="story-progress-bar">
              <motion.div
                className="story-progress-fill"
                animate={{ width: `${((stepIdx + 1) / TOTAL) * 100}%` }}
                transition={{ duration: 0.45, ease }}
              />
            </div>

            {/* Top row */}
            <div className="story-top-row">
              <span
                className="story-step-counter mono"
                aria-live="polite"
                aria-label={`Step ${stepIdx + 1} of ${TOTAL}`}
              >
                {String(stepIdx + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
              </span>
              <button
                className="story-skip-link mono"
                type="button"
                onClick={skipStory}
                data-cursor="SKIP"
              >
                SKIP STORY →
              </button>
            </div>

            {/* Step content */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={step.id}
                className="story-step-content"
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease }}
              >
                {/* Eyebrow */}
                <motion.p
                  className="story-eyebrow mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {step.eyebrow}
                </motion.p>

                {/* Title */}
                <StepTitle
                  title={step.title}
                  italic={step.titleItalic}
                  shouldReduce={shouldReduce}
                />

                {/* Subtitle (step 1 only) */}
                {step.type === "default" && <StepDefault subtitle={step.subtitle} />}

                {/* Body copy */}
                <motion.p
                  className="story-body"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {step.body}
                </motion.p>

                {/* Type-specific extra content */}
                {step.type === "projects" && <StepProjects />}
                {step.type === "process" && step.items && <StepProcess items={step.items} />}
                {step.type === "areas" && step.items && (
                  <StepAreas items={step.items} skills={step.skills} />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="story-nav">
              <button
                className="story-nav-btn story-nav-prev"
                type="button"
                onClick={goPrev}
                data-cursor="BACK"
                aria-label="Previous step"
              >
                ← {stepIdx === 0 ? "OVERVIEW" : "BACK"}
              </button>

              <div className="story-nav-dots" aria-hidden="true">
                {story.steps.map((_, i) => (
                  <button
                    key={i}
                    className={`story-dot ${i === stepIdx ? "active" : ""}`}
                    type="button"
                    onClick={() => { setDir(i > stepIdx ? 1 : -1); setStepIdx(i); }}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>

              <button
                className="story-nav-btn story-nav-next"
                type="button"
                onClick={goNext}
                data-cursor={stepIdx === TOTAL - 1 ? "FINISH" : "NEXT"}
                aria-label={stepIdx === TOTAL - 1 ? "Finish story" : "Next step"}
              >
                {stepIdx === TOTAL - 1 ? "FINISH →" : "NEXT →"}
              </button>
            </div>
          </motion.div>
        )}

        {/* ── END ──────────────────────────────────────────── */}
        {phase === "end" && (
          <motion.div
            key="end"
            className="story-end"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease }}
          >
            <motion.p
              className="story-end-so mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              SO...
            </motion.p>

            <h2 className="story-end-headline">
              {["WANT", "TO", "SEE"].map((w, i) => (
                <AnimatedWord key={w} text={w} delay={0.25 + i * 0.08} reduce={shouldReduce} />
              ))}
              {" "}
              <br />
              {["WHAT", "I'VE"].map((w, i) => (
                <AnimatedWord key={w} text={w} delay={0.5 + i * 0.08} reduce={shouldReduce} />
              ))}
              {" "}
              <AnimatedWord text="BUILT?" delay={0.7} italic reduce={shouldReduce} />
            </h2>

            <motion.div
              className="story-end-ctas"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
            >
              <a
                href="#work"
                className="story-cta-primary"
                data-cursor="VIEW WORK"
              >
                VIEW MY WORK ↗
              </a>
              <a
                href="#contact"
                className="story-cta-secondary"
                data-cursor="CONTACT"
              >
                GET IN TOUCH ↗
              </a>
            </motion.div>

            <motion.div
              className="story-end-bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <button
                className="story-back-to-portfolio mono"
                type="button"
                onClick={() => setPhase("idle")}
              >
                ← READ AGAIN
              </button>
              <button
                className="story-back-to-portfolio mono"
                type="button"
                onClick={() => {
                  setPhase("idle");
                  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CONTINUE TO PORTFOLIO ↓
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ── Animated word helper ──────────────────────────────────────
function AnimatedWord({
  text,
  delay,
  italic = false,
  reduce,
}: {
  text: string;
  delay: number;
  italic?: boolean;
  reduce: boolean;
}) {
  return (
    <span className="story-anim-word-wrap">
      <motion.span
        className={italic ? "story-title-italic" : undefined}
        style={{ display: "inline-block" }}
        initial={reduce ? {} : { y: "105%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}
