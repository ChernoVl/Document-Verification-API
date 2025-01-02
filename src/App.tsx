import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

const App: React.FC = () => {
  return (
      <main className="min-h-screen bg-background">
        <Header />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
  );
};

export default App;
