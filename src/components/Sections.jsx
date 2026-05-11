import { useState, useEffect } from "react";
import { useFadeIn } from "../hooks";
import { personalInfo, skills, projects, experience } from "../data/portfolioData";

// ============================================================
// components/About.jsx
// ============================================================

const infoChips = [
  { label: "Name",       val: "Tariqul Islam Saikot" },
  { label: "Role",       val: "Software Engineer"    },
  { label: "Location",   val: "Bangladesh"           },
  { label: "Experience", val: "2+ Years"             }
];

const resumeConfig = {
  isAvailable: true,
  href: "/resume.pdf"
};

export function About() {
  const ref = useFadeIn();
  const resumeHref = resumeConfig.isAvailable ? resumeConfig.href : "#";
  return (
    <section id="about" className="section">
      <div ref={ref} className="fade-in container">
        <p className="section-label">01. about me</p>
        <h2 className="section-title">Who I <span>Am</span></h2>

        <div className="about-grid">
          {/* Avatar */}
          <div className="about-avatar-wrap">
            <div className="about-avatar">
              <div className="avatar-ring" />
              <span className="avatar-emoji">👨‍💻</span>
            </div>
            <a
              className={`resume-button ${resumeConfig.isAvailable ? "" : "resume-button--disabled"}`.trim()}
              href={resumeHref}
              download={resumeConfig.isAvailable || undefined}
              aria-label="Download resume PDF"
              aria-disabled={!resumeConfig.isAvailable}
              onClick={!resumeConfig.isAvailable ? event => event.preventDefault() : undefined}
            >
              <span className="resume-button__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path
                    d="M12 3v10m0 0 4-4m-4 4-4-4M5 15v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </span>
              <span>Download Resume</span>
            </a>
          </div>

          {/* Text */}
          <div className="about-text">
            {personalInfo.bio.map((p, i) => <p key={i}>{p}</p>)}
            <div className="about-chips">
              {infoChips.map(c => (
                <div key={c.label} className="info-chip">
                  <span className="info-chip__label">{c.label}</span>
                  {c.val}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// components/Skills.jsx
// ============================================================

export function Skills() {
  const [active, setActive]   = useState("Frontend");
  const [mounted, setMounted] = useState(false);
  const ref = useFadeIn();

  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <section id="skills" className="section section--alt">
      <div ref={ref} className="fade-in container">
        <p className="section-label">02. skills</p>
        <h2 className="section-title">Tech <span>Stack</span></h2>

        {/* Category tabs */}
        <div className="skill-tabs">
          {Object.keys(skills).map(cat => (
            <button
              key={cat}
              className={`skill-tab ${active === cat ? "skill-tab--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="skills-grid">
          {skills[active].map(s => (
            <div key={s.name} className="skill-card">
              <div className="skill-card__icon">{s.icon}</div>
              <div className="skill-card__name">{s.name}</div>
              <div className="skill-card__level">{s.level}%</div>
              <div className="skill-bar">
                <div
                  className="skill-bar__fill"
                  style={{ width: mounted ? `${s.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// components/Projects.jsx
// ============================================================

export function Projects() {
  const [filter, setFilter] = useState("All");
  const ref = useFadeIn();
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const shown = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div ref={ref} className="fade-in container">
        <p className="section-label">03. projects</p>
        <h2 className="section-title">My <span>Work</span></h2>

        {/* Filter buttons */}
        <div className="filter-row">
          {categories.map(c => (
            <button
              key={c}
              className={`filter-btn ${filter === c ? "filter-btn--active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="projects-grid">
          {shown.map(p => (
            <div key={p.id} className="project-card">
              <div className="project-card__media">
                <img
                  src={p.image}
                  alt={`${p.title} thumbnail`}
                  className="project-card__image"
                  loading="lazy"
                />
                <div className="project-card__media-overlay" />
              </div>
              <div className="project-card__header">
                <div
                  className="project-card__icon"
                  style={{ background: p.color }}
                >
                  {p.icon}
                </div>
                <div className="project-card__links">
                  <a href={p.live}   className="proj-link" title="Live Demo">↗</a>
                  <a href={p.github} className="proj-link" title="GitHub">⌥</a>
                </div>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p  className="project-card__desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="project-card__actions">
                  <a href={p.live} className="btn btn--outline project-card__button">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// components/Experience.jsx
// ============================================================

export function Experience() {
  const ref = useFadeIn();
  return (
    <section id="experience" className="section section--alt">
      <div ref={ref} className="fade-in container">
        <p className="section-label">04. experience</p>
        <h2 className="section-title">Work <span>History</span></h2>

        <div className="exp-timeline">
          {experience.map((e, i) => (
            <div key={i} className="exp-item">
              <div className="exp-dot" />
              <p  className="exp-period">{e.period}</p>
              <h3 className="exp-title">{e.title}</h3>
              <p  className="exp-company">@ {e.company}</p>
              <p  className="exp-desc">{e.desc}</p>
              <div className="exp-chips">
                {e.chips.map(c => <span key={c} className="exp-chip">{c}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// components/Contact.jsx
// ============================================================

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const ref = useFadeIn();

  const update = key => e => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      // TODO: integrate EmailJS or your backend endpoint here
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  const links = [
    { icon: "📧", label: "email",    text: personalInfo.email,    href: `mailto:${personalInfo.email}` },
    { icon: "📱", label: "phone",    text: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
    { icon: "🐙", label: "github",   text: "github.com/saykat",   href: personalInfo.github },
    { icon: "💼", label: "linkedin", text: "linkedin.com/in/saykat", href: personalInfo.linkedin }
  ];

  return (
    <section id="contact" className="section">
      <div ref={ref} className="fade-in container">
        <p className="section-label">05. contact</p>
        <h2 className="section-title">Let&apos;s <span>Connect</span></h2>

        <div className="contact-grid">
          {/* Left — info */}
          <div className="contact-info">
            <h3>Have a project in mind?</h3>
            <p>
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of something amazing. Let&apos;s
              build something together!
            </p>
            <div className="contact-links">
              {links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  className="contact-link"
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <div className="contact-link__icon">{l.icon}</div>
                  <div>
                    <span className="contact-link__label">{l.label}</span>
                    <strong className="contact-link__val">{l.text}</strong>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="form-success">
                ✅ Message sent! I&apos;ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="cf-name">name</label>
                  <input
                    id="cf-name"
                    className="form-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={update("name")}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-email">email</label>
                  <input
                    id="cf-email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-msg">message</label>
                  <textarea
                    id="cf-msg"
                    className="form-input form-input--textarea"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={update("message")}
                    required
                  />
                </div>
                <button type="submit" className="btn btn--primary btn--full">
                  🚀 Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// components/Footer.jsx
// ============================================================
export function Footer() {
  const socials = [
    { icon: "🐙", href: "#", label: "GitHub" },
    { icon: "💼", href: "#", label: "LinkedIn" },
    { icon: "📧", href: "#", label: "Email" }
  ];
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} <span>Tariqul Islam Saykat</span>. Built with ❤️ &amp; React
      </p>
      <div className="footer__socials">
        {socials.map(s => (
          <a key={s.label} href={s.href} className="social-link" aria-label={s.label}>
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
