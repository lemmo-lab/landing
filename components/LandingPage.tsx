import React from 'react';
import styles from './LandingPage.module.css';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { ProductShowcase } from './ProductShowcase/ProductShowcase';
import { ProductDemo } from './ProductDemo/ProductDemo';
import { Workflow } from './Workflow/Workflow';
import { UseCases } from './UseCases/UseCases';
import { SocialProof } from './SocialProof/SocialProof';
import { BeforeAfter } from './BeforeAfter/BeforeAfter';
import { FinalCTA } from './FinalCTA/FinalCTA';
import { Footer } from './Footer/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main id="main" className={styles.mainContent}>
        <Hero />
        <ProductShowcase />
        <ProductDemo />
        <Workflow />
        <UseCases />
        <SocialProof />
        <BeforeAfter />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};
