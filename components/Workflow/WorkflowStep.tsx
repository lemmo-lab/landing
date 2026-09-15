import React from 'react';
import styles from './Workflow.module.css';
import { MediaPlaceholder } from '@/components/MediaPlaceholder/MediaPlaceholder';

interface WorkflowStepProps {
  number: string;
  title: string;
  description: string;
  placeholderId: string;
  type?: 'interactive' | 'video' | 'canvas';
}

export const WorkflowStep: React.FC<WorkflowStepProps> = ({
  number,
  title,
  description,
  placeholderId,
  type = 'interactive',
}) => {
  return (
    <div className={styles.stepCard}>
      <div className={styles.stepTop}>
        <span className={styles.stepNumber}>{number}</span>
        <span className={styles.stepIndicator}>Stage {number}</span>
      </div>

      <div>
        <h3 className={styles.stepTitle}>{title}</h3>
        <p className={styles.stepText}>{description}</p>
      </div>

      <div className={styles.mediaWrap}>
        <MediaPlaceholder
          id={placeholderId}
          aspectRatio="4/3"
          minHeight="180px"
          label={`Step ${number} — ${title}`}
          type={type}
        />
      </div>
    </div>
  );
};
