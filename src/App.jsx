import React, { Suspense, lazy, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

const Navbar = lazy(() => import('./Components/subcomponents/Navbar'));
const Bot = lazy(() => import('./Components/subcomponents/Bot'));
const About = lazy(() => import('./Components/subcomponents/About'));
const Experience = lazy(() => import('./Components/subcomponents/Experience'));
const Skills = lazy(() => import('./Components/subcomponents/Skills'));
const Projects = lazy(() => import('./Components/subcomponents/Projects'));
const Footer = lazy(() => import('./Components/subcomponents/Footer'));
const PerformanceMonitor = lazy(() => import('./Components/subcomponents/PerformanceMonitor'));
const NameSearchOptimizer = lazy(() => import('./Components/subcomponents/NameSearchOptimizer'));
const HiddenSEOContent = lazy(() => import('./Components/subcomponents/HiddenSEOContent'));
const LoadingScreen = lazy(() => import('./Components/effects/LoadingScreen'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#0a0f0a' }}>
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
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
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
