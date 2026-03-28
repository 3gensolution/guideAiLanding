import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './FeaturePillars.module.scss';

const FEATURES = [
  {
    key: 'ai-agent',
    title: 'AI Support Agent',
    description:
      'Helps users like a human agent, by understanding real-time context from live user sessions and offering intelligent, contextual help to any user journey.',
    accentColor: '#7C3AED',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Head / helmet */}
        <rect x="8" y="4" width="16" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
        {/* Eyes */}
        <circle cx="12.5" cy="12" r="1.5" fill="currentColor" />
        <circle cx="19.5" cy="12" r="1.5" fill="currentColor" />
        {/* Antenna */}
        <line x1="16" y1="4" x2="16" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="0.5" r="1" fill="currentColor" />
        {/* Body */}
        <path d="M10 18v3a2 2 0 002 2h8a2 2 0 002-2v-3" stroke="currentColor" strokeWidth="2" />
        {/* Signal waves */}
        <path d="M5 8a6 6 0 010 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" className={styles.signalLeft} />
        <path d="M27 8a6 6 0 000 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" className={styles.signalRight} />
        {/* Arms */}
        <path d="M8 20H6a1 1 0 00-1 1v4a1 1 0 001 1h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 20h2a1 1 0 011 1v4a1 1 0 01-1 1h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'interactive-guides',
    title: 'Interactive Guides',
    description:
      'Multi-step, multi-format UI tips that deliver step-by-step guided walkthroughs with intelligent decision trees across your application.',
    accentColor: '#EC4899',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Map / guide book */}
        <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
        {/* Center fold */}
        <line x1="16" y1="4" x2="16" y2="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        {/* Route path */}
        <path d="M9 10l3 4-3 4 3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Waypoints */}
        <circle cx="22" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
        {/* Connection line */}
        <line x1="22" y1="12" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Destination marker */}
        <path d="M22 22l-2 4h4l-2-4z" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    key: 'deep-analytics',
    title: 'Deep Analytics',
    description:
      'Behavioral data showing users\u2019 interactions through their entire session. Each interaction is tracked, each pattern captured.',
    accentColor: '#10B981',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Chart background */}
        <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
        {/* Axis lines */}
        <line x1="8" y1="24" x2="8" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="24" x2="26" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Chart line (the animated one) */}
        <polyline
          points="8,20 13,16 17,18 21,11 26,9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={styles.chartLine}
        />
        {/* Data dots */}
        <circle cx="13" cy="16" r="1.5" fill="currentColor" className={styles.chartDot} />
        <circle cx="17" cy="18" r="1.5" fill="currentColor" className={styles.chartDot} />
        <circle cx="21" cy="11" r="1.5" fill="currentColor" className={styles.chartDot} />
        <circle cx="26" cy="9" r="1.5" fill="currentColor" className={styles.chartDot} />
      </svg>
    ),
  },
  {
    key: 'ai-workflows',
    title: 'AI Workflows',
    description:
      'No-code automation agent for building custom interaction pipelines within your UI with multi-step logic patterns.',
    accentColor: '#F59E0B',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top node */}
        <rect x="11" y="2" width="10" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
        {/* Left node */}
        <rect x="2" y="22" width="10" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
        {/* Right node */}
        <rect x="20" y="22" width="10" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
        {/* Center diamond (decision) */}
        <path d="M16 12l4 4-4 4-4-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        {/* Connection: top node to diamond */}
        <line x1="16" y1="9" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={styles.connectorLine} />
        {/* Connection: diamond to left node */}
        <path d="M12 16L7 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={styles.connectorLine} />
        {/* Connection: diamond to right node */}
        <path d="M20 16l5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={styles.connectorLine} />
        {/* Small indicator dots on connectors */}
        <circle cx="16" cy="10.5" r="1" fill="currentColor" className={styles.flowDot} style={{ '--dot-delay': '0s' } as React.CSSProperties} />
        <circle cx="9.5" cy="19" r="1" fill="currentColor" className={styles.flowDot} style={{ '--dot-delay': '0.3s' } as React.CSSProperties} />
        <circle cx="22.5" cy="19" r="1" fill="currentColor" className={styles.flowDot} style={{ '--dot-delay': '0.6s' } as React.CSSProperties} />
      </svg>
    ),
  },
] as const;

function FeaturePillars() {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.12 });

  return (
    <section ref={sectionRef} className={styles.section} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.label} reveal-item`}>Core Capabilities</span>
          <h2 className={`${styles.heading} reveal-item`}>
            Everything you need to <span className={styles.headingAccent}>guide users</span>
          </h2>
          <p className={`${styles.subheading} reveal-item`}>
            Four foundational pillars that power the complete product adoption lifecycle, from first
            touch to power-user proficiency.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <article
              key={feature.key}
              className={`${styles.card} ${styles[feature.key]} reveal-item`}
              style={{ '--accent': feature.accentColor } as React.CSSProperties}
            >
              <div className={styles.cardAccent} aria-hidden="true" />
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturePillars;
