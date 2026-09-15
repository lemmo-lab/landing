import React from 'react';
import styles from './BeforeAfter.module.css';
import { MediaPlaceholder } from '@/components/MediaPlaceholder/MediaPlaceholder';
import { X01, Check01 } from 'synthline/react';

export const BeforeAfter: React.FC = () => {
  return (
    <section id="before-after" className={styles.section} aria-labelledby="before-after-title">
      <div className={styles.header}>
        <span className={styles.label}>// BEFORE &amp; AFTER</span>
        <h2 id="before-after-title" className={styles.title}>
          The Radical Shift in Product Delivery
        </h2>
        <p className={styles.description}>
          Compare the traditional multi-week design-to-engineering handoff against 
          Lemmo’s instantaneous, token-governed synthesis engine.
        </p>
      </div>

      <div className={styles.comparisonGrid}>
        {/* BEFORE CARD */}
        <div className={styles.beforeCard}>
          <div className={styles.cardHeader}>
            <span className={styles.statusTagDanger}>
              <X01 size={14} strokeWidth={2} />
              <span>BEFORE LEMMO</span>
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--lemu-color-font-muted)' }}>2–4 Weeks</span>
          </div>

          <div>
            <h3 className={styles.colTitle}>The Fragmented Manual Process</h3>
            <p className={styles.colDesc}>
              Static Figma wireframes, endless redesign meetings, manual token copy-pasting, 
              and permanent divergence between mockups and production React code.
            </p>
          </div>

          <ul className={styles.bulletList}>
            <li className={styles.bulletItemDanger}>
              <X01 size={16} strokeWidth={2} style={{ color: '#ff5462' }} />
              <span>Manual token maintenance across multiple tools</span>
            </li>
            <li className={styles.bulletItemDanger}>
              <X01 size={16} strokeWidth={2} style={{ color: '#ff5462' }} />
              <span>Broken responsive layouts discovered only during QA</span>
            </li>
            <li className={styles.bulletItemDanger}>
              <X01 size={16} strokeWidth={2} style={{ color: '#ff5462' }} />
              <span>No automated WCAG contrast validation</span>
            </li>
          </ul>

          <MediaPlaceholder
            id="before-process"
            aspectRatio="16/10"
            minHeight="220px"
            label="Legacy Manual Handoff"
            type="image"
          />
        </div>

        {/* AFTER CARD */}
        <div className={styles.afterCard}>
          <div className={styles.cardHeader}>
            <span className={styles.statusTagSuccess}>
              <Check01 size={14} strokeWidth={2} />
              <span>WITH LEMMO AI</span>
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--lemu-color-brand-lime)', fontWeight: 'bold' }}>&lt; 60 Seconds</span>
          </div>

          <div>
            <h3 className={styles.colTitle}>Autonomous Prompt-to-Production</h3>
            <p className={styles.colDesc}>
              Single-source token architecture with instant visual canvas compilation, 
              built-in dual-script typography, and 100% reusable production components.
            </p>
          </div>

          <ul className={styles.bulletList}>
            <li className={styles.bulletItemSuccess}>
              <Check01 size={16} strokeWidth={2} style={{ color: 'var(--lemu-color-brand-lime)' }} />
              <span>Zero design drift: backed directly by CSS variables</span>
            </li>
            <li className={styles.bulletItemSuccess}>
              <Check01 size={16} strokeWidth={2} style={{ color: 'var(--lemu-color-brand-lime)' }} />
              <span>Bilingual LTR/RTL support without broken cursive tracking</span>
            </li>
            <li className={styles.bulletItemSuccess}>
              <Check01 size={16} strokeWidth={2} style={{ color: 'var(--lemu-color-brand-lime)' }} />
              <span>Instant WCAG 2.1 AA verification and live dark theme</span>
            </li>
          </ul>

          <MediaPlaceholder
            id="after-process"
            aspectRatio="16/10"
            minHeight="220px"
            label="Lemmo Autonomous Synthesis"
            type="canvas"
          />
        </div>
      </div>
    </section>
  );
};
