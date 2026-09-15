import React from 'react';
import styles from './Workflow.module.css';
import { WorkflowStep } from './WorkflowStep';
import { PenTool01, AiCpu, Sliders01 } from 'synthline/react';

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className={styles.section} aria-labelledby="workflow-title">
      <div className={styles.header}>
        <span className={styles.label}>// THREE-STEP WORKFLOW</span>
        <h2 id="workflow-title" className={styles.title}>
          From Thought to Production in Minutes
        </h2>
        <p className={styles.description}>
          No complex setup, no manual design synchronization. Describe what you need, 
          let AI construct the components, and refine interactively.
        </p>
      </div>

      <div className={styles.workflowGrid}>
        <WorkflowStep
          number="01"
          title="Describe"
          description="Enter your requirements in natural language or supply data models. The AI maps design tokens, layouts, and constraints."
          placeholderId="workflow-describe"
          type="interactive"
          icon={<PenTool01 size={20} strokeWidth={1.5} />}
        />

        <WorkflowStep
          number="02"
          title="Generate"
          description="AI creates responsive, accessible React components with clean CSS variables and semantic HTML structure."
          placeholderId="workflow-generate"
          type="video"
          icon={<AiCpu size={20} strokeWidth={1.5} />}
        />

        <WorkflowStep
          number="03"
          title="Refine"
          description="Directly tweak typography, theme colors, and layout in the live visual canvas, then export production code."
          placeholderId="workflow-refine"
          type="canvas"
          icon={<Sliders01 size={20} strokeWidth={1.5} />}
        />
      </div>
    </section>
  );
};
