import React from 'react';
import styles from './Hero.module.css';
import { ArrowRight, Play, Flash } from 'synthline/react';

export const HeroContent: React.FC = () => {
  return (
    <div>
      <div className={styles.eyebrow}>
        <Flash size={14} strokeWidth={1.5} style={{ color: 'var(--lemu-color-brand-lime)' }} />
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
          <ArrowRight size={16} strokeWidth={1.5} />
        </a>

        <a href="#demo" className={styles.secondaryCta}>
          <Play size={16} strokeWidth={1.5} />
          <span>Watch Interactive Demo</span>
        </a>
      </div>
    </div>
  );
};
