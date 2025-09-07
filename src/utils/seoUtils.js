/**
 * SEO Utilities for enhanced search engine optimization
 */

/**
 * Generate structured data for coding achievements
 */
export const generateAchievementStructuredData = (achievements) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Pankaj Prajapati - Coding Achievements",
    "description": "Competitive programming achievements and coding milestones",
    "numberOfItems": achievements.length,
    "itemListElement": achievements.map((achievement, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Achievement",
        "name": achievement.title,
        "description": achievement.description,
        "award": achievement.title,
        "recipient": {
          "@type": "Person",
          "name": "Pankaj Prajapati"
        },
        "provider": {
          "@type": "Organization",
          "name": achievement.platform || "Coding Platform"
        }
      }
    }))
  };
};

/**
 * Generate structured data for coding profiles
 */
export const generateProfileStructuredData = (profiles) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Pankaj Prajapati - Coding Profiles",
    "description": "Professional coding profiles and competitive programming accounts",
    "numberOfItems": profiles.length,
    "itemListElement": profiles.map((profile, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "WebSite",
        "name": `${profile.platform} Profile`,
        "url": profile.link,
        "description": `Pankaj Prajapati's ${profile.platform} profile with ${profile.stats}`,
        "author": {
          "@type": "Person",
          "name": "Pankaj Prajapati",
          "alternateName": profile.username
        },
        "publisher": {
          "@type": "Organization",
          "name": profile.platform
        }
      }
    }))
  };
};

/**
 * Generate FAQ structured data for common questions
 */
export const generateFAQStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Pankaj Prajapati's highest CodeChef rating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pankaj Prajapati has achieved a highest rating of 1911 on CodeChef and secured Global Rank 19th in Starters 130 Division 4 (Rated)."
        }
      },
      {
        "@type": "Question",
        "name": "What is Pankaj Prajapati's LeetCode status?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pankaj Prajapati is a Knight Coder on LeetCode with a highest rating of 1927 and has solved over 1100 problems."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Pankaj Prajapati specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pankaj Prajapati specializes in full-stack development with expertise in React, Node.js, Python, JavaScript, and modern web technologies."
        }
      },
      {
        "@type": "Question",
        "name": "What are Pankaj Prajapati's competitive programming achievements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pankaj Prajapati has achieved CodeChef Global Rank 19th, LeetCode Knight status, GeeksforGeeks 4-Star rating, and Coding Ninjas AIR 16th position."
        }
      }
    ]
  };
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

/**
 * Update page title with site name
 */
export const updatePageTitle = (pageTitle) => {
  const baseTitle = "Pankaj Prajapati - Full Stack Developer";
  const fullTitle = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
  document.title = fullTitle;
  return fullTitle;
};

/**
 * Generate meta keywords from skills and achievements
 */
export const generateMetaKeywords = (skills = [], achievements = []) => {
  const baseKeywords = [
    "Pankaj Prajapati",
    "full-stack developer",
    "React developer",
    "Node.js developer",
    "competitive programming"
  ];

  const skillKeywords = skills.map(skill => `${skill} developer`);
  const achievementKeywords = achievements.map(achievement =>
    achievement.platform ? `${achievement.platform} ${achievement.title.toLowerCase()}` : achievement.title.toLowerCase()
  );

  return [...baseKeywords, ...skillKeywords, ...achievementKeywords].join(", ");
};

/**
 * Generate search-friendly URL slug
 */
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

/**
 * Track page views for SEO analytics
 */
export const trackPageView = (pagePath, pageTitle) => {
  // This can be integrated with Google Analytics, etc.
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }

  // Update document title
  updatePageTitle(pageTitle);
};
