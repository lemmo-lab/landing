import React from 'react';
import styles from './ProductShowcase.module.css';
import { MediaPlaceholder } from '@/components/MediaPlaceholder/MediaPlaceholder';

export const ProductShowcase: React.FC = () => {
  return (
    <section id="showcase" className={styles.section} aria-labelledby="showcase-title">
      <div className={styles.header}>
        <span className={styles.label}>// PRODUCT SHOWCASE</span>
        <h2 id="showcase-title" className={styles.title}>
          See Real Code &amp; Components, <br />
          Not Just Static Mockups
        </h2>
        <p className={styles.description}>
          Instead of giving you a flat image, Lemmo builds an interactive canvas with production-grade 
          React components, single-source design tokens, and live responsive previews.
        </p>
      </div>

      <div className={styles.showcaseContainer}>
        <div className={styles.innerCard}>
          {/* Dominant Product Showcase Media Placeholder */}
          <MediaPlaceholder
            id="product-showcase"
            aspectRatio="16/9"
            minHeight="420px"
            label="Full-Screen Lemmo Studio Canvas"
            type="canvas"
          />

          {/* Caption & Specs Bar */}
          <div className={styles.captionBar}>
            <span className={styles.captionText}>
              ⚡ Live Canvas: Token bindings, interactive state debugger, and one-click code export.
            </span>
            <div className={styles.featuresGrid}>
              <span className={styles.featureBadge}>✔ 100% Token-Driven</span>
              <span className={styles.featureBadge}>✔ Zero Runtime CSS Overhead</span>
              <span className={styles.featureBadge}>✔ Multi-Theme Ready</span>
              <span className={styles.featureBadge}>✔ WCAG AA Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
