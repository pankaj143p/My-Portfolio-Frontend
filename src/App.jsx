import React, { Suspense, lazy, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Lazy load components for better performance
const Navbar = lazy(() => import('./Components/subcomponents/Navbar'));
const Bot = lazy(() => import('./Components/subcomponents/Bot'));
const Hero = lazy(() => import('./Components/subcomponents/Hero'));
const About = lazy(() => import('./Components/subcomponents/About'));
const Projects = lazy(() => import('./Components/subcomponents/Projects'));
const Contact = lazy(() => import('./Components/subcomponents/Contact'));
const Skills = lazy(() => import('./Components/subcomponents/Skills'));
const Hireme = lazy(() => import('./Components/subcomponents/Hireme'));
const Footer = lazy(() => import('./Components/subcomponents/Footer'));
const Certificates = lazy(() => import('./Components/subcomponents/Certificates'));
const Achievements = lazy(() => import('./Components/subcomponents/Achievements'));
const PerformanceMonitor = lazy(() => import('./Components/subcomponents/PerformanceMonitor'));
const NameSearchOptimizer = lazy(() => import('./Components/subcomponents/NameSearchOptimizer'));
const HiddenSEOContent = lazy(() => import('./Components/subcomponents/HiddenSEOContent'));
const LoadingScreen = lazy(() => import('./Components/effects/LoadingScreen'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Suspense fallback={null}>
            <LoadingScreen isLoading={isLoading} />
          </Suspense>
        )}
      </AnimatePresence>

      <Suspense fallback={<LoadingSpinner />}>
        <PerformanceMonitor />
        <NameSearchOptimizer />
        <HiddenSEOContent />
        <Navbar />
        <Bot />
        <Hero />
        <About />
        <Achievements />
        <Skills />
        <Hireme />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
