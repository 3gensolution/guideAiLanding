import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useWaitlist } from '../context/WaitlistContext'
import styles from './LandingPage.module.scss'

const FAQ_ITEMS = [
  {
    question: 'Do you support in-app guides?',
    answer: 'Yes. Build and publish guides to help users complete key flows and reach activation.',
  },
  {
    question: 'Can we measure impact?',
    answer: 'Yes. Track completion and adoption to understand which guidance changes outcomes.',
  },
  {
    question: 'What do we need to get started?',
    answer: 'Install the GuideAI SDK and define the events that represent activation for your product.',
  },
] as const

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const heroRef = useScrollReveal<HTMLElement>({ stagger: 0.08 })
  const logosRef = useScrollReveal<HTMLElement>({ stagger: 0.06 })
  const productRef = useScrollReveal<HTMLElement>({ stagger: 0.06 })
  const teamsRef = useScrollReveal<HTMLElement>({ stagger: 0.06 })
  const howRef = useScrollReveal<HTMLElement>({ stagger: 0.06 })
  const faqRef = useScrollReveal<HTMLElement>({ stagger: 0.06 })
  const ctaRef = useScrollReveal<HTMLElement>({ stagger: 0.06 })

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>

      <header className={styles.siteHeader}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a className={styles.brand} href="#">
            <span className={styles.brandMark} aria-hidden="true">
              <img src="/guide-logo.jpeg" alt="" />
            </span>
            <span className={styles.brandName}>GuideAI</span>
          </a>

          <nav className={styles.nav} aria-label="Primary">
            <a href="#product">What we do</a>
            <a href="#teams">Teams</a>
            <a href="#how">How it works</a>
            <a href="#early-access">Early access</a>
          </nav>

          <div className={styles.headerCta}>
            <button type="button" className={`${styles.link} ${styles.subtle}`} onClick={openWaitlist}>
              Contact
            </button>
            <a className={`${styles.btn} ${styles.primary}`} href="#early-access">
              Request Early Access
              <ArrowIcon />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section ref={heroRef} className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={`${styles.heroCopy} ${styles.heroCentered}`}>
                <p className={`${styles.pill} reveal-item`}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>We are live. Early access is open.</span>
                </p>

                <h1 className="reveal-item">Understand friction. Ship guidance. Measure activation.</h1>

                <p className={`${styles.lede} reveal-item`}>
                  GuideAI gives product teams visibility into where users struggle, plus the tools to fix it with in-app
                  guides, workflows, and announcements, backed by analytics so you can prove what’s working.
                </p>

                <div className={`${styles.heroActions} reveal-item`}>
                  <a className={`${styles.btn} ${styles.primary}`} href="#early-access">
                    Request Early Access
                    <ArrowIcon />
                  </a>
                  <a className={`${styles.btn} ${styles.secondary}`} href="#product">
                    See the product
                  </a>
                </div>

                <div className={`${styles.heroMetrics} reveal-item`} role="list" aria-label="Key outcomes">
                  <div className={styles.metric} role="listitem">
                    <div className={styles.metricValue}>Faster</div>
                    <div className={styles.metricLabel}>Time-to-value with targeted guidance</div>
                  </div>
                  <div className={styles.metric} role="listitem">
                    <div className={styles.metricValue}>Fewer</div>
                    <div className={styles.metricLabel}>Support escalations from self-serve help</div>
                  </div>
                  <div className={styles.metric} role="listitem">
                    <div className={styles.metricValue}>Clear</div>
                    <div className={styles.metricLabel}>Visibility into friction and drop-offs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={logosRef} className={styles.logos} aria-label="Who this is for">
          <div className={styles.container}>
            <p className={`${styles.eyebrow} reveal-item`}>Built for teams who own activation</p>
            <div className={`${styles.logoRow} reveal-item`} role="list">
              <div className={styles.logo} role="listitem">
                Product
              </div>
              <div className={styles.logo} role="listitem">
                Growth
              </div>
              <div className={styles.logo} role="listitem">
                Support
              </div>
              <div className={styles.logo} role="listitem">
                Success
              </div>
              <div className={styles.logo} role="listitem">
                RevOps
              </div>
            </div>
          </div>
        </section>

        <section ref={productRef} id="product" className={styles.section}>
          <div className={styles.container}>
            <header className={`${styles.sectionHead} reveal-item`}>
              <h2>What we do</h2>
              <p>
                GuideAI connects the dots between what users do, where they struggle, and what to ship next, then helps
                you deliver guidance inside the product.
              </p>
            </header>

            <div className={styles.grid3}>
              <article className={`${styles.card} ${styles.whatCard} reveal-item`}>
                <h3>Find friction fast</h3>
                <p>Spot drop-offs, confusion, and repeated loops across sessions and funnels, without guessing.</p>
              </article>
              <article className={`${styles.card} ${styles.whatCard} reveal-item`}>
                <h3>Fix it with in-app guidance</h3>
                <p>Publish guides, announcements, and contextual help directly in the UI so users don’t get stuck.</p>
              </article>
              <article className={`${styles.card} ${styles.whatCard} reveal-item`}>
                <h3>Prove impact</h3>
                <p>Measure completion and adoption so you know what moves activation, and what to iterate.</p>
              </article>
            </div>

            <div className={styles.featureSplit}>
              <div className={`${styles.splitCopy} reveal-item`}>
                <h3>Everything in one loop</h3>
                <p>
                  Capture insight → ship guidance → measure outcomes. GuideAI is designed to help you iterate quickly and
                  keep onboarding aligned with the product as it changes.
                </p>
                <ul className={styles.checklist}>
                  <li>Sessions and timelines to understand real user journeys</li>
                  <li>Funnels and retention to see where users drop</li>
                  <li>Guides and announcements to deliver in-app guidance</li>
                  <li>Workflows to standardize and automate repetitive steps</li>
                </ul>
              </div>
              <div className={`${styles.splitCard} reveal-item`}>
                <div className={styles.miniGrid}>
                  <div className={styles.mini}>
                    <div className={styles.miniTitle}>Sessions</div>
                    <div className={styles.miniDesc}>See what users did, step-by-step.</div>
                  </div>
                  <div className={styles.mini}>
                    <div className={styles.miniTitle}>Funnels</div>
                    <div className={styles.miniDesc}>Find where activation breaks.</div>
                  </div>
                  <div className={styles.mini}>
                    <div className={styles.miniTitle}>Guides</div>
                    <div className={styles.miniDesc}>Ship contextual help in the UI.</div>
                  </div>
                  <div className={styles.mini}>
                    <div className={styles.miniTitle}>Workflows</div>
                    <div className={styles.miniDesc}>Standardize and automate steps.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={teamsRef} id="teams" className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <header className={`${styles.sectionHead} reveal-item`}>
              <h2>Where teams use GuideAI</h2>
              <p>Common ways product teams turn insight into action across the customer journey.</p>
            </header>

            <div className={styles.grid2}>
              <article className={`${styles.card} reveal-item`}>
                <h3>Onboarding and activation</h3>
                <p>See where users stall, then add guides that move them to first value.</p>
              </article>
              <article className={`${styles.card} reveal-item`}>
                <h3>Feature adoption</h3>
                <p>Launch a feature, guide users to it, and measure adoption from day one.</p>
              </article>
              <article className={`${styles.card} reveal-item`}>
                <h3>Self-serve support</h3>
                <p>Reduce “how do I…” tickets with in-app guidance and contextual answers.</p>
              </article>
              <article className={`${styles.card} reveal-item`}>
                <h3>Success and renewal readiness</h3>
                <p>Understand usage patterns and intervene before accounts churn.</p>
              </article>
              <article className={`${styles.card} reveal-item`}>
                <h3>Enterprise rollouts</h3>
                <p>Standardize training across teams without requiring live sessions for every workflow.</p>
              </article>
              <article className={`${styles.card} reveal-item`}>
                <h3>Internal operations</h3>
                <p>Guide employees through internal tools and workflows to reduce back-and-forth.</p>
              </article>
            </div>
          </div>
        </section>

        <section ref={howRef} id="how" className={styles.section}>
          <div className={styles.container}>
            <header className={`${styles.sectionHead} reveal-item`}>
              <h2>How it works</h2>
              <p>From raw inputs to live execution, one continuous flow.</p>
            </header>

            <ol className={styles.timeline}>
              <li className="reveal-item">
                <div className={styles.timelineStep}>Step 01</div>
                <h3>Instrument</h3>
                <p>Connect the GuideAI SDK to capture the events and context that matter for activation.</p>
              </li>
              <li className="reveal-item">
                <div className={styles.timelineStep}>Step 02</div>
                <h3>Discover</h3>
                <p>Explore sessions, funnels, and drop-offs to find the highest-impact friction points.</p>
              </li>
              <li className="reveal-item">
                <div className={styles.timelineStep}>Step 03</div>
                <h3>Build</h3>
                <p>Create guides and workflows that match your product and your users’ intent.</p>
              </li>
              <li className="reveal-item">
                <div className={styles.timelineStep}>Step 04</div>
                <h3>Publish</h3>
                <p>Ship guidance in-product: walkthroughs, checklists, announcements, and contextual help.</p>
              </li>
              <li className="reveal-item">
                <div className={styles.timelineStep}>Step 05</div>
                <h3>Measure</h3>
                <p>Track completion and adoption so you can quantify impact and iterate quickly.</p>
              </li>
              <li className="reveal-item">
                <div className={styles.timelineStep}>Step 06</div>
                <h3>Iterate</h3>
                <p>Use new learnings to refine onboarding and keep guidance aligned with the product.</p>
              </li>
            </ol>
          </div>
        </section>

        <section ref={faqRef} id="faq" className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <header className={`${styles.sectionHead} reveal-item`}>
              <h2>FAQ</h2>
              <p>Quick answers for teams evaluating GuideAI.</p>
            </header>

            <div className={styles.accordion} aria-label="Frequently asked questions">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openFaqIndex === index
                const triggerId = `faq-trigger-${index}`
                const panelId = `faq-panel-${index}`

                return (
                  <div
                    key={item.question}
                    className={`${styles.accordionItem} reveal-item ${isOpen ? styles.open : ''}`}
                  >
                    <button
                      id={triggerId}
                      type="button"
                      className={styles.accordionButton}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    >
                      <span className={styles.accordionQuestion}>{item.question}</span>
                      <span className={styles.accordionIcon} aria-hidden="true" />
                    </button>

                    <div
                      id={panelId}
                      className={styles.accordionPanel}
                      role="region"
                      aria-labelledby={triggerId}
                      data-open={isOpen ? 'true' : 'false'}
                      aria-hidden={!isOpen}
                    >
                      <div className={styles.accordionPanelInner}>
                        <p className={styles.accordionAnswer}>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section ref={ctaRef} id="early-access" className={styles.cta}>
          <div className={styles.container}>
            <div className={`${styles.ctaInner} reveal-item`}>
              <div className={styles.ctaCopy}>
                <h2>Ready to ship guidance from real user journeys?</h2>
                <p>
                  Request early access and we’ll share timelines, onboarding, and what’s coming next. If you prefer
                  email, reach out directly.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <button type="button" className={`${styles.btn} ${styles.primary}`} onClick={openWaitlist}>
                  Talk to us
                  <ArrowIcon />
                </button>
                <a
                  className={`${styles.btn} ${styles.secondary}`}
                  href="mailto:hello@getguide.ai?subject=GuideAI%20Early%20Access"
                >
                  Email for early access
                </a>
                <p className={styles.fineprint}>No pricing on this page yet, focus is on outcomes, not tiers.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.siteFooter}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <div className={styles.footerBrand}>
            <div className={`${styles.brand} ${styles.small}`}>
              <span className={styles.brandMark} aria-hidden="true">
                <img src="/guide-logo.jpeg" alt="" />
              </span>
              <span className={styles.brandName}>GuideAI</span>
            </div>
            <p className={styles.muted}>AI-guided onboarding that helps users reach value faster.</p>
          </div>
          <div className={styles.footerLinks} aria-label="Footer">
            <a href="#product">Product</a>
            <a href="#teams">Teams</a>
            <a href="#how">How it works</a>
            <a href="#early-access">Early access</a>
          </div>
          <div className={styles.footerMeta}>
            <span className={styles.muted}>© {new Date().getFullYear()} GuideAI. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
