import { useState, useEffect, useCallback } from 'react';
import { useWaitlist } from '../../context/WaitlistContext';
import styles from './Navbar.module.scss';

const NAV_LINKS = ['Product', 'Solutions', 'Resources', 'Pricing'] as const;
const SCROLL_THRESHOLD = 50;

const Navbar: React.FC = () => {
  const { openWaitlist } = useWaitlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={styles.container}>
          {/* Logo */}
          <a href="/" className={styles.logo} aria-label="GuideAI Home">
            <img src="/guide-logo.jpeg" alt="" className={styles.logoImage} aria-hidden="true" />
            <span className={styles.logoText}>
              Guide<span>AI</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className={styles.desktopNav}>
            <ul className={styles.navLinks}>
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className={styles.navLink}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop actions */}
          <div className={styles.actions}>
            <button type="button" className={styles.ctaButton} onClick={openWaitlist}>
              Contact Us
            </button>
          </div>

          {/* Hamburger button */}
          <button
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        id="mobile-nav"
        className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.mobileOverlayOpen : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className={styles.mobileNavLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={styles.mobileNavLink}
                onClick={closeMobileMenu}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.mobileActions}>
          <button
            type="button"
            className={styles.mobileCta}
            onClick={() => { closeMobileMenu(); openWaitlist(); }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
