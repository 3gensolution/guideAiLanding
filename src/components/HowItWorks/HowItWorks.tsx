import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useWaitlist } from '../../context/WaitlistContext';
import styles from './HowItWorks.module.scss';

const CODE_SNIPPET = `<script>
  window.GuideAI = { id: "gai_8291_prod" };
  (function(){/* SDK Load */})();
</script>`;

function HowItWorks() {
  const { openWaitlist } = useWaitlist();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.15 });

  return (
    <section ref={sectionRef} className={styles.section} id="how-it-works">
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <h2 className={`${styles.title} reveal-item`}>
            Onboarding in three clicks.
          </h2>
          <p className={`${styles.subtitle} reveal-item`}>
            No engineering ticket required after the first script tag.
          </p>
        </div>

        {/* Top row: Step 1 + Step 2 side by side */}
        <div className={styles.topRow}>
          {/* Step 1 - Install GuideAI */}
          <div className={`${styles.card} reveal-item`}>
            <div className={styles.cardContent}>
              <span className={styles.stepBadge}>STEP 1</span>
              <h3 className={styles.stepTitle}>Install GuideAI</h3>
              <p className={styles.stepDescription}>
                Just add our ultra-lightweight script to your{' '}
                <code className={styles.inlineCode}>&lt;head&gt;</code> tag.
                That&rsquo;s it.
              </p>
            </div>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className={styles.codeDot} />
                <span className={styles.codeDot} />
                <span className={styles.codeDot} />
              </div>
              <pre className={styles.codeContent}>
                <code>{CODE_SNIPPET}</code>
              </pre>
            </div>
          </div>

          {/* Step 2 - Scan your product */}
          <div className={`${styles.card} reveal-item`}>
            <div className={styles.cardContent}>
              <span className={styles.stepBadge}>STEP 2</span>
              <h3 className={styles.stepTitle}>Scan your product</h3>
              <p className={styles.stepDescription}>
                Our Chrome extension maps your UI components using AI computer vision.
              </p>
            </div>
            <div className={styles.scanVisual}>
              <div className={styles.scanBox}>
                <svg
                  className={styles.scanIcon}
                  viewBox="0 0 64 64"
                  fill="none"
                  aria-hidden="true"
                >
                  {/* Corner brackets */}
                  <path d="M8 20V8h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M44 8h12v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M56 44v12H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 56H8V44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Center viewfinder */}
                  <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" />
                  <circle cx="32" cy="32" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 - Full width purple gradient card */}
        <div className={`${styles.step3Card} reveal-item`}>
          <div className={styles.step3Content}>
            <span className={styles.step3Badge}>STEP 3</span>
            <h3 className={styles.step3Title}>AI helps users automatically</h3>
            <p className={styles.step3Description}>
              Based on your UI structure, GuideAI generates semantic guides
              that understand context. If a button moves, the guide heals itself.
            </p>
            <button type="button" className={styles.step3Button} onClick={openWaitlist}>
              Contact Us
            </button>
          </div>
          <div className={styles.step3Visual} aria-hidden="true">
            {/* Neural network / constellation visual */}
            <svg className={styles.networkSvg} viewBox="0 0 400 300" fill="none">
              {/* Connection lines */}
              <line x1="80" y1="60" x2="200" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className={styles.netLine} />
              <line x1="80" y1="60" x2="140" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1" className={styles.netLine} />
              <line x1="200" y1="120" x2="320" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className={styles.netLine} />
              <line x1="200" y1="120" x2="260" y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1" className={styles.netLine} />
              <line x1="200" y1="120" x2="140" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className={styles.netLine} />
              <line x1="320" y1="80" x2="360" y2="200" stroke="rgba(255,255,255,0.15)" strokeWidth="1" className={styles.netLine} />
              <line x1="320" y1="80" x2="260" y2="220" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className={styles.netLine} />
              <line x1="140" y1="180" x2="260" y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1" className={styles.netLine} />
              <line x1="260" y1="220" x2="360" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" className={styles.netLine} />
              <line x1="140" y1="180" x2="60" y2="240" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className={styles.netLine} />
              <line x1="260" y1="220" x2="180" y2="270" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className={styles.netLine} />
              <line x1="360" y1="200" x2="380" y2="260" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className={styles.netLine} />

              {/* Nodes */}
              <circle cx="80" cy="60" r="5" fill="rgba(255,255,255,0.7)" className={styles.netNode} />
              <circle cx="200" cy="120" r="7" fill="rgba(255,255,255,0.9)" className={styles.netNode} />
              <circle cx="320" cy="80" r="5" fill="rgba(255,255,255,0.7)" className={styles.netNode} />
              <circle cx="140" cy="180" r="4" fill="rgba(255,255,255,0.6)" className={styles.netNode} />
              <circle cx="260" cy="220" r="6" fill="rgba(255,255,255,0.8)" className={styles.netNode} />
              <circle cx="360" cy="200" r="4" fill="rgba(255,255,255,0.6)" className={styles.netNode} />
              <circle cx="60" cy="240" r="3" fill="rgba(255,255,255,0.4)" className={styles.netNode} />
              <circle cx="180" cy="270" r="3" fill="rgba(255,255,255,0.4)" className={styles.netNode} />
              <circle cx="380" cy="260" r="3" fill="rgba(255,255,255,0.4)" className={styles.netNode} />

              {/* Glow highlights */}
              <circle cx="200" cy="120" r="20" fill="rgba(255,255,255,0.06)" className={styles.netGlow} />
              <circle cx="260" cy="220" r="16" fill="rgba(255,255,255,0.05)" className={styles.netGlow} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
