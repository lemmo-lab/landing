'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Brand Logo */}
        <a href="#hero" className={styles.logoLink} onClick={closeMenu}>
          <div className={styles.logoIcon}>L</div>
          <span>Lemmo</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <a href="#showcase" className={styles.navLink}>Product</a>
          <a href="#demo" className={styles.navLink}>Interactive Demo</a>
          <a href="#workflow" className={styles.navLink}>How it Works</a>
          <a href="#usecases" className={styles.navLink}>Use Cases</a>
          <a href="#pricing" className={styles.navLink}>Pricing</a>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.authGroup}>
          <button type="button" className={styles.loginBtn}>Log In</button>
          <a href="#cta" className={styles.ctaBtn}>
            <span>Start Building</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className={styles.mobileDrawer} role="dialog" aria-modal="true">
          <a href="#showcase" className={styles.mobileNavLink} onClick={closeMenu}>Product</a>
          <a href="#demo" className={styles.mobileNavLink} onClick={closeMenu}>Interactive Demo</a>
          <a href="#workflow" className={styles.mobileNavLink} onClick={closeMenu}>How it Works</a>
          <a href="#usecases" className={styles.mobileNavLink} onClick={closeMenu}>Use Cases</a>
          <a href="#pricing" className={styles.mobileNavLink} onClick={closeMenu}>Pricing</a>
          <div className={styles.mobileActions}>
            <button type="button" className={styles.loginBtn} onClick={closeMenu} style={{ textAlign: 'center' }}>
              Log In
            </button>
            <a href="#cta" className={styles.ctaBtn} onClick={closeMenu} style={{ justifyContent: 'center' }}>
              Start Building Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
