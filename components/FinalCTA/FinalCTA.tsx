import React from 'react';
import styles from './FinalCTA.module.css';
import { MediaPlaceholder } from '@/components/MediaPlaceholder/MediaPlaceholder';

export const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className={styles.section} aria-labelledby="final-cta-title">
      <div className={styles.ctaCard}>
        <div className={styles.badge}>
          <span>⚡ No Scaffolding Required</span>
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
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
