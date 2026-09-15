import React from 'react';
import styles from './UseCases.module.css';
import { MediaPlaceholder } from '@/components/MediaPlaceholder/MediaPlaceholder';

interface UseCaseProps {
  number: string;
  title: string;
  description: string;
  placeholderId: string;
  tags: string[];
  type?: 'interactive' | 'video' | 'canvas' | 'image';
}

export const UseCase: React.FC<UseCaseProps> = ({
  number,
  title,
  description,
  placeholderId,
  tags,
  type = 'interactive',
}) => {
  return (
    <article className={styles.useCaseCard} aria-labelledby={`usecase-title-${number}`}>
      <div className={styles.contentSide}>
        <span className={styles.caseNumber}>{number}</span>
        <h3 id={`usecase-title-${number}`} className={styles.caseTitle}>{title}</h3>
        <p className={styles.caseDesc}>{description}</p>
        <div className={styles.tagsRow}>
          {tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>#{tag}</span>
          ))}
        </div>
      </div>

      <div className={styles.mediaSide}>
        <MediaPlaceholder
          id={placeholderId}
          aspectRatio="16/10"
          minHeight="240px"
          label={title}
          type={type}
        />
      </div>
    </article>
  );
};
