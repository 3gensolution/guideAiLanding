import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useWaitlist } from '../../context/WaitlistContext';
import styles from './Hero.module.scss';

function Hero() {
  const { openWaitlist } = useWaitlist();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.12 });
  const floatingRef = useRef<HTMLDivElement>(null);

  // Floating UI element gentle motion
  useEffect(() => {
    const el = floatingRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const floaters = el.querySelectorAll(`.${styles.floatingElement}`);

    floaters.forEach((floater, i) => {
      gsap.to(floater, {
        y: i % 2 === 0 ? -3 : 3,
        x: i % 2 === 0 ? 2 : -2,
        duration: 2.5 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => {
      floaters.forEach((floater) => gsap.killTweensOf(floater));
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero} id="hero">
      {/* Floating decorative elements */}
      <div ref={floatingRef} className={styles.floatingContainer} aria-hidden="true">
        <div className={`${styles.floatingElement} ${styles.floatTopLeft}`} />
        <div className={`${styles.floatingElement} ${styles.floatTopRight}`} />
        <div className={`${styles.floatingElement} ${styles.floatBottomLeft}`} />
      </div>

      <div className={styles.container}>
        {/* Section label */}
        <span className={`${styles.label} reveal-item`}>
          THE NEURAL ADOPTION PLATFORM
        </span>

        {/* Headline */}
        <h1 className={`${styles.headline} reveal-item`}>
          AI-Powered User Onboarding{' '}
          <span className={styles.headlineAccent}>for Modern Web Apps</span>
        </h1>

        {/* Subtitle */}
        <p className={`${styles.subtitle} reveal-item`}>
          Stop building tooltips that break. Drop a single script tag and let
          GuideAI&rsquo;s neural engine handle your entire product adoption journey
          autonomously.
        </p>

        {/* CTA Buttons */}
        <div className={`${styles.ctaGroup} reveal-item`}>
          <button type="button" className={styles.ctaPrimary} onClick={openWaitlist}>
            Join Waitlist <span aria-hidden="true">&rarr;</span>
          </button>
          <a href="#demo" className={styles.ctaGhost}>
            View Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
