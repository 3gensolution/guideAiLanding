import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useWaitlist } from '../context/WaitlistContext'
import styles from './V2LandingPage.module.scss'

type V2LandingPageProps = {
  onNavigate: (path: string) => void
}

const SOLUTION_PILLARS = [
  {
    title: 'Discover friction',
    description: 'Spot drop-offs, dead ends, and repeated struggles across real user journeys.',
  },
  {
    title: 'Create guides instantly',
    description: 'Turn a workflow into in-app guidance, walkthroughs, and step-by-step help.',
  },
  {
    title: 'Automate with Copilot',
    description: 'Let users complete repetitive actions without leaving the product.',
  },
  {
    title: 'Repurpose into video',
    description: 'Convert workflows into reusable training videos for teams and customers.',
  },
  {
    title: 'Deliver in-app help',
    description: 'Show contextual support exactly where users slow down or get stuck.',
  },
  {
    title: 'Optimize continuously',
    description: 'Keep improving based on usage patterns, completion, and friction signals.',
  },
] as const

const USE_CASE_TABS = ['Onboarding', 'Adoption', 'Support'] as const

const USE_CASES = [
  {
    title: 'User Onboarding',
    eyebrow: 'Faster time to value',
    summary:
      'First impressions matter. Deliver a white-glove experience to every new signup without a single human interaction.',
    stats: ['Checklist prompts', 'Step guidance', 'Activation lift'],
    panelLabel: 'ONBOARDING FLOW',
    outcome: '"Our activation rate spiked by 42% in the first week of using GuideAI."',
    visualKind: 'onboarding' as const,
  },
  {
    title: 'Feature Adoption',
    eyebrow: 'Drive feature usage',
    summary:
      'Announce updates contextually and show users the value of the latest release while they are already in the product.',
    stats: ['Launch nudges', 'Context prompts', 'Higher adoption'],
    panelLabel: 'ADOPTION FLOW',
    outcome: '"Feature use doubled after we started showing guides in the workflow."',
    visualKind: 'adoption' as const,
  },
  {
    title: 'Support Deflection',
    eyebrow: 'Reduce repetitive tickets',
    summary:
      'Intercept common how-to questions before they become tickets, saving your team thousands of hours.',
    stats: ['Inline answers', 'Fewer tickets', 'Faster resolution'],
    panelLabel: 'SUPPORT FLOW',
    outcome: '"Support requests dropped once users could self-serve inside the app."',
    visualKind: 'support' as const,
  },
] as const

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: ['Copilot', 'Guides', 'Video', 'Analytics'],
  },
  {
    heading: 'Company',
    links: ['About', 'Contact', 'Pilot', 'Security'],
  },
  {
    heading: 'Resources',
    links: ['Use cases', 'Docs', 'Demo', 'Updates'],
  },
] as const

const BEFORE_AFTER = {
  before: [
    'Manual tours that break when the UI changes',
    'Static onboarding that is not tied to user behavior',
    'Support-heavy workflows with repeated questions',
  ],
  after: [
    'Auto-generated guides that follow the real workflow',
    'Self-healing flows that keep working as the product changes',
    'AI-assisted users who complete tasks faster',
  ],
} as const

const METRICS = [
  {
    value: '80%',
    label: 'FASTER GUIDE CREATION',
    description: 'Replace manual coding with AI capture.',
  },
  {
    value: '40%',
    label: 'HIGHER COMPLETION',
    description: 'Users actually finish what they start.',
  },
  {
    value: '30%',
    label: 'FEWER TICKETS',
    description: 'Automate support before it happens.',
  },
] as const

function LogoMark() {
  return (
    <img src="/guide-logo.jpeg" alt="" className={styles.logoImage} aria-hidden="true" />
  )
}

function BrowserCopilotVisual() {
  return (
    <div className={styles.visualBrowser} aria-hidden="true">
      <div className={styles.browserBar}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.browserUrl}>app.guideai.io/workflows/invite</div>
      <div className={styles.browserBody}>
        <div className={styles.formStack}>
          <div className={styles.formLine} />
          <div className={styles.formLineShort} />
          <div className={styles.formButton}>Continue</div>
        </div>
        <div className={styles.copilotBubble}>
          Copilot suggests the next step
        </div>
        <div className={styles.cursorDot} />
      </div>
    </div>
  )
}

function GuideVisual() {
  return (
    <div className={styles.visualGuide} aria-hidden="true">
      <div className={styles.guideHighlight} />
      <div className={styles.guideCard}>
        <span className={styles.guidePill}>Step 2 of 4</span>
        <p>Click "Create workspace"</p>
      </div>
      <div className={styles.guideTooltip}>GuideAI keeps users on track</div>
    </div>
  )
}

function VideoVisual() {
  return (
    <div className={styles.visualVideo} aria-hidden="true">
      <div className={styles.videoScreen}>
        <div className={styles.playButton} />
      </div>
      <div className={styles.videoTimeline}>
        <div className={styles.timelineProgress} />
      </div>
    </div>
  )
}

function AnalyticsVisual() {
  return (
    <div className={styles.visualAnalytics} aria-hidden="true">
      <div className={styles.chartGrid} />
      <div className={styles.chartBars}>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className={styles.chartLabel}>Friction spikes on step 3</div>
    </div>
  )
}

function UseCaseVisual({ kind }: { kind: (typeof USE_CASES)[number]['visualKind'] }) {
  if (kind === 'adoption') {
    return (
      <div className={styles.useCaseVisualOnboarding} aria-hidden="true">
        <div className={styles.useCaseVisualHeader}>Release notes</div>
        <div className={styles.useCaseVisualWindow}>
          <div className={styles.useCaseVisualLine} />
          <div className={styles.useCaseVisualLineShort} />
          <div className={styles.useCaseVisualChange}>
            New workflow guide available
          </div>
        </div>
      </div>
    )
  }

  if (kind === 'support') {
    return (
      <div className={styles.useCaseVisualSupport} aria-hidden="true">
        <div className={styles.useCaseVisualTicket}>
          <span>How do I invite a teammate?</span>
          <div className={styles.useCaseVisualReply}>GuideAI suggests the answer instantly</div>
        </div>
        <div className={styles.useCaseVisualPulse} />
      </div>
    )
  }

  return (
    <div className={styles.useCaseVisualOnboarding} aria-hidden="true">
      <div className={styles.useCaseVisualChecklist}>
        <div className={styles.useCaseVisualLine} />
        <div className={styles.useCaseVisualLineShort} />
        <div className={styles.useCaseVisualLineShorter} />
        <div className={styles.useCaseVisualCheckRow}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={styles.useCaseVisualBadge}>Checklist completed</div>
    </div>
  )
}

function V2LandingPage({ onNavigate }: V2LandingPageProps) {
  const { openWaitlist } = useWaitlist()
  const [activeUseCase, setActiveUseCase] = useState(0)

  const heroRef = useScrollReveal<HTMLElement>({ stagger: 0.12 })
  const problemRef = useScrollReveal<HTMLElement>({ stagger: 0.12 })
  const solutionRef = useScrollReveal<HTMLElement>({ stagger: 0.1 })
  const howRef = useScrollReveal<HTMLElement>({ stagger: 0.12 })
  const useCasesRef = useScrollReveal<HTMLElement>({ stagger: 0.12 })
  const deepDiveRef = useScrollReveal<HTMLElement>({ stagger: 0.12 })
  const compareRef = useScrollReveal<HTMLElement>({ stagger: 0.12 })
  const resultsRef = useScrollReveal<HTMLElement>({ stagger: 0.12 })
  const ctaRef = useScrollReveal<HTMLElement>({ stagger: 0.12 })

  return (
    <div className={styles.page}>
      <div className={styles.ambientGlowA} aria-hidden="true" />
      <div className={styles.ambientGlowB} aria-hidden="true" />

      <header className={styles.navbar}>
        <div className={styles.container}>
          <button type="button" className={styles.brand} onClick={() => onNavigate('/')}>
            <LogoMark />
            <span className={styles.brandText}>GuideAI</span>
          </button>

          <nav className={styles.navLinks} aria-label="Landing sections">
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#how">How it works</a>
            <a href="#use-cases">Use cases</a>
            <a href="#deep-dive">Deep dive</a>
            <a href="#results">Results</a>
          </nav>

          <div className={styles.navActions}>
            <a className={styles.navGhost} href="#pilot">
              Run pilot
            </a>
            <button type="button" className={styles.navButton} onClick={openWaitlist}>
              Book a demo
            </button>
          </div>
        </div>
      </header>

      <main>
        <section ref={heroRef} className={styles.hero} id="hero">
          <div className={styles.container}>
            <div className={styles.heroCenter}>
              <span className={`${styles.heroBadge} reveal-item`}>
                NEW: AI AUTOMATION ENGINE 2.0
              </span>
              <h1 className={`${styles.heroHeadline} reveal-item`}>
                <span>Launch in-app onboarding faster.</span>
                <span className={styles.heroAccent}>Keep it working automatically.</span>
              </h1>
              <p className={`${styles.heroLead} reveal-item`}>
                Replace outdated tooltip chains with intelligent, self-healing guides that evolve
                as your product changes. Reach time to value in seconds, not hours.
              </p>

              <div className={`${styles.heroActions} reveal-item`}>
                <button type="button" className={styles.primaryAction} onClick={openWaitlist}>
                  Start Free Trial
                </button>
                <a href="#deep-dive" className={styles.secondaryAction}>
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section ref={problemRef} className={styles.section} id="problem">
          <div className={styles.container}>
            <div className={styles.problemSplit}>
              <div className={styles.problemCopy}>
                <span className={`${styles.problemKicker} reveal-item`}>
                  Your users do not reach value fast enough
                </span>
                <p className={`${styles.problemBody} reveal-item`}>
                  The "gap of silence" between signup and first success is where users churn.
                  Static documentation and brittle tooltips are the reason why support tickets
                  skyrocket.
                </p>

                <ul className={styles.problemList}>
                  <li className="reveal-item">65% of users drop off during the first 5 minutes.</li>
                  <li className="reveal-item">Brittle selectors break guides after every UI update.</li>
                  <li className="reveal-item">Manual guide creation takes weeks of engineering.</li>
                </ul>
              </div>

              <article className={`${styles.problemPanel} reveal-item`} aria-label="Broken onboarding preview">
                <div className={styles.problemPanelTop}>
                  <div className={styles.problemLineLong} />
                  <div className={styles.problemLineMed} />
                  <div className={styles.problemLineShort} />
                </div>

                <div className={styles.problemPanelBody}>
                  <div className={styles.problemPanelRow}>
                    <div className={styles.problemPanelTile}>
                      <span>404: Element Not Found</span>
                    </div>
                    <div className={styles.problemPanelTile}>
                      <span>Guide Broken</span>
                    </div>
                  </div>
                  <div className={styles.problemPanelFooter}>Stale tooltip syndrome</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section ref={solutionRef} className={styles.section} id="solution">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="section-label reveal-item">The solution</span>
              <h2 className="section-title reveal-item">GuideAI turns friction into guided success.</h2>
              <p className="section-subtitle reveal-item">
                From discovery to guidance to automation, everything works together as one system.
              </p>
            </div>

            <div className={styles.solutionGrid}>
              {SOLUTION_PILLARS.map((item, index) => (
                <article key={item.title} className={`${styles.solutionCard} reveal-item`}>
                  <span className={styles.solutionIndex}>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={howRef} className={styles.sectionAlt} id="how">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="section-label reveal-item">How it works</span>
              <h2 className="section-title reveal-item">From friction to live guidance in minutes.</h2>
            </div>

            <div className={styles.stepper}>
              <article className={`${styles.stepCard} reveal-item`}>
                <span className={styles.stepNumber}>01</span>
                <h3>Capture your workflow</h3>
                <p>Record the product flow you want to improve.</p>
              </article>
              <article className={`${styles.stepCard} reveal-item`}>
                <span className={styles.stepNumber}>02</span>
                <h3>Generate guides instantly</h3>
                <p>AI turns the workflow into in-app guides and video.</p>
              </article>
              <article className={`${styles.stepCard} reveal-item`}>
                <span className={styles.stepNumber}>03</span>
                <h3>Help users complete tasks</h3>
                <p>Copilot assists or automates actions live in the browser.</p>
              </article>
            </div>
          </div>
        </section>

        <section ref={useCasesRef} className={styles.section} id="use-cases">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="section-label reveal-item">Use cases</span>
              <h2 className="section-title reveal-item">Built for every stage of the funnel.</h2>
            </div>

            <div className={styles.useCaseShell}>
              <div className={styles.useCaseTabsRow} role="tablist" aria-label="Use cases">
                {USE_CASE_TABS.map((tab, index) => (
                  <button
                    key={tab}
                    type="button"
                    className={`${styles.useCaseTab} ${activeUseCase === index ? styles.useCaseTabActive : ''}`}
                    onClick={() => setActiveUseCase(index)}
                    aria-selected={activeUseCase === index}
                    role="tab"
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className={styles.useCaseSplit}>
                <div className={styles.useCaseList}>
                  {USE_CASES.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      className={`${styles.useCaseItem} ${activeUseCase === index ? styles.useCaseItemActive : ''}`}
                      onClick={() => setActiveUseCase(index)}
                    >
                      <span className={styles.useCaseActiveBar} aria-hidden="true" />
                      <div>
                        <span className={styles.useCaseItemTitle}>{item.title}</span>
                        <p>{item.summary}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <article className={styles.useCasePreviewPanel} aria-label="Use case preview">
                  <div className={styles.useCasePreviewMedia}>
                    <UseCaseVisual kind={USE_CASES[activeUseCase].visualKind} />
                  </div>

                  <div className={styles.useCaseOutcomeCard}>
                    <span className={styles.useCaseOutcomeLabel}>
                      {USE_CASES[activeUseCase].panelLabel}
                    </span>
                    <p>{USE_CASES[activeUseCase].outcome}</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section ref={deepDiveRef} className={styles.section} id="deep-dive">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="section-label reveal-item">Product deep dive</span>
              <h2 className="section-title reveal-item">Four core experiences, one adoption system.</h2>
            </div>

            <div className={styles.deepDiveGrid}>
              <article className={`${styles.deepDiveCard} reveal-item`}>
                <span className={styles.deepDiveTag}>Browser Copilot</span>
                <h3>Let users complete tasks without leaving your product.</h3>
                <p>GuideAI suggests the next action, fills repetitive steps, and keeps the flow moving.</p>
                <BrowserCopilotVisual />
              </article>
              <article className={`${styles.deepDiveCard} reveal-item`}>
                <span className={styles.deepDiveTag}>In-App Guides</span>
                <h3>Guide users exactly where they get stuck.</h3>
                <p>Overlay tooltips, step indicators, and contextual prompts on top of the UI.</p>
                <GuideVisual />
              </article>
              <article className={`${styles.deepDiveCard} reveal-item`}>
                <span className={styles.deepDiveTag}>Video Guides</span>
                <h3>Turn workflows into reusable training videos.</h3>
                <p>Transform the same flow into a video training asset for teams and customers.</p>
                <VideoVisual />
              </article>
              <article className={`${styles.deepDiveCard} reveal-item`}>
                <span className={styles.deepDiveTag}>Friction Analytics</span>
                <h3>See where users drop off and fix it instantly.</h3>
                <p>Watch the flow, spot the failure, and make the next improvement with evidence.</p>
                <AnalyticsVisual />
              </article>
            </div>
          </div>
        </section>

        <section ref={compareRef} className={styles.section} id="compare">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className="section-title reveal-item">From broken onboarding to measurable growth.</h2>
            </div>

            <div className={styles.compareShell}>
              <article className={`${styles.compareCard} ${styles.compareBefore} reveal-item`}>
                <span className={styles.compareLabelBefore}>BEFORE GUIDEAI</span>
                <ul className={styles.compareList}>
                  {BEFORE_AFTER.before.map((item) => (
                    <li key={item}>
                      <span className={styles.compareIconCross} aria-hidden="true">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className={`${styles.compareCard} ${styles.compareAfter} reveal-item`}>
                <span className={styles.compareLabelAfter}>AFTER GUIDEAI</span>
                <ul className={styles.compareList}>
                  {BEFORE_AFTER.after.map((item) => (
                    <li key={item}>
                      <span className={styles.compareIconCheck} aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section ref={resultsRef} className={styles.sectionAlt} id="results">
          <div className={styles.container}>
            <div className={styles.metricsPanel}>
              {METRICS.map((metric) => (
                <article key={metric.label} className={`${styles.metricCard} reveal-item`}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  <p>{metric.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={ctaRef} className={styles.section} id="pilot">
          <div className={styles.container}>
            <div className={styles.pilotCard}>
              <h2 className={`${styles.pilotTitle} reveal-item`}>Ready to automate success?</h2>
              <p className={`${styles.pilotCopy} reveal-item`}>
                Join 200+ fast-growing software companies who use GuideAI to scale their user
                success efforts. No credit card required for the pilot.
              </p>
              <button type="button" className={`${styles.pilotButton} reveal-item`} onClick={openWaitlist}>
                Run a 14-day onboarding pilot
              </button>
              <p className={`${styles.pilotNote} reveal-item`}>
                Limited slots available for enterprise integration partners.
              </p>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerGrid}>
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.heading} className={styles.footerColumn}>
                  <h3>{column.heading}</h3>
                  <ul>
                    {column.links.map((link) => (
                      <li key={link}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className={styles.footerCopy}>Copyright 3gensolution {new Date().getFullYear()}</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default V2LandingPage
