import { useEffect } from 'react';

/**
 * Custom hook for dynamic SEO meta tag management
 * Updates document title and meta tags based on current page/section
 */
export const useSEO = (options = {}) => {
  const {
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    siteName = 'Pankaj Prajapati Portfolio',
    twitterHandle = '@pankaj07'
  } = options;

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (property, content, name = null) => {
      let element;
      if (name) {
        element = document.querySelector(`meta[name="${name}"]`);
      } else {
        element = document.querySelector(`meta[property="${property}"]`);
      }

      if (element) {
        element.setAttribute(name ? 'content' : 'content', content);
      } else {
        element = document.createElement('meta');
        if (name) {
          element.setAttribute('name', name);
          element.setAttribute('content', content);
        } else {
          element.setAttribute('property', property);
          element.setAttribute('content', content);
        }
        document.head.appendChild(element);
      }
    };

    // Update meta description
    if (description) {
      updateMetaTag(null, description, 'description');
    }

    // Update meta keywords
    if (keywords) {
      updateMetaTag(null, keywords, 'keywords');
    }

    // Update Open Graph tags
    if (title) updateMetaTag('og:title', title);
    if (description) updateMetaTag('og:description', description);
    if (image) updateMetaTag('og:image', image);
    if (url) updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);
    updateMetaTag('og:site_name', siteName);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    if (title) updateMetaTag('twitter:title', title);
    if (description) updateMetaTag('twitter:description', description);
    if (image) updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', twitterHandle);
    updateMetaTag('twitter:creator', twitterHandle);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (url) {
      if (canonicalLink) {
        canonicalLink.setAttribute('href', url);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', url);
        document.head.appendChild(canonicalLink);
      }
    }

  }, [title, description, keywords, image, url, type, siteName, twitterHandle]);
};

/**
 * Predefined SEO configurations for different sections
 */
export const SEO_CONFIGS = {
  home: {
    title: 'Pankaj Prajapati - Full Stack Developer | CodeChef Rank 19th | LeetCode Knight',
    description: 'Full-stack developer specializing in React, Node.js. CodeChef Global Rank 19th, LeetCode Knight Coder (1927 rating), 4-Star GeeksforGeeks coder with 4000+ problems solved.',
    keywords: 'Pankaj Prajapati, full-stack developer, React developer, Node.js developer, CodeChef rank 19, LeetCode Knight, GeeksforGeeks 4-star, competitive programming',
    url: 'https://www.pankaj07.me/',
    image: '/heroimage.jpg'
  },
  about: {
    title: 'About Pankaj Prajapati - Full Stack Developer & Competitive Programmer',
    description: 'Learn about Pankaj Prajapati\'s journey as a full-stack developer, competitive programmer, and Computer Science Engineering student.',
    keywords: 'Pankaj Prajapati about, full-stack developer background, competitive programming journey, computer science student',
    url: 'https://www.pankaj07.me/#about',
    image: '/heroimage.jpg'
  },
  skills: {
    title: 'Pankaj Prajapati Skills - React, Node.js, Python, Competitive Programming',
    description: 'Explore Pankaj Prajapati\'s technical skills in full-stack development, React, Node.js, Python, and competitive programming expertise.',
    keywords: 'Pankaj Prajapati skills, React developer, Node.js developer, Python programmer, competitive programming skills',
    url: 'https://www.pankaj07.me/#skills',
    image: '/heroimage.jpg'
  },
  projects: {
    title: 'Pankaj Prajapati Projects - Full Stack Web Applications',
    description: 'View Pankaj Prajapati\'s portfolio projects including React applications, Node.js backends, and innovative web solutions.',
    keywords: 'Pankaj Prajapati projects, React projects, Node.js applications, web development portfolio',
    url: 'https://www.pankaj07.me/#projects',
    image: '/heroimage.jpg'
  },
  achievements: {
    title: 'Pankaj Prajapati Fullstack Developer',
    description: 'Discover Pankaj Prajapati\'s competitive programming achievements: CodeChef Global Rank 19th, LeetCode Knight Coder, GeeksforGeeks 4-Star.',
    keywords: 'Pankaj Prajapati achievements, CodeChef rank 19, LeetCode Knight, GeeksforGeeks 4-star, competitive programming awards',
    url: 'https://www.pankaj07.me/#achievements',
    image: '/heroimage.jpg'
  },
  contact: {
    title: 'Contact Pankaj Prajapati - Full Stack Developer',
    description: 'Get in touch with Pankaj Prajapati for collaboration opportunities, projects, or professional inquiries.',
    keywords: 'contact Pankaj Prajapati, hire full-stack developer, collaboration opportunities',
    url: 'https://www.pankaj07.me/#contact',
    image: '/heroimage.jpg'
  }
};
