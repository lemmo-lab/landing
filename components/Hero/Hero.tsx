import React from 'react';
import styles from './Hero.module.css';
import { HeroContent } from './HeroContent';
import { HeroPrompt } from './HeroPrompt';
import { HeroMedia } from './HeroMedia';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection} aria-label="Hero Introduction">
      <div className={styles.heroBackground} aria-hidden="true" />
      <div className={styles.heroGrid}>
        <HeroContent />
        <HeroPrompt />
        <HeroMedia />
      </div>
    </section>
  );
};
