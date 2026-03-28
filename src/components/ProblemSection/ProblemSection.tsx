import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './ProblemSection.module.scss';

interface ProblemCard {
  title: string;
  description: string;
  iconType: 'confused' | 'inbox' | 'broken';
}

const PROBLEMS: ProblemCard[] = [
  {
    title: 'Confused Users',
    description:
      'Existing tooltips are ignored or dismissed. New users have no clear path through your interface.',
    iconType: 'confused',
  },
  {
    title: 'Overloaded Inbox',
    description:
      'Your support team spends 60% of their time answering basic "How do I..." questions that shouldn\'t exist.',
    iconType: 'inbox',
  },
  {
    title: 'Broken Tooltips',
    description:
      'Every UI update breaks your legacy onboarding tools. Maintenance becomes a full-time job.',
    iconType: 'broken',
  },
];

const WarningIcon: React.FC = () => (
  <svg
    className={styles.iconSvg}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M14 3L26 25H2L14 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="14"
      y1="11"
      x2="14"
      y2="17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="14" cy="21" r="1.2" fill="currentColor" />
  </svg>
);

const InboxIcon: React.FC = () => (
  <svg
    className={styles.iconSvg}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 10L2 20H10L12 24H16L18 20H26L24 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M4 10V4H24V10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="10"
      y1="9"
      x2="18"
      y2="9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="10"
      y1="13"
      x2="18"
      y2="13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const BrokenCircleIcon: React.FC = () => (
  <svg
    className={styles.iconSvg}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M14 2C7.373 2 2 7.373 2 14C2 17.313 3.343 20.313 5.515 22.485"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M14 26C20.627 26 26 20.627 26 14C26 10.687 24.657 7.687 22.485 5.515"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <line
      x1="10"
      y1="10"
      x2="18"
      y2="18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="18"
      y1="10"
      x2="10"
      y2="18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const iconMap: Record<ProblemCard['iconType'], React.FC> = {
  confused: WarningIcon,
  inbox: InboxIcon,
  broken: BrokenCircleIcon,
};

const iconStyleMap: Record<ProblemCard['iconType'], string> = {
  confused: styles.iconConfused,
  inbox: styles.iconInbox,
  broken: styles.iconBroken,
};

const ProblemSection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.12 });

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label reveal-item">The Problem</span>
          <h2 className="section-title reveal-item">
            Users get stuck. Support teams get overwhelmed.
          </h2>
          <p className="section-subtitle reveal-item">
            Traditional adoption tools are static, brittle, and frankly,
            annoying.
          </p>
        </div>

        <div className={styles.grid}>
          {PROBLEMS.map((problem) => {
            const IconComponent = iconMap[problem.iconType];
            return (
              <div
                key={problem.title}
                className={`${styles.card} reveal-item`}
              >
                <div
                  className={`${styles.iconWrapper} ${iconStyleMap[problem.iconType]}`}
                >
                  <IconComponent />
                </div>
                <h3 className={styles.cardTitle}>{problem.title}</h3>
                <p className={styles.cardDescription}>{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
