import React, { Suspense, lazy, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

const Navbar = lazy(() => import('./Components/subcomponents/Navbar'));
const Bot = lazy(() => import('./Components/subcomponents/Bot'));
const About = lazy(() => import('./Components/subcomponents/About'));
const GitHub = lazy(() => import('./Components/subcomponents/GitHub'));
const Stack = lazy(() => import('./Components/subcomponents/Skills'));
const Experience = lazy(() => import('./Components/subcomponents/Experience'));
const ProofOfWork = lazy(() => import('./Components/subcomponents/Projects'));
const Contact = lazy(() => import('./Components/subcomponents/Contact'));
const Footer = lazy(() => import('./Components/subcomponents/Footer'));
const PerformanceMonitor = lazy(() => import('./Components/subcomponents/PerformanceMonitor'));
const NameSearchOptimizer = lazy(() => import('./Components/subcomponents/NameSearchOptimizer'));
const HiddenSEOContent = lazy(() => import('./Components/subcomponents/HiddenSEOContent'));

const LoadingScreen = () => {
  const lines = [
    '> initializing portfolio...',
    '> loading modules...',
    '> compiling components...',
    '> ready.',
  ];
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    lines.forEach((_, i) => {
      setTimeout(() => setVisible(v => [...v, i]), i * 400);
    });
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ backgroundColor: '#080c10' }}>
      <div className="font-mono text-sm space-y-2 w-72">
        {lines.map((line, i) => (
          <div
            key={i}
            className="transition-opacity duration-300"
            style={{ opacity: visible.includes(i) ? 1 : 0, color: i === lines.length - 1 ? '#22d3ee' : '#6b7280' }}
          >
            {line}
            {visible.includes(i) && i === visible.length - 1 && i < lines.length - 1 && (
              <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse align-middle" />
            )}
          </div>
        ))}
        {visible.length === lines.length && (
          <div className="mt-4 h-0.5 bg-cyan-500/20 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-400 rounded-full" style={{ animation: 'expand 0.6s ease-out forwards' }} />
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <Suspense fallback={null}>
          <PerformanceMonitor />
          <NameSearchOptimizer />
          <HiddenSEOContent />
          <Navbar />
          <Bot />
          <About />
          <Experience />
          <GitHub />
          <Stack />
          <ProofOfWork />
          <Contact />
          <Footer />
        </Suspense>
      )}
    </>
  );
}

export default App;
