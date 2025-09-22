import { useEffect } from 'react';

/**
 * Component specifically optimized for exact name searches
 * Adds additional structured data and meta tags for "Pankaj Prajapati" searches
 */
const NameSearchOptimizer = () => {
  useEffect(() => {
    // Add additional meta tags for name search optimization
    const addMetaTag = (name, content) => {
      const existingTag = document.querySelector(`meta[name="${name}"]`);
      if (!existingTag) {
        const metaTag = document.createElement('meta');
        metaTag.name = name;
        metaTag.content = content;
        document.head.appendChild(metaTag);
      }
    };

    // Add name-specific meta tags
    addMetaTag('author', 'Pankaj Prajapati');
    addMetaTag('publisher', 'Pankaj Prajapati');
    addMetaTag('creator', 'Pankaj Prajapati');
    addMetaTag('application-name', 'Pankaj Prajapati Portfolio');

    // Add additional structured data for name search
    const nameSearchSchema = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "@id": "https://www.pankaj07.me/#person",
        "name": "Pankaj Prajapati",
        "alternateName": [
          "Pankaj Prajapati",
          "pankaj07",
          "pankaj143p",
          "Pankaj Kumar Prajapati",
          "Pankaj Prajapati Developer"
        ],
        "description": "Pankaj Prajapati is a Full Stack Developer specializing in React, Node.js, and competitive programming. He has achieved CodeChef Global Rank 19th, LeetCode Knight status with 1927 rating, and is a 4-Star coder on GeeksforGeeks.",
        "url": "https://www.pankaj07.me/",
        "image": "https://www.pankaj07.me/heroimage.jpg",
        "sameAs": [
          "https://github.com/pankaj143p",
          "https://www.linkedin.com/in/pankaj-prajapati-7619bb226/",
          "https://www.codechef.com/users/pankajp07",
          "https://leetcode.com/pankaj077",
          "https://auth.geeksforgeeks.org/user/pankaj07",
          "https://www.codingninjas.com/studio/profile/pankaj07",
          "https://www.hackerearth.com/@pankaj07/",
          "https://www.hackerrank.com/profile/i_am_pankaj",
          "https://www.instagram.com/pankaj07._/",
          "https://twitter.com/Pankaj07__",
          "https://www.facebook.com/profile.php?id=100070913362312"
        ],
        "jobTitle": "Full Stack Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Self-Employed"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "India"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Computer Science Engineering"
        },
        "knowsAbout": [
          "Full Stack Development",
          "React.js",
          "Node.js",
          "Python",
          "JavaScript",
          "Java",
          "C++",
          "MERN Stack",
          "Competitive Programming",
          "Data Structures & Algorithms",
          "Web Development",
          "AI/ML",
          "Computer Science",
          "Software Engineering"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "CodeChef Global Rank 19th",
            "description": "Achieved Global Rank 19th in CodeChef Starters 130 Division 4 (Rated)"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "LeetCode Knight Coder",
            "description": "Achieved Knight status with rating 1927 and solved 1100+ problems"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "GeeksforGeeks 4-Star Coder",
            "description": "Earned 4-Star rating with 1856 score and solved 1200+ problems"
          }
        ],
        "award": [
          "CodeChef Global Rank 19th",
          "LeetCode Knight Coder",
          "GeeksforGeeks 4-Star Coder",
          "Coding Ninjas AIR 16th"
        ],
        "programmingLanguage": [
          "JavaScript",
          "Python",
          "Java",
          "C++",
          "SQL",
          "HTML",
          "CSS"
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.pankaj07.me/"
        }
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.pankaj07.me/"
          }
        ]
      }
    };

    // Add the name search schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-name-search-optimizer', 'true');
    script.textContent = JSON.stringify(nameSearchSchema, null, 2);
    document.head.appendChild(script);

    // Add additional name variations to keywords
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      const currentKeywords = keywordsMeta.getAttribute('content');
      const additionalKeywords = 'Pankaj Prajapati developer, Pankaj Prajapati portfolio, Pankaj Prajapati full stack, Pankaj Prajapati CodeChef, Pankaj Prajapati LeetCode, Pankaj Prajapati GeeksforGeeks';
      keywordsMeta.setAttribute('content', currentKeywords + ', ' + additionalKeywords);
    }

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-name-search-optimizer]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default NameSearchOptimizer;