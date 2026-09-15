import React from 'react';
import styles from './ProductShowcase.module.css';
import { MediaPlaceholder } from '@/components/MediaPlaceholder/MediaPlaceholder';
import { Flash, Check01, LayersTwo, ColorPalette, CheckCircle01 } from 'synthline/react';

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
            <span className={styles.captionText} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Flash size={16} strokeWidth={1.5} style={{ color: 'var(--lemu-color-brand-lime)' }} />
              <span>Live Canvas: Token bindings, interactive state debugger, and one-click code export.</span>
            </span>
            <div className={styles.featuresGrid}>
              <span className={styles.featureBadge}>
                <Check01 size={13} strokeWidth={1.5} style={{ color: 'var(--lemu-color-brand-lime)' }} />
                <span>100% Token-Driven</span>
              </span>
              <span className={styles.featureBadge}>
                <LayersTwo size={13} strokeWidth={1.5} />
                <span>Zero Runtime CSS Overhead</span>
              </span>
              <span className={styles.featureBadge}>
                <ColorPalette size={13} strokeWidth={1.5} />
                <span>Multi-Theme Ready</span>
              </span>
              <span className={styles.featureBadge}>
                <CheckCircle01 size={13} strokeWidth={1.5} style={{ color: 'var(--lemu-color-brand-lime)' }} />
                <span>WCAG AA Certified</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
