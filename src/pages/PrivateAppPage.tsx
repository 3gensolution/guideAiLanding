import styles from './PrivateAppPage.module.scss'

type PrivateAppPageProps = {
  pathname: string
  onNavigate: (path: string) => void
  onSignOut: () => void
}

const DASHBOARD_METRICS = [
  { label: 'Activation rate', value: '68%', note: '+12% from last month' },
  { label: 'Guide completion', value: '82%', note: 'Most users finish onboarding' },
  { label: 'Support deflection', value: '41%', note: 'Fewer basic help requests' },
  { label: 'Friction events', value: '14', note: 'High-friction journeys identified' },
]

const PRODUCT_NOTES = [
  'Guide builder for contextual walkthroughs',
  'Behavior tracking for clicks, drop-offs, and errors',
  'Evidence summaries for businesses and operators',
  'Private workspaces with role-based access',
]

function PrivateAppPage({ pathname, onNavigate, onSignOut }: PrivateAppPageProps) {
  const isDashboard = pathname === '/dashboard'
  const title = isDashboard ? 'Dashboard' : 'Product App'
  const subtitle = isDashboard
    ? 'Review guide performance, friction points, and the signals that matter most to product teams.'
    : 'A private workspace for building guides, monitoring behavior, and collecting product insight.'

  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <button type="button" className={styles.brand} onClick={() => onNavigate('/dashboard')}>
          <span className={styles.brandMark} aria-hidden="true" />
          <span>GuideAI</span>
        </button>

        <nav className={styles.nav}>
          <button
            type="button"
            className={`${styles.navItem} ${isDashboard ? styles.navItemActive : ''}`}
            onClick={() => onNavigate('/dashboard')}
          >
            Dashboard
          </button>
          <button
            type="button"
            className={`${styles.navItem} ${!isDashboard ? styles.navItemActive : ''}`}
            onClick={() => onNavigate('/app')}
          >
            Product App
          </button>
        </nav>

        <button type="button" className={styles.signOut} onClick={onSignOut}>
          Sign out
        </button>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <span className={styles.kicker}>Private access</span>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <button type="button" className={styles.headerButton} onClick={() => onNavigate(isDashboard ? '/app' : '/dashboard')}>
            {isDashboard ? 'Open product app' : 'Open dashboard'}
          </button>
        </header>

        {isDashboard ? (
          <>
            <section className={styles.metricGrid}>
              {DASHBOARD_METRICS.map((metric) => (
                <article key={metric.label} className={styles.metricCard}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.note}</p>
                </article>
              ))}
            </section>

            <section className={styles.doubleGrid}>
              <article className={styles.panel}>
                <h2>Highest-friction journeys</h2>
                <ul className={styles.list}>
                  <li>Workspace setup stalls when teams invite collaborators too early</li>
                  <li>Users skip the first guide unless it appears after the first login</li>
                  <li>Feature discovery improves when nudges are tied to product context</li>
                </ul>
              </article>

              <article className={styles.panel}>
                <h2>Recent evidence</h2>
                <ul className={styles.list}>
                  <li>Guide completion improved after shortening the onboarding sequence</li>
                  <li>Users who saw contextual help were more likely to reach activation</li>
                  <li>Businesses flagged the invite flow as the top candidate for simplification</li>
                </ul>
              </article>
            </section>
          </>
        ) : (
          <section className={styles.appGrid}>
            <article className={styles.panel}>
              <h2>What the product app gives teams</h2>
              <ul className={styles.list}>
                {PRODUCT_NOTES.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </article>

            <article className={styles.previewPanel}>
              <div className={styles.previewHeader}>
                <span>Guide preview</span>
                <span>Draft</span>
              </div>
              <div className={styles.previewStep}>
                <strong>Step 1</strong>
                <p>Trigger a guide when a user opens a new workspace.</p>
              </div>
              <div className={styles.previewStep}>
                <strong>Step 2</strong>
                <p>Track whether they complete the invite and setup flow.</p>
              </div>
              <div className={styles.previewStep}>
                <strong>Step 3</strong>
                <p>Use the insight summary to decide what should change next.</p>
              </div>
            </article>
          </section>
        )}
      </section>
    </main>
  )
}

export default PrivateAppPage
