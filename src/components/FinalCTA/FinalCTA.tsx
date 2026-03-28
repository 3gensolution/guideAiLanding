import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './FinalCTA.module.scss';

function FinalCTA() {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.14 });

  return (
    <section ref={sectionRef} className={styles.finalCta} id="final-cta">
      {/* Animated gradient overlay */}
      <div className={styles.gradientBg} aria-hidden="true" />

      <div className={styles.container}>
        <h2 className={`${styles.heading} reveal-item`}>
          Turn your product into a self-service experience.
        </h2>

        <p className={`${styles.subtitle} reveal-item`}>
          Be the first to experience AI-powered product adoption.
        </p>

        <div className={`${styles.ctaGroup} reveal-item`}>
          <a href="#waitlist" className={styles.ctaPrimary}>
            Join the Waitlist
          </a>
          <a href="#demo" className={styles.ctaGhost}>
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
