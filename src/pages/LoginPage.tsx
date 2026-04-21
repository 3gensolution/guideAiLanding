import { useState, type FormEvent } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './LoginPage.module.scss'

type LoginPageProps = {
  onAuthenticate: () => void
  onNavigate: (path: string) => void
}

function LoginPage({ onAuthenticate, onNavigate }: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.12 })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = email.trim()

    if (!trimmed) {
      setError('Enter your work email to continue.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Use a valid email address.')
      return
    }

    onAuthenticate()
    onNavigate('/dashboard')
  }

  return (
    <main className={styles.page}>
      <div className={styles.backdrop} aria-hidden="true" />
      <section ref={sectionRef} className={styles.shell}>
        <div className={styles.copy}>
          <button type="button" className={styles.brand} onClick={() => onNavigate('/')}>
            <span className={styles.brandMark} aria-hidden="true" />
            <span>GuideAI</span>
          </button>

          <span className={`${styles.kicker} reveal-item`}>Secure access</span>
          <h1 className={`${styles.title} reveal-item`}>Sign in to the dashboard and product app.</h1>
          <p className={`${styles.subtitle} reveal-item`}>
            Keep the public marketing page open for visitors. Move authenticated teams into the
            product area where they can review guidance performance and product intelligence.
          </p>

          <ul className={`${styles.benefits} reveal-item`}>
            <li>View guide completions and friction signals</li>
            <li>Inspect what users do before they drop off</li>
            <li>Share evidence with businesses, support, and growth teams</li>
          </ul>
        </div>

        <form className={styles.card} onSubmit={handleSubmit}>
          <span className={styles.cardLabel}>Login</span>
          <h2>Welcome back</h2>
          <p>Use any valid work email to unlock the authenticated experience.</p>

          <label className={styles.field}>
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (error) setError('')
              }}
              placeholder="you@company.com"
              autoComplete="email"
            />
          </label>

          {error ? <p className={styles.error}>{error}</p> : null}

          <button type="submit" className={styles.submit}>
            Sign in
          </button>

          <button type="button" className={styles.backLink} onClick={() => onNavigate('/')}>
            Back to landing page
          </button>
        </form>
      </section>
    </main>
  )
}

export default LoginPage
