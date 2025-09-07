import { useEffect } from 'react';

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals using native APIs
    if ('PerformanceObserver' in window) {
      try {
        // Monitor Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Monitor Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          console.log('CLS:', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Cleanup observers on unmount
        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.warn('Performance monitoring not fully supported:', error);
      }
    }
  }, []);
};

// Image optimization hook
export const useOptimizedImage = (src, { width, height, quality = 80 } = {}) => {
  const optimizedSrc = `${src}?w=${width}&h=${height}&q=${quality}&fm=webp`;

  return {
    src: optimizedSrc,
    srcSet: `
      ${src}?w=${width}&h=${height}&q=${quality}&fm=webp ${width}w,
      ${src}?w=${width * 2}&h=${height * 2}&q=${quality}&fm=webp ${width * 2}w
    `,
    sizes: `(max-width: 768px) ${width}px, ${width * 2}px`
  };
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  fontLink.as = 'style';
  document.head.appendChild(fontLink);

  // Preload critical images
  const heroImage = new Image();
  heroImage.src = '/heroimage.jpg';
  heroImage.loading = 'eager';
};

// Bundle size analyzer (development only)
export const useBundleAnalyzer = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Bundle analyzer: Check network tab for chunk sizes');
    }
  }, []);
};
