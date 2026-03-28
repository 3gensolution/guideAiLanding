import useEmblaCarousel from 'embla-carousel-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './SocialProof.module.scss';

const COMPANIES = ['STRIPE', 'VERCEL', 'NOTION', 'LINEAR', 'FIGMA'] as const;

const SocialProof: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.1 });
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: true,
  });

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <p className={`${styles.label} reveal-item`}>Trusted by teams at</p>

        {isMobile ? (
          <div className={`${styles.carousel} reveal-item`} ref={emblaRef}>
            <div className={styles.carouselTrack}>
              {COMPANIES.map((company) => (
                <div key={company} className={styles.carouselSlide}>
                  <span className={styles.logo}>{company}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`${styles.logoRow} reveal-item`}>
            {COMPANIES.map((company) => (
              <span key={company} className={styles.logo}>
                {company}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SocialProof;
