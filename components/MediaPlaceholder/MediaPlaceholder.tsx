import React from 'react';
import styles from './MediaPlaceholder.module.css';

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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          ) : type === 'interactive' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          ) : type === 'canvas' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
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
