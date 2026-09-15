import React from 'react';
import styles from './SocialProof.module.css';
import { Flash } from 'synthline/react';

const PARTNER_LOGOS = [
  'Vercel',
  'Supabase',
  'Linear',
  'Stripe',
  'Raycast',
  'Figma',
];

const METRICS = [
  { value: '10x', label: 'Faster Time-to-Ship' },
  { value: '100%', label: 'Design Token Compliance' },
  { value: '50,000+', label: 'Components Synthesized' },
  { value: '99.99%', label: 'Uptime & Reliability' },
];

const TESTIMONIALS = [
  {
    quote:
      "Lemmo transformed our entire design-to-code sprint. Instead of back-and-forth Figma debates, our developers and designers review live tokenized components together.",
    name: 'Sarah Chen',
    role: 'Head of Product Design at ScaleGrid',
    initials: 'SC',
  },
  {
    quote:
      "The token isolation and bilingual font switching are unmatched. Generating RTL Persian interfaces with proper ligatures and Satoshi tabular numbers took seconds.",
    name: 'Kian Mehrabi',
    role: 'Principal Frontend Architect',
    initials: 'KM',
  },
  {
    quote:
      "Finally, an AI tool that respects real design systems rather than vomiting generic, hardcoded inline CSS. Everything connects to our core variables.",
    name: 'Marcus Vance',
    role: 'Lead Design Systems Engineer',
    initials: 'MV',
  },
];

export const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className={styles.section} aria-labelledby="proof-title">
      <div className={styles.header}>
        <span className={styles.label}>// SOCIAL PROOF &amp; TRUST</span>
        <h2 id="proof-title" className={styles.title}>
          Trusted by Teams Building the Future of Software
        </h2>
      </div>

      {/* Partner Logos */}
      <div className={styles.logosGrid} aria-label="Partner Companies">
        {PARTNER_LOGOS.map((company, idx) => (
          <div key={idx} className={styles.logoBadge}>
            <Flash size={14} strokeWidth={1.5} style={{ color: 'var(--lemu-color-brand-lime)' }} />
            <span>{company}</span>
          </div>
        ))}
      </div>

      {/* Metrics Banner */}
      <div className={styles.metricsGrid}>
        {METRICS.map((metric, idx) => (
          <div key={idx} className={styles.metricCard}>
            <div className={`${styles.metricValue} tabular-nums`}>{metric.value}</div>
            <div className={styles.metricLabel}>{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className={styles.testimonialsGrid}>
        {TESTIMONIALS.map((t, idx) => (
          <blockquote key={idx} className={styles.testimonialCard}>
            <p className={styles.quoteText}>&ldquo;{t.quote}&rdquo;</p>
            <footer className={styles.authorRow}>
              <div className={styles.avatar} aria-hidden="true">
                {t.initials}
              </div>
              <div className={styles.authorInfo}>
                <cite className={styles.authorName}>{t.name}</cite>
                <span className={styles.authorRole}>{t.role}</span>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};
