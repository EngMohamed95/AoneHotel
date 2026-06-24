import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TrustedBy } from './sections/TrustedBy';
import { Features } from './sections/Features';
import { Showcase } from './sections/Showcase';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { AIFeatures } from './sections/AIFeatures';
import { Integrations } from './sections/Integrations';
import { Testimonials } from './sections/Testimonials';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

function LandingPageContent() {
  return (
    <div className="min-h-screen flex flex-col font-sans select-none overflow-x-hidden bg-brandBg-light text-slate-800 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <TrustedBy />
        <Features />
        <Showcase />
        <WhyChooseUs />
        <AIFeatures />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    // Clean up dark mode settings from root and storage
    const root = document.documentElement;
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
    localStorage.removeItem('ewan_theme');
  }, []);

  return (
    <LanguageProvider>
      <LandingPageContent />
    </LanguageProvider>
  );
}
