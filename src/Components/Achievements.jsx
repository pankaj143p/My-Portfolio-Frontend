import React from 'react';
import codechef from './CodingProfiles/cc-logo.svg';
import leetcode from './CodingProfiles/lc-logo.webp';
import geeksfogeeks from './CodingProfiles/gfg-logo.svg';
import codingninjas from './CodingProfiles/cn-logo.svg';
import hackerearth from './CodingProfiles/he-logo.png'
import hackerrank from './CodingProfiles/hr-logo.png'
import './style.css';
export default function Achievements() {
  const myAchievements = [
    {
      "des": "I got global rank 16th on CodeChef in Starters 124 and my highest rating is 1911 on Codechef",
    },
    {
      "des": "I got AIR 16th on Coding Ninjas World cup event and also I solved 2000+ problems on Coding Ninjas.",
    },
    {
      "des": "I'm knight coder with highest rating 1927 on Leetcode and also solved 700+ question on Leetcode.",
    },
    {
      "des": "I'm 4ht star coder with rating 1856 and college rank is 8 on Geeksfogeeks also I solved 700+ questions on Geeksforgeeks.",
    },

  ];
  //  coding profile list
  const codingProfiles = [
    {
      img: codechef,
      "link": "https://www.codechef.com/users/pankajp07",
      "name": "pankajp07",
    },
    {
      img: leetcode,
      "link": "https://leetcode.com/pankaj077",
      "name": "pankaj077"
    },
    {
      img: geeksfogeeks,
      "link": "https://auth.geeksforgeeks.org/user/pankaj07",
      "name": "pankaj07"
    },
    {
      img: codingninjas,
      "link": "https://www.codingninjas.com/studio/profile/pankaj07",
      "name": "pankaj07"
    },
    {
      img: hackerearth,
      "link": "https://www.codechef.com/users/i_am_pankaj",
      "name": "pankaj07"
    },
    {
      img: hackerrank,
      "link": "https://www.hackerrank.com/profile/i_am_pankaj",
      "name": "i_am_pankaj"
    },
  ]

  return (
    <section id="hireme" className="ml-[-12px] lg:ml-0 py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Achievements</span>
        </h3>

        {/* <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p> */}
      </div>

      {/* <div className="bg-gray-700 py-8 relative px-8 rounded-2xl  mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col items-center"> */}
      <div className='Achievements lg:px-36  px-48 center'>
        {myAchievements.map((Achievements, idx) => (
          <div className='achievements self-center text-2xl border-4 border-cyan-700 rounded-2xl mt-12 p-6' key={idx}>{Achievements.des}
            {/* <p className='description'>{Achievements.dis}</p> */}

          </div>

        ))}
        {/* coding profiles */}
        <div className="mt-12 text-center coding-profiles ml-[-8px] lg:ml-0">
          <h3 className="text-4xl font-semibold">
            Coding <span className="text-cyan-600">Profiles</span>
          </h3>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>{codingProfiles.map((cp, idx) => (
            <div className='items-center border-2 mt-14 rounded-3xl w-64 bg-[#1F2937] py-6 px-6 text-center text-cyan-600' key={idx}>
              <div className='flex justify-center items-center mb-2'>
                <img className='self-center h-16' src={cp.img} alt="" />
              </div>
              Link here:- <a className='text-white  border-white hover:text-cyan-600' href={cp.link} target='_blank'> {cp.name}
              </a>
            </div>
          ))}

          </div>

        </div>
      </div>
    </section>
  );
}





