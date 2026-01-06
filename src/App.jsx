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

// New enhanced components
const CustomCursor = lazy(() => import('./Components/effects/CustomCursor'));
const ParticleBackground = lazy(() => import('./Components/effects/ParticleBackground'));
const ScrollProgress = lazy(() => import('./Components/effects/ScrollProgress'));
const ScrollToTop = lazy(() => import('./Components/effects/ScrollToTop'));
const LoadingScreen = lazy(() => import('./Components/effects/LoadingScreen'));
const Experience = lazy(() => import('./Components/sections/Experience'));
const AnimatedStats = lazy(() => import('./Components/sections/AnimatedStats'));
const Testimonials = lazy(() => import('./Components/sections/Testimonials'));

// Loading component (kept as fallback)
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth intro
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
        {/* Effects Layer */}
        <CustomCursor />
        <ParticleBackground />
        <ScrollProgress />
        <ScrollToTop />
        
        {/* SEO Components */}
        <PerformanceMonitor />
        <NameSearchOptimizer />
        <HiddenSEOContent />
        
        {/* Main Content */}
        <Navbar />
        <Bot />
        <Hero />
        <AnimatedStats />
        <About />
        <Experience />
        <Achievements />
        <Skills />
        <Hireme />
        <Projects />
        <Testimonials />
        <Certificates />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
