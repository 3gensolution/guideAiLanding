import { useScrollReveal } from '../hooks/useScrollReveal'
import { useWaitlist } from '../context/WaitlistContext'
import styles from './LandingPage.module.scss'

const WHAT_WE_DO = [
  {
    title: 'Analyze product usage',
    description:
      'See how users and employees interact with the product, where they drop off, and which features they ignore.',
  },
  {
    title: 'Identify friction points',
    description:
      'Track clicks, drop-offs, dead ends, repeated errors, and the moments where people need help.',
  },
  {
    title: 'Guide people with AI',
    description:
      'Deliver onboarding, walkthroughs, and contextual in-app assistance when people need it most.',
  },
]

const WHY_IT_MATTERS = [
  { value: 'Product visibility', label: 'Understand how people really use the product' },
  { value: 'Faster adoption', label: 'Help customers and employees reach value sooner' },
  { value: 'Better decisions', label: 'Prioritize changes with real behavior evidence' },
]

const USE_CASES = [
  'Onboarding customers into a complex product',
  'Helping employees learn internal tools faster',
  'Driving adoption of key product features',
  'Supporting users with in-app guidance and help',
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
            <img
              src="/guide-logo.jpeg"
              alt="GuideAI"
              className={styles.brandLogo}
            />
            <span className={styles.brandName}>GuideAI</span>
          </button>

          <nav className={styles.navLinks} aria-label="Landing sections">
            <a href="#what-we-do">What we do</a>
            <a href="#why-it-matters">Why it matters</a>
            <a href="#use-cases">Use cases</a>
          </nav>

          <button type="button" className={styles.navButton} onClick={openWaitlist}>
            Contact us
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
                  Product analysis and digital adoption
                </span>
                <h1 className={`${styles.title} reveal-item`}>
                  Know what users do. Help them do it better.
                </h1>
                <p className={`${styles.subtitle} reveal-item`}>
                  GuideAI helps teams see where people get stuck and delivers contextual guidance when they need it.
                </p>

                <div className={`${styles.actions} reveal-item`}>
                  <button
                    type="button"
                    className={styles.primaryAction}
                    onClick={openWaitlist}
                  >
                    Contact us
                    <ArrowIcon />
                  </button>
                  <a href="#use-cases" className={styles.secondaryAction}>
                    See use cases
                  </a>
                </div>

                <div className={`${styles.heroStats} reveal-item`}>
                  <div>
                    <strong>Analysis</strong>
                    <span>See usage patterns, drop-offs, and ignored features</span>
                  </div>
                  <div>
                    <strong>Adoption</strong>
                    <span>Help customers and employees learn inside the product</span>
                  </div>
                </div>
              </div>

              <aside className={`${styles.heroPanel} reveal-item`} aria-label="Product adoption snapshot">
                <div className={styles.panelHeader}>
                  <span>Adoption snapshot</span>
                  <span className={styles.panelBadge}>Live</span>
                </div>

                <div className={styles.panelMetric}>
                  <strong>Usage analysis</strong>
                  <span>Shows where users and employees get stuck in the flow</span>
                </div>

                <div className={styles.panelMetric}>
                  <strong>AI onboarding</strong>
                  <span>Delivers walkthroughs and contextual help inside the product</span>
                </div>

                <div className={styles.panelMetric}>
                  <strong>Digital adoption</strong>
                  <span>Helps teams improve adoption for both customers and employees</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section ref={whatRef} className={styles.section} id="what-we-do">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="section-label reveal-item">What we do</span>
              <h2 className="section-title reveal-item">A product analysis layer that also guides users in the product.</h2>
              <p className="section-subtitle reveal-item">
                GuideAI sits inside your product, helps people move forward, and turns those
                interactions into evidence that improves adoption.
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
              <h2 className="section-title reveal-item">Teams do better work when the product shows where people struggle and how to help them.</h2>
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
                  <li>Usage analysis for users and employees</li>
                  <li>Friction signals around drop-off and dead ends</li>
                  <li>Evidence to improve onboarding, adoption, and support</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section ref={useCasesRef} className={styles.section} id="use-cases">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="section-label reveal-item">Use cases</span>
              <h2 className="section-title reveal-item">Built for onboarding, adoption, and in-app assistance.</h2>
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
                GuideAI helps teams analyze product usage, identify friction points, and onboard
                both customers and employees with AI-guided in-app support.
              </p>
              <button
                type="button"
                className={styles.primaryAction}
                onClick={openWaitlist}
              >
                Contact us
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
