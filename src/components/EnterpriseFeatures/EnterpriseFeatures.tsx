import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './EnterpriseFeatures.module.scss';

const FEATURES = [
  {
    key: 'auto-healing',
    title: 'Auto-Healing Guides',
    description:
      "Our AI constantly monitors your DOM. If a CSS selector changes, the guide automatically remaps itself without developer intervention.",
    visual: 'healing' as const,
  },
  {
    key: 'rage-click',
    title: 'Rage Click Detection',
    description:
      'Instantly detect when a user is frustrated. GuideAI proactively intervenes with a help prompt before the user closes the tab.',
    visual: 'rageClick' as const,
  },
  {
    key: 'workflow',
    title: 'Workflow Automation',
    description:
      'Convert complex multi-page processes into single-click automations. The AI executes the navigation and clicks on behalf of the user.',
    visual: 'workflow' as const,
  },
] as const;

function HealingVisual() {
  return (
    <div className={styles.healingVisual} aria-hidden="true">
      {[0.6, 0.85, 1, 0.75, 0.9].map((scale, i) => (
        <div
          key={i}
          className={styles.healBar}
          style={{
            '--bar-scale': scale,
            animationDelay: `${i * 0.15}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

function RageClickVisual() {
  return (
    <div className={styles.rageClickVisual} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div key={i} className={styles.rageClickDot} style={{ animationDelay: `${i * 0.25}s` }}>
          <div className={styles.rageClickGlow} />
        </div>
      ))}
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div className={styles.workflowVisual} aria-hidden="true">
      {[1, 0.85, 0.7].map((width, i) => (
        <div
          key={i}
          className={styles.workflowBar}
          style={{
            '--bar-width': width,
            animationDelay: `${i * 0.2}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

const VISUAL_MAP = {
  healing: HealingVisual,
  rageClick: RageClickVisual,
  workflow: WorkflowVisual,
} as const;

function EnterpriseFeatures() {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.12 });

  return (
    <section ref={sectionRef} className={styles.section} id="enterprise">
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} reveal-item`}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>Enterprise-grade capabilities.</h2>
            <p className={styles.subtitle}>
              Built for complex SPAs where traditional adoption tools fail.
            </p>
          </div>
          <div className={styles.badges}>
            <span className={styles.badge}>SOC2 Type II</span>
            <span className={styles.badge}>GDPR Ready</span>
          </div>
        </div>

        {/* Feature cards */}
        <div className={styles.grid}>
          {FEATURES.map((feature) => {
            const VisualComponent = VISUAL_MAP[feature.visual];
            return (
              <div key={feature.key} className={`${styles.card} reveal-item`}>
                <div className={styles.cardVisual}>
                  <VisualComponent />
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EnterpriseFeatures;
