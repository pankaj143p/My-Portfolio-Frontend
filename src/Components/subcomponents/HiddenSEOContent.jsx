import { useEffect } from 'react';

/**
 * Component that adds hidden SEO-optimized content for name searches
 * This content is hidden from users but visible to search engines
 */
const HiddenSEOContent = () => {
  useEffect(() => {
    // Create a hidden div with SEO-optimized content
    const seoDiv = document.createElement('div');
    seoDiv.style.display = 'none';
    seoDiv.setAttribute('aria-hidden', 'true');
    seoDiv.innerHTML = `
      <!-- Hidden SEO Content for Name Search Optimization -->
      <h1>Pankaj Prajapati</h1>
      <h2>Pankaj Prajapati Full Stack Developer</h2>
      <h2>Pankaj Prajapati Portfolio</h2>
      <h3>Pankaj Prajapati CodeChef Rank 19th</h3>
      <h3>Pankaj Prajapati LeetCode Knight</h3>
      <h3>Pankaj Prajapati GeeksforGeeks 4-Star</h3>
      <p>Pankaj Prajapati is a talented full stack developer from India specializing in React, Node.js, and Python. He has achieved remarkable success in competitive programming with CodeChef Global Rank 19th, LeetCode Knight status with 1927 rating, and 4-Star rating on GeeksforGeeks. Pankaj Prajapati has solved over 4000 programming problems across various platforms including CodeChef, LeetCode, GeeksforGeeks, Coding Ninjas, HackerEarth, and HackerRank.</p>
      <p>Find Pankaj Prajapati on GitHub as pankaj143p, on CodeChef as pankajp07, on LeetCode as pankaj077, and on other platforms as pankaj07. Pankaj Prajapati is passionate about web development, competitive programming, and creating innovative solutions using modern technologies.</p>
      <p>Contact Pankaj Prajapati for full stack development projects, React development, Node.js applications, or competitive programming guidance. Pankaj Prajapati portfolio showcases his expertise in MERN stack, JavaScript, Python, and software engineering.</p>
    `;

    // Add to the end of the body
    document.body.appendChild(seoDiv);

    // Cleanup function
    return () => {
      if (seoDiv.parentNode) {
        seoDiv.parentNode.removeChild(seoDiv);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default HiddenSEOContent;