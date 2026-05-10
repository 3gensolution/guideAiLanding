import { useEffect } from 'react'
import { useWaitlist } from '../context/WaitlistContext'
import styles from './PolicyPage.module.scss'

interface PolicyPageProps {
  onNavigate?: (path: string) => void
}

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

export default function PolicyPage({ onNavigate }: PolicyPageProps) {
  const { openWaitlist } = useWaitlist()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

      <main id="main" className={styles.main}>
      <div className={styles.container}>
        <article className={styles.content}>
          <header className={styles.header}>
            <h1>Privacy Policy</h1>
          </header>

          <div className={styles.introduction}>
            <p>
              GuideAI is built to help product teams understand user friction, improve onboarding, and deliver in-app
              guidance that drives activation and adoption.
            </p>
            <p>
              Your privacy matters to us at GuideAI. This Privacy Policy explains how we collect, use, share, and
              protect your information when you use our website, SDKs, dashboards, guides, analytics tools, and related
              services.
            </p>
            <p>
              By using GuideAI, you agree to the practices described in this Privacy Policy.
            </p>
          </div>

          <section className={styles.section}>
            <h2>1. Information We Collect</h2>
            <p>We collect the following types of information:</p>

            <div className={styles.subsection}>
              <h3>a. Account & Business Information</h3>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Company or organization name</li>
                <li>Job title or role</li>
                <li>Billing and payment information (when applicable)</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3>b. Product & Usage Data</h3>
              <p>When GuideAI is integrated into a product, we may collect:</p>
              <ul>
                <li>User interaction events</li>
                <li>Session activity and timelines</li>
                <li>Funnel and workflow activity</li>
                <li>Feature usage and adoption metrics</li>
                <li>Device, browser, operating system, and IP address</li>
                <li>Pages visited and interaction timestamps</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3>c. Technical & Diagnostic Information</h3>
              <ul>
                <li>SDK performance logs</li>
                <li>Error reports and debugging information</li>
                <li>API usage data</li>
                <li>Access logs and security monitoring information</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3>d. Communication Information</h3>
              <ul>
                <li>Emails and support conversations</li>
                <li>Feedback submissions</li>
                <li>Early access or waitlist requests</li>
                <li>Marketing preferences and opt-ins</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Create and manage your GuideAI account</li>
              <li>Provide analytics, onboarding, and workflow services</li>
              <li>Improve product performance and usability</li>
              <li>Monitor product adoption and onboarding effectiveness</li>
              <li>Deliver in-app guides, announcements, and contextual help</li>
              <li>Respond to support requests and feedback</li>
              <li>Maintain platform security and prevent misuse</li>
              <li>Communicate updates, releases, or important notices</li>
              <li>Send marketing communications where permitted</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. How We Share Information</h2>
            <p>We do not sell your personal information.</p>
            <p>We may share information with:</p>
            <ul>
              <li>Trusted cloud and infrastructure providers</li>
              <li>Analytics and monitoring service providers</li>
              <li>Payment processors (where applicable)</li>
              <li>Professional advisers and legal authorities when required by law</li>
              <li>Service providers who help us operate, maintain, and improve GuideAI</li>
            </ul>
            <p>All third parties are expected to handle information securely and only for authorized purposes.</p>
          </section>

          <section className={styles.section}>
            <h2>4. Data Storage & Security</h2>
            <p>GuideAI uses industry-standard security measures to protect your information, including:</p>
            <ul>
              <li>Encrypted data transmission</li>
              <li>Secure cloud infrastructure</li>
              <li>Access controls and authentication</li>
              <li>Monitoring and logging for unauthorized access attempts</li>
            </ul>
            <p>While we work hard to protect your information, no method of transmission or storage is completely secure.</p>
          </section>

          <section className={styles.section}>
            <h2>5. Data Retention</h2>
            <p>We retain information only for as long as necessary to:</p>
            <ul>
              <li>Provide our services</li>
              <li>Improve and maintain the platform</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p>
              You may request deletion of your account or associated data by contacting us at{' '}
              <a href="mailto:info@3guideai.com">info@3guideai.com</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Your Rights</h2>
            <p>Depending on your location and applicable laws, you may have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Object to certain processing activities</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>
            <p>
              To exercise these rights, contact us at <a href="mailto:info@3guideai.com">info@3guideai.com</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Cookies & Analytics</h2>
            <p>GuideAI may use cookies and similar technologies to:</p>
            <ul>
              <li>Maintain sessions and authentication</li>
              <li>Understand product and website usage</li>
              <li>Improve onboarding and navigation</li>
              <li>Analyze platform performance</li>
            </ul>
            <p>You can manage cookie settings through your browser preferences.</p>
          </section>

          <section className={styles.section}>
            <h2>8. Third-Party Integrations</h2>
            <p>
              GuideAI may integrate with third-party platforms, APIs, or analytics providers. Use of those services may
              also be subject to their respective privacy policies.
            </p>
            <p>We encourage users to review the privacy practices of any connected third-party services.</p>
          </section>

          <section className={styles.section}>
            <h2>9. Children's Privacy</h2>
            <p>
              GuideAI is not intended for children under the age of 13, and we do not knowingly collect personal
              information from children.
            </p>
            <p>If we become aware that such information has been collected, we will take steps to delete it promptly.</p>
          </section>

          <section className={styles.section}>
            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be processed or stored in countries outside your own jurisdiction where our
              infrastructure or service providers operate.
            </p>
            <p>We take reasonable steps to ensure appropriate safeguards are in place for international data transfers.</p>
          </section>

          <section className={styles.section}>
            <h2>11. Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes to our services, legal requirements,
              or business operations.
            </p>
            <p>
              When significant updates are made, we may notify users through email, dashboard notifications, or our
              website.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or how your information is handled, please contact us:</p>
            <div className={styles.contactInfo}>
              <p>
                <strong>GuideAI</strong>
              </p>
              <p>Lagos, Nigeria</p>
              <p>
                Email: <a href="mailto:info@3guideai.com">info@3guideai.com</a>
              </p>
            </div>
          </section>
        </article>
      </div>
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
