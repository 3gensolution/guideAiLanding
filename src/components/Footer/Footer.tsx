import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Footer.module.scss';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

const FOOTER_LINKS = {
  product: {
    heading: 'PRODUCT',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Changelog', href: '#changelog' },
    ],
  },
  resources: {
    heading: 'RESOURCES',
    links: [
      { label: 'Documentation', href: '#docs' },
      { label: 'API Reference', href: '#api' },
      { label: 'Community', href: '#community' },
    ],
  },
  company: {
    heading: 'COMPANY',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' },
    ],
  },
} as const;

function Footer({ onNavigate }: FooterProps) {
  const footerRef = useScrollReveal<HTMLElement>({ stagger: 0.08, y: 20 });

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.container}>
        {/* Top columns */}
        <div className={styles.columns}>
          {/* Brand column */}
          <div className={`${styles.brandColumn} reveal-item`}>
            <span className={styles.logo}>GuideAI</span>
            <p className={styles.tagline}>
              Built on the intelligent AI systems automating every step of user
              onboarding, adoption, and self-service support.
            </p>
          </div>

          {/* Link columns */}
          {Object.values(FOOTER_LINKS).map((section) => (
            <div
              key={section.heading}
              className={`${styles.linkColumn} reveal-item`}
            >
              <h4 className={styles.columnHeading}>{section.heading}</h4>
              <ul className={styles.linkList}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className={`${styles.divider} reveal-item`} />

        {/* Bottom bar */}
        <div className={`${styles.bottomBar} reveal-item`}>
          <p className={styles.copyright}>
            &copy; 2024 GuideAI, Inc. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a 
              href="/policy" 
              className={styles.legalLink}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/policy');
                }
              }}
            >
              Privacy Policy
            </a>
            <span className={styles.legalSeparator} aria-hidden="true">
              &middot;
            </span>
            <a href="#terms" className={styles.legalLink}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
