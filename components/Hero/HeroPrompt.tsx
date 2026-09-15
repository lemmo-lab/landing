'use client';

import React, { useState } from 'react';
import styles from './Hero.module.css';

const SAMPLE_PROMPTS = [
  'Fintech analytics dashboard with dark theme & live telemetry cards',
  'Multi-tier pricing matrix with monthly/annual billing switch',
  'AI canvas editor with floating node toolbar and token sidebar',
  'E-commerce order checkout with responsive summary & address form',
];

export const HeroPrompt: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<'idle' | 'generating' | 'completed'>('idle');
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    'Parsing interface requirements...',
    'Synthesizing Lemmo tokens & layout matrix...',
    'Injecting Satoshi & Oddval typography...',
    'Compiling responsive React component tree...',
    'Verifying WCAG 2.1 AA contrast ratios...',
  ];

  const handleGenerate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim() || status === 'generating') return;

    setStatus('generating');
    setStepIndex(0);

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setStatus('completed');
          return prev;
        }
        return prev + 1;
      });
    }, 600);
  };

  const handleChipClick = (sample: string) => {
    setPrompt(sample);
    if (status === 'completed') {
      setStatus('idle');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setPrompt('');
  };

  return (
    <div className={styles.promptBox} role="region" aria-label="Hero Product Prompt Simulator">
      <div className={styles.promptHeader}>
        <span className={styles.promptLabel}>// PRODUCT UI PREVIEW</span>
        <span className={styles.promptStatus}>
          <span className={styles.eyebrowDot} />
          {status === 'idle' ? 'Ready' : status === 'generating' ? 'Synthesizing...' : 'Generated (Live)'}
        </span>
      </div>

      <form onSubmit={handleGenerate}>
        <div className={styles.promptInputRow}>
          <textarea
            className={styles.promptTextarea}
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
              if (status === 'completed') setStatus('idle');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleGenerate();
              }
            }}
            placeholder="Tell the AI what you want to create... (e.g. A fintech telemetry dashboard with dark theme)"
            rows={2}
            disabled={status === 'generating'}
            aria-label="Describe what to create"
          />

          <button
            type="submit"
            className={styles.promptSubmitBtn}
            disabled={!prompt.trim() || status === 'generating'}
            aria-label="Generate Interface"
            title="Generate UI"
          >
            {status === 'generating' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="spin">
                <line x1="12" y1="2" x2="12" y2="6"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                <line x1="2" y1="12" x2="6" y2="12"></line>
                <line x1="18" y1="12" x2="22" y2="12"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            )}
          </button>
        </div>
      </form>

      {/* Suggested Chips */}
      {status === 'idle' && (
        <div className={styles.promptChips}>
          <span style={{ fontSize: '0.75rem', color: 'var(--lemu-color-font-muted)' }}>Try an example:</span>
          {SAMPLE_PROMPTS.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              className={styles.promptChip}
              onClick={() => handleChipClick(sample)}
            >
              {sample}
            </button>
          ))}
        </div>
      )}

      {/* Generating State */}
      {status === 'generating' && (
        <div className={styles.processingTicker}>
          <span>⚡ {steps[stepIndex]}</span>
          <span style={{ color: 'var(--lemu-color-font-muted)' }}>
            {stepIndex + 1}/{steps.length}
          </span>
        </div>
      )}

      {/* Completed State */}
      {status === 'completed' && (
        <div className={styles.resultBar}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--lemu-color-brand-lime)' }}>✔</span>
            <span style={{ color: 'var(--lemu-color-font-primary)', fontWeight: 500 }}>
              UI Components Compiled & Injected into Canvas Preview below!
            </span>
          </div>
          <button
            type="button"
            onClick={handleReset}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--lemu-color-font-muted)',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '0.75rem',
            }}
          >
            Try another prompt
          </button>
        </div>
      )}
    </div>
  );
};
