import React from 'react';
import styles from './MediaPlaceholder.module.css';
import { VideoCamera, Sliders01, LayersTwo, Image03 } from 'synthline/react';

interface MediaPlaceholderProps {
  id: string;
  aspectRatio?: string; // e.g. "16/9", "4/3", "21/9"
  minHeight?: string;
  maxHeight?: string;
  label?: string;
  type?: 'image' | 'video' | 'interactive' | 'canvas';
  className?: string;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  id,
  aspectRatio = '16/9',
  minHeight,
  maxHeight,
  label,
  type = 'image',
  className = '',
}) => {
  return (
    <div
      data-media={id}
      className={`${styles.container} ${className}`}
      style={{
        aspectRatio,
        minHeight: minHeight || undefined,
        maxHeight: maxHeight || undefined,
      }}
      role="region"
      aria-label={`Media placeholder for ${id}`}
    >
      <div className={styles.gridPattern} aria-hidden="true" />
      <div className={styles.radialGlow} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.iconWrap} aria-hidden="true">
          {type === 'video' ? (
            <VideoCamera size={22} strokeWidth={1.5} />
          ) : type === 'interactive' ? (
            <Sliders01 size={22} strokeWidth={1.5} />
          ) : type === 'canvas' ? (
            <LayersTwo size={22} strokeWidth={1.5} />
          ) : (
            <Image03 size={22} strokeWidth={1.5} />
          )}
        </div>
        <span className={styles.title}>MEDIA PLACEHOLDER</span>
        <div className={styles.assetTag}>
          <span>asset:</span>
          <strong>{id}</strong>
        </div>
        <span className={styles.metaText}>
          {label ? `${label} • ` : ''}ratio: {aspectRatio}
        </span>
      </div>
    </div>
  );
};
