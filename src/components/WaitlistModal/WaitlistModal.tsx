import { useEffect } from 'react'
import { useWaitlist } from '../../context/WaitlistContext'
import styles from './WaitlistModal.module.scss'

const CONTACT_EMAIL = 'info@3gensoution.co.uk'

function WaitlistModal() {
  const { isOpen, closeWaitlist } = useWaitlist()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeWaitlist()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, closeWaitlist])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`
    }
  }

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.open : ''}`}
      onClick={closeWaitlist}
      aria-hidden={!isOpen}
    >
      <div
        className={styles.card}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Contact GuideAI"
      >
        <button
          className={styles.closeBtn}
          onClick={closeWaitlist}
          aria-label="Close"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className={styles.contactContent}>
          <span className={styles.contactLabel}>Contact</span>
          <h3 className={styles.heading}>Talk to GuideAI</h3>
          <p className={styles.subtitle}>
            Email us directly and we’ll get back to you at {CONTACT_EMAIL}.
          </p>

          <a
            className={styles.submitBtn}
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('GuideAI inquiry')}`}
          >
            Email us now
          </a>

          <button type="button" className={styles.doneBtn} onClick={handleCopyEmail}>
            Copy email address
          </button>
        </div>
      </div>
    </div>
  )
}

export default WaitlistModal

