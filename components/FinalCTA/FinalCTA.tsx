import React from 'react';
import styles from './FinalCTA.module.css';
import { MediaPlaceholder } from '@/components/MediaPlaceholder/MediaPlaceholder';
import { Flash, ArrowRight } from 'synthline/react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className={styles.section} aria-labelledby="final-cta-title">
      <div className={styles.ctaCard}>
        <div className={styles.badge}>
          <Flash size={14} strokeWidth={1.5} style={{ color: 'var(--lemu-color-brand-lime)' }} />
          <span>No Scaffolding Required</span>
        </div>

        <h2 id="final-cta-title" className={styles.title}>
          Ready to Build Your Next <br /> Product with Lemmo?
        </h2>

        <p className={styles.description}>
          Join thousands of designers, developers, and product teams turning vision 
          into production in minutes. No credit card required.
        </p>

        <div className={styles.actionsRow}>
          <a href="#hero" className={styles.primaryBtn}>
            <span>Start Building Free</span>
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>

          <a href="#showcase" className={styles.secondaryBtn}>
            <span>Browse Showcase</span>
          </a>
        </div>

        {/* Small product preview as requested in task.md Section 14 */}
        <div className={styles.previewContainer}>
          <MediaPlaceholder
            id="final-product"
            aspectRatio="21/9"
            minHeight="180px"
            label="Lemmo Studio Cloud Canvas"
            type="interactive"
          />
        </div>
      </div>
    </section>
  );
};
