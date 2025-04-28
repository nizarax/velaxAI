import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import BrandLogos from './components/BrandLogos';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import LeadForm from './components/LeadForm';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <BrandLogos />
        <HowItWorks />
        <Testimonials />
        <AboutSection />
        <FAQSection />
        <LeadForm />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;