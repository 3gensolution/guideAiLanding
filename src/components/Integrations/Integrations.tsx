import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Integrations.module.scss';

const INTEGRATIONS = [
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="4.5" fill="currentColor" />
        <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(120 24 24)" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: '#000000',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
        <path d="M18 14V34L34 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M32 14V34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Vue',
    color: '#42B883',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M29.5 6H38L24 42L10 6H18.5L24 17L29.5 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M18.5 6L24 17L29.5 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: 'Angular',
    color: '#DD0031',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 4L6 12L9 36L24 44L39 36L42 12L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M24 8L24 40" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <path d="M16 28H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 10L18 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 10L30 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Slack',
    color: '#E01E5A',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="11" y="18" width="9" height="4" rx="2" fill="currentColor" />
        <rect x="18" y="11" width="4" height="11" rx="2" fill="currentColor" />
        <circle cx="13" cy="13" r="2.5" fill="currentColor" opacity="0.6" />
        <rect x="28" y="11" width="9" height="4" rx="2" fill="currentColor" />
        <rect x="26" y="11" width="4" height="11" rx="2" fill="currentColor" />
        <circle cx="35" cy="13" r="2.5" fill="currentColor" opacity="0.6" />
        <rect x="11" y="26" width="4" height="11" rx="2" fill="currentColor" />
        <rect x="11" y="26" width="11" height="4" rx="2" fill="currentColor" />
        <circle cx="13" cy="35" r="2.5" fill="currentColor" opacity="0.6" />
        <rect x="26" y="26" width="11" height="4" rx="2" fill="currentColor" />
        <rect x="26" y="26" width="4" height="11" rx="2" fill="currentColor" />
        <circle cx="35" cy="35" r="2.5" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
] as const;

// Duplicate items for seamless carousel looping
const CAROUSEL_ITEMS = [...INTEGRATIONS, ...INTEGRATIONS];

function Integrations() {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.1 });
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
    },
    [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section ref={sectionRef} className={styles.section} id="integrations">
      <div className={styles.container}>
        <div className={`${styles.textCol} reveal-item`}>
          <h2 className={styles.title}>Integrates with your stack.</h2>
          <p className={styles.subtitle}>
            GuideAI works with any framework. Zero dependencies, maximum performance.
          </p>
        </div>

        <div className={styles.carouselCol}>
          <div className={styles.carouselWrapper}>
            <div className={styles.carousel} ref={emblaRef}>
              <div className={styles.carouselTrack}>
                {CAROUSEL_ITEMS.map((integration, index) => (
                  <div
                    key={`${integration.name}-${index}`}
                    className={styles.carouselSlide}
                    style={{ '--integration-color': integration.color } as React.CSSProperties}
                  >
                    <div className={styles.iconWrapper}>{integration.icon}</div>
                    <span className={styles.label}>{integration.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Fade edges */}
            <div className={styles.fadeBefore} aria-hidden="true" />
            <div className={styles.fadeAfter} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integrations;
