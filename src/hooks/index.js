// ============================================================
// hooks/useTypingEffect.js — Animated typing / deleting text
// ============================================================
import { useState, useEffect, useRef } from "react";

/**
 * Cycles through an array of strings with a typing animation.
 * @param {string[]} texts  – array of strings to cycle
 * @param {number}   speed  – ms per character while typing
 * @param {number}   pause  – ms to pause at full word before deleting
 * @returns {string} currently displayed text
 */
export function useTypingEffect(texts, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex]         = useState(0);
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const current = texts[index];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts, speed, pause]);

  return displayed;
}

// ============================================================
// hooks/useFadeIn.js — Intersection Observer fade-in
// ============================================================

/**
 * Returns a ref to attach to a DOM element that fades in when
 * it enters the viewport.
 */
export function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
