import { useEffect } from 'react';
import { useSEO, SEO_CONFIGS } from '../../hooks/useSEO';
import { updatePageTitle, trackPageView } from '../../utils/seoUtils';

/**
 * SEO Section Wrapper Component
 * Applies appropriate SEO settings for different portfolio sections
 */
const SEOSection = ({
  section,
  children,
  customTitle,
  customDescription,
  customKeywords
}) => {
  // Apply SEO settings based on section
  const seoConfig = SEO_CONFIGS[section] || SEO_CONFIGS.home;

  // Override with custom values if provided
  const finalConfig = {
    ...seoConfig,
    ...(customTitle && { title: customTitle }),
    ...(customDescription && { description: customDescription }),
    ...(customKeywords && { keywords: customKeywords })
  };

  useSEO(finalConfig);

  useEffect(() => {
    // Track page view for analytics
    const sectionPath = section === 'home' ? '/' : `/#${section}`;
    trackPageView(sectionPath, finalConfig.title);

    // Update page title
    updatePageTitle(finalConfig.title);
  }, [section, finalConfig.title]);

  return <>{children}</>;
};

export default SEOSection;