'use client';

import React, { useState } from 'react';
import styles from './ProductDemo.module.css';
import { MediaPlaceholder } from '@/components/MediaPlaceholder/MediaPlaceholder';
import { ArrowLeft, ArrowRight, Layout01, AiMagicWand01, CodeBrowser } from 'synthline/react';

interface StepData {
  id: string;
  stepNum: string;
  title: string;
  description: string;
  placeholderId: string;
  type: 'interactive' | 'video' | 'canvas';
  icon: React.ReactNode;
}

const STEPS: StepData[] = [
  {
    id: 'input',
    stepNum: 'STEP 01',
    title: 'User Prompt & Requirements',
    description: 'Enter your requirements in natural language or import a schema. Lemmo extracts semantic tokens, roles, and constraints.',
    placeholderId: 'demo-input',
    type: 'interactive',
    icon: <Layout01 size={14} strokeWidth={1.5} />,
  },
  {
    id: 'processing',
    stepNum: 'STEP 02',
    title: 'AI Processing & Layout Synthesis',
    description: 'The neural layout engine resolves visual hierarchy, binds CSS variables, and maps interactive component states.',
    placeholderId: 'demo-generation',
    type: 'video',
    icon: <AiMagicWand01 size={14} strokeWidth={1.5} />,
  },
  {
    id: 'result',
    stepNum: 'STEP 03',
    title: 'Final Production UI & Code',
    description: 'Inspect live DOM trees, copy production-ready React code, and verify WCAG 2.1 AA accessibility contracts.',
    placeholderId: 'demo-result',
    type: 'canvas',
    icon: <CodeBrowser size={14} strokeWidth={1.5} />,
  },
];

export const ProductDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = STEPS[activeStep];

  return (
    <section id="demo" className={styles.section} aria-labelledby="demo-title">
      <div className={styles.header}>
        <span className={styles.label}>// INTERACTIVE DEMO</span>
        <h2 id="demo-title" className={styles.title}>
          How Prompts Turn Into Interfaces
        </h2>
        <p className={styles.description}>
          Experience the three-stage synthesis pipeline: from your raw natural language prompt, 
          through neural component generation, to production-grade deliverables.
        </p>
      </div>

      {/* Step Navigation Tabs */}
      <div className={styles.tabNav} role="tablist" aria-label="Demo steps">
        {STEPS.map((step, idx) => (
          <button
            key={step.id}
            type="button"
            role="tab"
            aria-selected={activeStep === idx}
            className={`${styles.stepTab} ${activeStep === idx ? styles.active : ''}`}
            onClick={() => setActiveStep(idx)}
          >
            {step.icon}
            <span className={styles.stepBadge}>{step.stepNum}</span>
            <span>{step.title}</span>
          </button>
        ))}
      </div>

      {/* Active Demo Panel */}
      <div className={styles.demoCard}>
        <div className={styles.stepInfo}>
          <div>
            <div className={styles.stepName}>{current.stepNum} — {current.title}</div>
            <div className={styles.stepDesc}>{current.description}</div>
          </div>
          <span style={{ fontSize: '0.8125rem', fontFamily: 'monospace', color: 'var(--lemu-color-font-muted)' }}>
            Pipeline status: active
          </span>
        </div>

        {/* Media Placeholder for Current Step */}
        <MediaPlaceholder
          key={current.placeholderId}
          id={current.placeholderId}
          aspectRatio="16/9"
          minHeight="360px"
          label={current.title}
          type={current.type}
        />

        {/* Step Controls */}
        <div className={styles.controlsBar}>
          <button
            type="button"
            className={styles.navStepBtn}
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            <span>Previous Step</span>
          </button>
          <span style={{ fontSize: '0.875rem', color: 'var(--lemu-color-font-muted)' }}>
            Step {activeStep + 1} of {STEPS.length}
          </span>
          <button
            type="button"
            className={styles.navStepBtn}
            disabled={activeStep === STEPS.length - 1}
            onClick={() => setActiveStep((prev) => Math.min(STEPS.length - 1, prev + 1))}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <span>Next Step</span>
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};
