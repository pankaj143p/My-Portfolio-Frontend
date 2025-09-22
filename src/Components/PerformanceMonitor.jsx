import React, { useEffect } from 'react';
import { usePerformanceMonitor } from '../../hooks/usePerformance';

const PerformanceMonitor = () => {
  usePerformanceMonitor();

  useEffect(() => {
    // Monitor navigation timing
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      console.log('Navigation timing:', {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalTime: navigation.loadEventEnd - navigation.fetchStart
      });
    }

    // Monitor resource loading
    const resources = performance.getEntriesByType('resource');
    const slowResources = resources.filter(resource =>
      resource.duration > 1000 // Resources taking more than 1 second
    );

    if (slowResources.length > 0) {
      console.log('Slow resources:', slowResources.map(r => ({
        name: r.name,
        duration: r.duration,
        size: r.transferSize
      })));
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
