import React from "react";
import codechef from "../../CodingProfiles/cc-logo.svg";
import leetcode from "../../CodingProfiles/lc-logo.webp";
import geeksfogeeks from "../../CodingProfiles/gfg-logo.svg";
import codingninjas from "../../CodingProfiles/cn-logo.svg";
import hackerearth from "../../CodingProfiles/he-logo.png";
import hackerrank from "../../CodingProfiles/hr-logo.png";
import { useSEO, SEO_CONFIGS } from "../../hooks/useSEO";
import StructuredDataInjector from '../../seo/StructuredDataInjector';

const Achievements = () => {
  useSEO(SEO_CONFIGS.ACHIEVEMENTS);

  return (
    <div>
      <StructuredDataInjector />
      <h1>Achievements</h1>
      <div>
        <h2>Competitive Programming</h2>
        <div>
          <img src={codechef} alt="CodeChef" />
          <img src={leetcode} alt="LeetCode" />
          <img src={geeksfogeeks} alt="GeeksforGeeks" />
          <img src={codingninjas} alt="Coding Ninjas" />
          <img src={hackerearth} alt="HackerEarth" />
          <img src={hackerrank} alt="HackerRank" />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
