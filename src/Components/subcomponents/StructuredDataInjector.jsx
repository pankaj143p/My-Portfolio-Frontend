import { useEffect } from 'react';
import { generateAchievementStructuredData, generateProfileStructuredData, generateFAQStructuredData } from '../utils/seoUtils';

/**
 * Component for dynamically injecting structured data (JSON-LD) into the page
 * This helps search engines better understand the content and improves SEO
 */
const StructuredDataInjector = ({ type, data }) => {
  useEffect(() => {
    // Remove existing structured data for this type
    const existingScript = document.querySelector(`script[data-structured-type="${type}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Create new structured data script
    let structuredData;

    switch (type) {
      case 'achievements':
        structuredData = generateAchievementStructuredData(data);
        break;
      case 'profiles':
        structuredData = generateProfileStructuredData(data);
        break;
      case 'faq':
        structuredData = generateFAQStructuredData();
        break;
      default:
        structuredData = data;
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-structured-type', type);
      script.textContent = JSON.stringify(structuredData, null, 2);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector(`script[data-structured-type="${type}"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null; // This component doesn't render anything
};

export default StructuredDataInjector;