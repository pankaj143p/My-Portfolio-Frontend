import React, { Suspense, lazy } from 'react';
import './App.css';

// Lazy load components for better performance
const Navbar = lazy(() => import('./Components/Navbar'));
const Bot = lazy(() => import('./Components/Bot'));
const Hero = lazy(() => import('./Components/Hero'));
const About = lazy(() => import('./Components/About'));
const Projects = lazy(() => import('./Components/Projects'));
const Contact = lazy(() => import('./Components/Contact'));
const Skills = lazy(() => import('./Components/Skills'));
const Hireme = lazy(() => import('./Components/Hireme'));
const Footer = lazy(() => import('./Components/Footer'));
const Certificates = lazy(() => import('./Components/Certificates'));
const Achievements = lazy(() => import('./Components/Achievements'));
const PerformanceMonitor = lazy(() => import('./Components/PerformanceMonitor'));
const NameSearchOptimizer = lazy(() => import('./Components/NameSearchOptimizer'));
const HiddenSEOContent = lazy(() => import('./Components/HiddenSEOContent'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

function App() {
  return (
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
  );
}

export default App;
