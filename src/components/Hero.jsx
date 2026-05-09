// ============================================================
// components/Hero.jsx
// Full-screen hero with typing animation + CTA buttons
// ============================================================
import { useTypingEffect } from "../hooks";
import { personalInfo, typingTexts } from "../data/portfolioData";

export default function Hero() {
  const typed = useTypingEffect(typingTexts);

  return (
    <section className="hero" id="hero">
      {/* Decorative background grid */}
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__layout">
        <div className="hero__content">
          {/* Availability badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="hero__heading">
            Hi, I&apos;m <br />
            <span className="hero__name">{personalInfo.name}</span>
          </h1>

          {/* Typing animation */}
          <p className="hero__typing">
            <span>{typed}</span>
            <span className="cursor">|</span>
          </p>

          {/* Tagline */}
          <p className="hero__desc">
            Motivated Software Engineer passionate about building scalable,
            efficient solutions. Specializing in Hospital Information Systems,
            ERP implementations, and full-stack web development.
          </p>

          {/* CTAs */}
          <div className="hero__btns">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__media-glow" aria-hidden="true" />
          <div className="hero__photo-card">
            <div className="hero__photo-ring" aria-hidden="true" />
            <img
              src="/profile.png"
              alt={`${personalInfo.name} profile`}
              className="hero__photo"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>scroll down</span>
        <span className="hero__scroll-arrow">↓</span>
      </div>
    </section>
  );
}
