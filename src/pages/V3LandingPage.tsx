import { useState } from 'react'
import styles from './V3LandingPage.module.scss'

interface V3LandingPageProps {
  onNavigate?: (path: string) => void
}

const FAQ_ITEMS = [
  {
    question: 'Does it slow down my app?',
    answer:
      'No. Our snippet is highly optimized, loads asynchronously, and is delivered globally via CDN. It has virtually zero impact on your application\'s performance or load times.',
  },
  {
    question: 'Do I need engineers to build guides?',
    answer:
      'Only for the initial snippet installation (which takes 5 minutes). After that, Product, Growth, or Support teams can build, target, and launch guidance entirely using our visual builder.',
  },
  {
    question: 'Can I target specific user segments?',
    answer:
      'Yes. You can pass user attributes (role, plan type) and behavioral data to GuideAI to ensure your messages are highly contextual and relevant.',
  },
  {
    question: 'How does it handle complex single-page apps?',
    answer:
      'GuideAI is built for modern web applications. It handles dynamic URL changes, shadow DOMs, and complex state changes natively without requiring manual triggers.',
  },
]

const TEAMS = [
  {
    icon: 'code',
    title: 'Product',
    description: 'Improve onboarding and activation flows with real behavioral insight.',
  },
  {
    icon: 'trending_up',
    title: 'Growth',
    description: 'Run experiments and target users with contextual messaging.',
  },
  {
    icon: 'support_agent',
    title: 'Support',
    description: 'Deflect tickets by guiding users to answers inside the app.',
  },
  {
    icon: 'favorite',
    title: 'Success',
    description: 'Monitor account health and proactively guide users to value.',
  },
  {
    icon: 'analytics',
    title: 'RevOps',
    description: 'Tie product usage and guidance engagement to revenue outcomes.',
  },
]

const USE_CASES = [
  {
    icon: 'waving_hand',
    title: 'New User Onboarding',
    description:
      'Welcome users with personalized checklists and tours that guide them to their first "aha" moment quickly.',
  },
  {
    icon: 'star',
    title: 'Feature Discovery',
    description:
      'Highlight new or underutilized features to relevant user segments right when they are most likely to need them.',
  },
  {
    icon: 'warning',
    title: 'Drop-off Rescue',
    description:
      'Trigger contextual help or special offers when users stall on critical conversion or configuration steps.',
  },
  {
    icon: 'help_clinic',
    title: 'Support Deflection',
    description:
      'Embed knowledge base articles and troubleshooting guides directly into the UI where common issues occur.',
  },
  {
    icon: 'monitor_heart',
    title: 'Account Health Monitoring',
    description:
      'Track leading indicators of churn and proactively engage at-risk accounts with targeted check-ins.',
  },
  {
    icon: 'forum',
    title: 'Feedback Collection',
    description:
      'Launch micro-surveys (NPS, CSAT) natively within the product experience for higher response rates.',
  },
]

const STEPS = [
  {
    number: 1,
    title: 'Instrument',
    description: 'Install our lightweight snippet. We start capturing user interactions automatically—no manual event tracking required.',
  },
  {
    number: 2,
    title: 'Observe',
    description: 'Define your key funnels and let GuideAI highlight where users are experiencing friction or dropping off.',
  },
  {
    number: 3,
    title: 'Identify',
    description: 'Segment users based on their behavior, attributes, or stage in the customer lifecycle to target your guidance.',
  },
  {
    number: 4,
    title: 'Build',
    description: 'Use our visual builder to create tooltips, modals, and workflows directly on top of your app without coding.',
  },
  {
    number: 5,
    title: 'Launch',
    description: 'Deploy your guides instantly. Set targeting rules so they only appear to the right users at the right time.',
  },
  {
    number: 6,
    title: 'Iterate',
    description: 'Measure the impact on your original funnel. A/B test different messages and refine your approach for maximum activation.',
  },
]

export default function V3LandingPage({ onNavigate }: V3LandingPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('/')
    } else {
      window.location.href = '/'
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navBrand}>
            <button onClick={handleLogoClick} className={styles.logo}>
              <img src="/guide-logo.jpeg" alt="GuideAI" className={styles.logoImg} />
              <span className={styles.brandText}>GuideAI</span>
            </button>
            <div className={styles.navLinks}>
              {/* <button onClick={() => handleNavClick('product')} className={styles.navLink}>Product</button> */}
              <button onClick={() => handleNavClick('features')} className={styles.navLink}>Solutions</button>
              <button onClick={() => handleNavClick('workflow')} className={styles.navLink}>Workflow</button>
              <button onClick={() => handleNavClick('usecases')} className={styles.navLink}>Use Cases</button>
              <button onClick={() => handleNavClick('faq')} className={styles.navLink}>FAQ</button>
            </div>
          </div>
          <div className={styles.navActions}>
            <button className={styles.signInBtn}>Sign In</button>
            <button className={styles.ctaBtn}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeIcon}>📢</span>
              We are live. Early access is open.
            </div>
            <h1 className={styles.heroTitle}>Understand friction. Ship guidance. Measure activation.</h1>
            <p className={styles.heroDescription}>
              GuideAI gives product teams visibility into where users struggle, plus the tools to fix it with in-app
              guides, workflows, and announcements, backed by analytics so you can prove what's working.
            </p>
            <div className={styles.heroCta}>
              <button className={`${styles.btn} ${styles.primary}`}>Request Early Access</button>
              <button className={`${styles.btn} ${styles.secondary}`}>See How It Works</button>
            </div>
            <div className={styles.heroMetrics}>
              <div className={styles.metric}>
                <p className={styles.metricTitle}>Faster</p>
                <p className={styles.metricDesc}>Time-to-value with targeted guidance</p>
              </div>
              <div className={styles.metric}>
                <p className={styles.metricTitle}>Fewer</p>
                <p className={styles.metricDesc}>Support escalations from self-serve help</p>
              </div>
              <div className={styles.metric}>
                <p className={styles.metricTitle}>Clear</p>
                <p className={styles.metricDesc}>Visibility into friction and drop-offs</p>
              </div>
            </div>
          </div>
          <div className={styles.heroDashboard}>
            <div className={styles.dashboardCard}>
              <div className={styles.dashboardHeader}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={styles.dashboardChart}>
                <div style={{ height: '100%' }}></div>
                <div style={{ height: '70%' }}></div>
                <div style={{ height: '40%' }}></div>
                <div style={{ height: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Teams Section */}
      <section className={styles.teamsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Built for the whole team</h2>
          <div className={styles.teamsGrid}>
            {TEAMS.map((team, idx) => (
              <div key={idx} className={styles.teamCard}>
                <span className={styles.teamIcon}>{getIcon(team.icon)}</span>
                <h3 className={styles.teamTitle}>{team.title}</h3>
                <p className={styles.teamDesc}>{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection} id="features">
        <div className={styles.container}>
          {/* Feature 1 */}
          <div className={styles.featureBlock}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureTitle}>Find friction fast</h2>
              <p className={styles.featureDesc}>
                Identify exactly where users are dropping off in your core flows. Visualize funnels, watch session
                replays, and pinpoint the exact moments of frustration so you can prioritize what to fix first.
              </p>
              <ul className={styles.featureList}>
                <li>✓ Funnel visualization</li>
                <li>✓ Drop-off alerts</li>
                <li>✓ Frustration scoring</li>
              </ul>
            </div>
            <div className={styles.featureVisualization}>
              <div className={styles.chartContainer}>
                <div className={styles.chartBar} style={{ height: '100%' }}></div>
                <div className={styles.chartBar} style={{ height: '70%' }}></div>
                <div className={styles.chartBar} style={{ height: '40%' }}></div>
                <div className={styles.chartBar} style={{ height: '15%' }}></div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className={`${styles.featureBlock} ${styles.reversed}`}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureTitle}>Fix it with in-app guidance</h2>
              <p className={styles.featureDesc}>
                Deploy tooltips, modals, checklists, and interactive walkthroughs without waiting for engineering.
                Target the right users at the exact moment they need help.
              </p>
              <ul className={styles.featureList}>
                <li>✓ No-code builder</li>
                <li>✓ Behavioral targeting</li>
                <li>✓ A/B testing</li>
              </ul>
            </div>
            <div className={styles.featureVisualization}></div>
          </div>

          {/* Feature 3 */}
          <div className={styles.featureBlock}>
            <div className={styles.featureContent}>
              <h2 className={styles.featureTitle}>Prove impact</h2>
              <p className={styles.featureDesc}>
                Close the loop by measuring how your guides affect activation rates, feature adoption, and support
                ticket volume. See the ROI of every intervention.
              </p>
              <ul className={styles.featureList}>
                <li>✓ Conversion tracking</li>
                <li>✓ Impact analysis</li>
                <li>✓ Executive dashboards</li>
              </ul>
            </div>
            <div className={styles.featureVisualization}></div>
          </div>
        </div>
      </section>

      {/* Loop Section */}
      <section className={styles.loopSection}>
        <div className={styles.container}>
          <div className={styles.loopHeader}>
            <h2 className={styles.sectionTitle}>The continuous improvement loop</h2>
            <p className={styles.loopSubtitle}>Find the gap, bridge it, measure the result.</p>
          </div>
          <div className={styles.loopSteps}>
            <div className={styles.loopStep}>
              <span className={styles.loopIcon}>👁️</span>
              <h3>1. Sessions</h3>
              <p>Observe behavior</p>
            </div>
            <span className={styles.loopArrow}>→</span>
            <div className={styles.loopStep}>
              <span className={styles.loopIcon}>📊</span>
              <h3>2. Funnels</h3>
              <p>Identify drop-off</p>
            </div>
            <span className={styles.loopArrow}>→</span>
            <div className={styles.loopStep}>
              <span className={styles.loopIcon}>💡</span>
              <h3>3. Guides</h3>
              <p>Provide context</p>
            </div>
            <span className={styles.loopArrow}>→</span>
            <div className={styles.loopStep}>
              <span className={styles.loopIcon}>🔄</span>
              <h3>4. Workflows</h3>
              <p>Drive activation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={styles.useCasesSection} id="usecases">
        <div className={styles.container}>
          <div className={styles.useCasesHeader}>
            <h2 className={styles.sectionTitle}>Endless possibilities</h2>
            <p className={styles.sectionSubtitle}>
              GuideAI adapts to your product's unique challenges, from day-one onboarding to advanced power-user
              discovery.
            </p>
          </div>
          <div className={styles.useCasesGrid}>
            {USE_CASES.map((useCase, idx) => (
              <div key={idx} className={styles.useCaseCard}>
                <span className={styles.useCaseIcon}>{getIcon(useCase.icon)}</span>
                <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                <p className={styles.useCaseDesc}>{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howSection} id="workflow">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <div className={styles.stepsContainer}>
            {STEPS.map((step, idx) => (
              <div key={idx} className={styles.stepItem}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection} id="faq">
        <div className={styles.container}>
          <div className={styles.faqHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqContainer}>
            {FAQ_ITEMS.map((item, idx) => (
              <details
                key={idx}
                className={styles.faqItem}
                open={openFaqIndex === idx}
                onClick={(e) => {
                  e.preventDefault()
                  setOpenFaqIndex(openFaqIndex === idx ? null : idx)
                }}
              >
                <summary className={styles.faqSummary}>
                  <span>{item.question}</span>
                  <span className={styles.faqIcon}>+</span>
                </summary>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>Ready to improve activation?</h2>
          <p className={styles.ctaDesc}>
            Join the teams using GuideAI to understand user behavior and ship better in-app experiences.
          </p>
          <div className={styles.ctaButtons}>
            <button className={`${styles.btn} ${styles.primary}`}>Start Free Trial</button>
            <button className={`${styles.btn} ${styles.secondary}`}>Talk to Sales</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3 className={styles.footerLogo}>GuideAI</h3>
            <p className={styles.footerTagline}>AI-guided onboarding that helps users reach value faster.</p>
            <p className={styles.footerCopyright}>© {currentYear} GuideAI. All rights reserved.</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="/policy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">Security</a>
            <a href="#support">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function getIcon(icon: string): string {
  const icons: { [key: string]: string } = {
    code: '💻',
    trending_up: '📈',
    support_agent: '🤝',
    favorite: '❤️',
    analytics: '📊',
    waving_hand: '👋',
    star: '⭐',
    warning: '⚠️',
    help_clinic: '🏥',
    monitor_heart: '💗',
    forum: '💬',
  }
  return icons[icon] || '•'
}
