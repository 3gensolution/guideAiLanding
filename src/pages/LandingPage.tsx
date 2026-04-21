import { useScrollReveal } from '../hooks/useScrollReveal'
import { useWaitlist } from '../context/WaitlistContext'
import styles from './LandingPage.module.scss'

const WHAT_WE_DO = [
  {
    title: 'Guide users in the flow of work',
    description:
      'Deliver contextual prompts, walkthroughs, and nudges exactly when users need help inside the product.',
  },
  {
    title: 'Capture behavior and friction',
    description:
      'Track the moments that matter: clicks, drop-offs, dead ends, repeated errors, and guide completion.',
  },
  {
    title: 'Give businesses evidence to act on',
    description:
      'Turn user behavior into a clear picture of what is working, what is confusing, and what should change next.',
  },
]

const WHY_IT_MATTERS = [
  { value: 'Faster activation', label: 'Help new users reach value sooner' },
  { value: 'Lower support load', label: 'Reduce repetitive “how do I” questions' },
  { value: 'Better product decisions', label: 'Prioritize with real usage evidence' },
]

const USE_CASES = [
  'Onboarding new users into a complex workflow',
  'Driving adoption of high-value features',
  'Supporting users without leaving the product',
  'Helping businesses find the highest-friction paths',
]

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3 9h12M10 4l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LandingPage() {
  const { openWaitlist } = useWaitlist()
  const heroRef = useScrollReveal<HTMLElement>({ stagger: 0.12 })
  const whatRef = useScrollReveal<HTMLElement>({ stagger: 0.1 })
  const whyRef = useScrollReveal<HTMLElement>({ stagger: 0.1 })
  const useCasesRef = useScrollReveal<HTMLElement>({ stagger: 0.1 })
  const ctaRef = useScrollReveal<HTMLElement>({ stagger: 0.1 })

  return (
    <div className={styles.page}>
      <header className={styles.navbar}>
        <div className={styles.container}>
          <button type="button" className={styles.brand} onClick={openWaitlist}>
            <span className={styles.brandMark} aria-hidden="true" />
            <span className={styles.brandName}>GuideAI</span>
          </button>

          <nav className={styles.navLinks} aria-label="Landing sections">
            <a href="#what-we-do">What we do</a>
            <a href="#why-it-matters">Why it matters</a>
            <a href="#use-cases">Use cases</a>
          </nav>

          <button type="button" className={styles.navButton} onClick={openWaitlist}>
            Join waitlist
          </button>
        </div>
      </header>

      <main>
        <section ref={heroRef} className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={`${styles.kicker} reveal-item`}>
                  In-product guidance plus product intelligence
                </span>
                <h1 className={`${styles.title} reveal-item`}>
                  Help users succeed inside your product, then use the behavior data to improve it.
                </h1>
                <p className={`${styles.subtitle} reveal-item`}>
                  GuideAI helps teams teach users at the right moment, capture friction as it
                  happens, and give businesses evidence they can trust when deciding what to build next.
                </p>

                <div className={`${styles.actions} reveal-item`}>
                  <button
                    type="button"
                    className={styles.primaryAction}
                    onClick={openWaitlist}
                  >
                    Join waitlist
                    <ArrowIcon />
                  </button>
                  <a href="#use-cases" className={styles.secondaryAction}>
                    See use cases
                  </a>
                </div>

                <div className={`${styles.heroStats} reveal-item`}>
                  <div>
                    <strong>Guidance</strong>
                    <span>Right moment, right user, right workflow</span>
                  </div>
                  <div>
                    <strong>Insights</strong>
                    <span>Behavior, friction, and adoption signals</span>
                  </div>
                </div>
              </div>

              <aside className={`${styles.heroPanel} reveal-item`} aria-label="Product intelligence snapshot">
                <div className={styles.panelHeader}>
                  <span>Product intelligence snapshot</span>
                  <span className={styles.panelBadge}>Live</span>
                </div>

                <div className={styles.panelMetric}>
                  <strong>Activation rate</strong>
                  <span>Up 18% after onboarding guide launch</span>
                </div>

                <div className={styles.panelMetric}>
                  <strong>Top friction point</strong>
                  <span>Users stall at workspace setup and invite flow</span>
                </div>

                <div className={styles.panelMetric}>
                  <strong>Business insight</strong>
                  <span>Most drop-off happens before the first value moment</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section ref={whatRef} className={styles.section} id="what-we-do">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="section-label reveal-item">What we do</span>
              <h2 className="section-title reveal-item">A product guidance layer that also learns from every interaction.</h2>
              <p className="section-subtitle reveal-item">
                GuideAI sits inside your product, helps people move forward, and turns those
                interactions into evidence for business teams.
              </p>
            </div>

            <div className={styles.cardGrid}>
              {WHAT_WE_DO.map((item) => (
                <article key={item.title} className={`${styles.card} reveal-item`}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={whyRef} className={styles.sectionAlt} id="why-it-matters">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="section-label reveal-item">Why it matters</span>
              <h2 className="section-title reveal-item">Teams do better work when the product shows them where users struggle.</h2>
            </div>

            <div className={styles.matterGrid}>
              <div className={styles.metricList}>
                {WHY_IT_MATTERS.map((metric) => (
                  <article key={metric.value} className={`${styles.metricCard} reveal-item`}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>

              <aside className={`${styles.insightPanel} reveal-item`}>
                <h3>What businesses get</h3>
                <ul>
                  <li>Behavioral signals around drop-off and dead ends</li>
                  <li>Guide completion and abandonment trends</li>
                  <li>Evidence to prioritize UX and workflow fixes</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section ref={useCasesRef} className={styles.section} id="use-cases">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="section-label reveal-item">Use cases</span>
              <h2 className="section-title reveal-item">Built for onboarding, adoption, and support.</h2>
            </div>

            <div className={styles.useCaseGrid}>
              {USE_CASES.map((useCase, index) => (
                <article key={useCase} className={`${styles.useCaseCard} reveal-item`}>
                  <span className={styles.useCaseIndex}>0{index + 1}</span>
                  <p>{useCase}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={ctaRef} className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaPanel}>
              <h2>Give users help in the moment and businesses the evidence to improve the product.</h2>
              <p>
                GuideAI is for businesses that want fewer support tickets, better adoption, and a clearer
                view of where users get stuck.
              </p>
              <button
                type="button"
                className={styles.primaryAction}
                onClick={openWaitlist}
              >
                Join waitlist
                <ArrowIcon />
              </button>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <p>Copyright 3gensolution {new Date().getFullYear()}</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default LandingPage
