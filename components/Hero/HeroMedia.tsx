import React from 'react';
import styles from './Hero.module.css';
import { MediaPlaceholder } from '@/components/MediaPlaceholder/MediaPlaceholder';

export const HeroMedia: React.FC = () => {
  return (
    <div className={styles.previewWindow}>
      {/* Chrome window top bar */}
      <div className={styles.windowBar}>
        <div className={styles.windowDots}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
        <div className={styles.windowUrl}>lemmo.studio/canvas/preview</div>
        <div style={{ width: '40px' }} />
      </div>

      {/* Main Hero Product Placeholder */}
      <MediaPlaceholder
        id="hero-demo"
        aspectRatio="16/9"
        minHeight="320px"
        label="Hero Live Interface Preview"
        type="interactive"
      />
    </div>
  );
};
