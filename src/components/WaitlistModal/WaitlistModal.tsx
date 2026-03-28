import { useState, useEffect, useRef, type FormEvent } from 'react';
import { useWaitlist } from '../../context/WaitlistContext';
import styles from './WaitlistModal.module.scss';

type ModalState = 'idle' | 'submitting' | 'success';

function WaitlistModal() {
  const { isOpen, closeWaitlist } = useWaitlist();
  const [state, setState] = useState<ModalState>('idle');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setState('idle');
        setEmail('');
        setError('');
      }, 300); // wait for close transition
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen && state === 'idle') {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, state]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeWaitlist();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, closeWaitlist]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter your email.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email.');
      return;
    }

    setState('submitting');
    // Simulate async — replace with real API call later
    setTimeout(() => {
      setState('success');
    }, 800);
  };

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.open : ''}`}
      onClick={closeWaitlist}
      aria-hidden={!isOpen}
    >
      <div
        className={styles.card}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Join waitlist"
      >
        {/* Close button */}
        <button
          className={styles.closeBtn}
          onClick={closeWaitlist}
          aria-label="Close"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {state === 'success' ? (
          <div className={styles.successContent}>
            <div className={styles.successIcon} aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
                <path d="M15 24l6 6 12-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.heading}>You're on the list!</h3>
            <p className={styles.subtitle}>
              We'll notify you when GuideAI is live.
            </p>
            <button
              type="button"
              className={styles.doneBtn}
              onClick={closeWaitlist}
            >
              Done
            </button>
          </div>
        ) : (
          <form className={styles.formContent} onSubmit={handleSubmit}>
            <h3 className={styles.heading}>Be the First to Know</h3>
            <p className={styles.subtitle}>
              Drop your email and we'll notify you the moment GuideAI goes live.
            </p>

            <div className={styles.inputGroup}>
              <input
                ref={inputRef}
                type="email"
                className={`${styles.input} ${error ? styles.inputError : ''}`}
                placeholder="you@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                disabled={state === 'submitting'}
                autoComplete="email"
              />
              {error && <span className={styles.error}>{error}</span>}
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={state === 'submitting'}
            >
              {state === 'submitting' ? 'Submitting…' : 'Notify Me'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default WaitlistModal;
