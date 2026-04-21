import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useWaitlist } from '../../context/WaitlistContext';
import styles from './Pricing.module.scss';

interface PricingFeature {
  text: string;
  included?: boolean;
}

interface PricingTier {
  label: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  featured?: boolean;
  badge?: string;
}

const TIERS: PricingTier[] = [
  {
    label: 'Starter',
    price: '$0',
    period: '/mo',
    description: 'Perfect for side projects and small experiments.',
    features: [
      { text: '1,000 Monthly Active Users', included: true },
      { text: '3 AI Interactive Guides', included: true },
      { text: 'Basic Analytics', included: true },
      { text: 'No Auto-Healing', included: false },
    ],
    ctaText: 'Contact Us',
  },
  {
    label: 'Growth',
    price: '$149',
    period: '/mo',
    description:
      'For fast-growing startups focused on retention.',
    features: [
      { text: '10,000 Monthly Active Users', included: true },
      { text: 'Unlimited AI Guides', included: true },
      { text: 'Auto-Healing Engine', included: true },
      { text: 'Slack Integration', included: true },
    ],
    ctaText: 'Contact Us',
    featured: true,
    badge: 'MOST POPULAR',
  },
  {
    label: 'Enterprise',
    price: 'Custom',
    description:
      'For large-scale applications with complex security needs.',
    features: [
      { text: 'Unlimited Everything', included: true },
      { text: 'Dedicated AI Training', included: true },
      { text: 'SOC2 & HIPAA Compliance', included: true },
      { text: '24/7 Priority Support', included: true },
    ],
    ctaText: 'Contact Sales',
  },
];

const CheckIcon: React.FC = () => (
  <svg
    className={styles.featureIcon}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path
      d="M6 10l3 3 5-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon: React.FC = () => (
  <svg
    className={styles.featureIconDisabled}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path
      d="M7 7l6 6M13 7l-6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const Pricing: React.FC = () => {
  const { openWaitlist } = useWaitlist();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.12 });

  return (
    <section ref={sectionRef} className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={`${styles.header} reveal-item`}>
          <h2 className={styles.title}>Simple, scalable pricing.</h2>
          <p className={styles.subtitle}>
            Start for free, scale as you grow.
          </p>
        </div>

        <div className={styles.grid}>
          {TIERS.map((tier) => (
            <div
              key={tier.label}
              className={`${tier.featured ? styles.cardFeatured : styles.card} reveal-item`}
            >
              {tier.badge && (
                <span className={styles.badge}>{tier.badge}</span>
              )}

              <h3 className={styles.tierLabel}>{tier.label}</h3>

              <div className={styles.price}>
                <span
                  className={`${styles.priceAmount} ${tier.featured ? styles.priceAmountFeatured : ''}`}
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span className={styles.pricePeriod}>{tier.period}</span>
                )}
              </div>

              <p className={styles.description}>{tier.description}</p>

              <ul className={styles.features}>
                {tier.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`${styles.featureItem} ${feature.included === false ? styles.featureDisabled : ''}`}
                  >
                    {feature.included === false ? <CrossIcon /> : <CheckIcon />}
                    {feature.text}
                  </li>
                ))}
              </ul>

              <button
                className={
                  tier.featured ? styles.ctaPrimary : styles.ctaOutline
                }
                type="button"
                onClick={tier.ctaText === 'Contact Us' ? openWaitlist : undefined}
              >
                {tier.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
