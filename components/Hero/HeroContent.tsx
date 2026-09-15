import React from 'react';
import styles from './Hero.module.css';

export const HeroContent: React.FC = () => {
  return (
    <div>
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowDot} />
        <span>Lemmo Studio v2.0 • AI-Powered Interface Engine</span>
      </div>

      <h1 className={styles.headline}>
        Turn Prompts into <br />
        <span className={styles.headlineHighlight}>Production-Ready UI</span>
      </h1>

      <p className={styles.description}>
        Lemmo compiles natural language into tokenized design systems, responsive React components, 
        and clean CSS in seconds. Describe what you need and watch it build in real time.
      </p>

      <div className={styles.ctaGroup}>
        <a href="#cta" className={styles.primaryCta}>
          <span>Start Building Free</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>

        <a href="#demo" className={styles.secondaryCta}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span>Watch Interactive Demo</span>
        </a>
      </div>
    </div>
  );
};
