import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerContainer}>
        <div className={styles.topGrid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <a href="#hero" className={styles.brandLogo}>
              <div className={styles.brandIcon}>L</div>
              <span>Lemmo AI</span>
            </a>
            <p className={styles.brandMotto}>
              Turning natural language into production-grade React components, single-source design tokens, 
              and resilient multi-theme user interfaces.
            </p>
          </div>

          {/* Product Links */}
          <div className={styles.linkCol}>
            <div className={styles.colHeading}>Product</div>
            <a href="#showcase" className={styles.footerLink}>Showcase</a>
            <a href="#demo" className={styles.footerLink}>Interactive Demo</a>
            <a href="#workflow" className={styles.footerLink}>Workflow</a>
            <a href="#usecases" className={styles.footerLink}>Use Cases</a>
            <a href="#pricing" className={styles.footerLink}>Pricing</a>
          </div>

          {/* Resources */}
          <div className={styles.linkCol}>
            <div className={styles.colHeading}>Resources</div>
            <a href="/docs" className={styles.footerLink}>Documentation</a>
            <a href="/tokens" className={styles.footerLink}>Design Tokens</a>
            <a href="/fonts" className={styles.footerLink}>Web Fonts</a>
            <a href="/changelog" className={styles.footerLink}>Changelog</a>
          </div>

          {/* Company */}
          <div className={styles.linkCol}>
            <div className={styles.colHeading}>Company</div>
            <a href="#about" className={styles.footerLink}>About Lemmo</a>
            <a href="#blog" className={styles.footerLink}>Engineering Blog</a>
            <a href="#careers" className={styles.footerLink}>Careers</a>
            <a href="#brand" className={styles.footerLink}>Brand Assets</a>
          </div>

          {/* Legal */}
          <div className={styles.linkCol}>
            <div className={styles.colHeading}>Legal</div>
            <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
            <a href="#terms" className={styles.footerLink}>Terms of Service</a>
            <a href="#security" className={styles.footerLink}>Security</a>
            <a href="#cookies" className={styles.footerLink}>Cookie Settings</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomRow}>
          <div>
            &copy; {new Date().getFullYear()} Lemmo AI Inc. All rights reserved. Single-source token governed.
          </div>

          {/* Social Links */}
          <div className={styles.socialLinks} aria-label="Social links">
            <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="X / Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </a>

            <a href="https://discord.com" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="Discord">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6h0a14.5 14.5 0 0 0-4-1.5 9.6 9.6 0 0 0-.4 1 12 12 0 0 0-3.2 0 9.6 9.6 0 0 0-.4-1A14.5 14.5 0 0 0 6 6 15.3 15.3 0 0 0 3 17.5a14.9 14.9 0 0 0 4.5 2.3 11 11 0 0 0 1-1.6 9.7 9.7 0 0 1-1.5-.7l.3-.2a10.8 10.8 0 0 0 9.4 0l.3.2a9.7 9.7 0 0 1-1.5.7 11 11 0 0 0 1 1.6 14.9 14.9 0 0 0 4.5-2.3A15.3 15.3 0 0 0 18 6z"></path>
                <circle cx="8.5" cy="12.5" r="1.5"></circle>
                <circle cx="15.5" cy="12.5" r="1.5"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
