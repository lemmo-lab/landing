'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { LemmoMark } from '@/components/icons/LemmoLogo';
import { ArrowRight, Menu02, X01 } from 'synthline/react';

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
        {/* Brand Logo with LemmoMark (3 circles constellation) */}
        <a href="#hero" className={styles.logoLink} onClick={closeMenu}>
          <LemmoMark size={28} style={{ color: 'var(--lemu-color-brand-lime)' }} />
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
            <ArrowRight size={14} strokeWidth={1.5} />
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
            <X01 size={20} strokeWidth={1.5} />
          ) : (
            <Menu02 size={20} strokeWidth={1.5} />
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
