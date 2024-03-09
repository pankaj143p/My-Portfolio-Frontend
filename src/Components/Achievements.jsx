import React from 'react';
import codechef from './CodingProfiles/cc-logo.svg';

export default function Achievements() {
    const myAchievements = [
        {
         "des" : "I got global rank 3rd on CodeChef in Starters 124 and my highest rating is 1716 on ocdechef",
        },
        {
         "des" : "I got AIR 16th on Coding Ninjas World cup event and also I solved 2000+ problems on Coding Ninjas.",
        },
        {
          "des" : "I'm knight coder with highest rating 1927 on Leetcode and also solved 700+ question on Leetcode.",
         },
         {
          "des" : "My all timk rank is 87 in weekly contest and college rank is 8 on Geeksfogeeks also I solved 700+ questions on Geeksforgeeks.",
         },

    ];

    return (
        <section id="hireme" className="py-10 px-3 text-white">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">
            My <span className="text-cyan-600">Achievements</span>
          </h3>
          
          {/* <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p> */}
        </div>
        
        {/* <div className="bg-gray-700 py-8 relative px-8 rounded-2xl  mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col items-center"> */}
        <div className='Achievements mx-20' >
            {myAchievements.map((Achievements,idx)=>(
              <div className='text-2xl border-4 border-cyan-700 rounded-2xl mt-12 px-6 py-4' key={idx}>{Achievements.des}
                    {/* <p className='description'>{Achievements.dis}</p> */}
              
           </div>

            ))}
            <div className="mt-12 text-center coding-profiles">
            <h3 className="text-4xl font-semibold">
            Coding <span className="text-cyan-600">Profiles</span>
          </h3>
          <div className='border-2 mt-12 rounded-3xl w-64 bg-[#1F2937] py-6 px-6 text-center text-cyan-600'>
            <img src={codechef} alt="" />
             Link here:- <a className='text-white  border-white hover:text-cyan-600' href="https://www.codechef.com/users/i_am_pankaj" target='blank'>i_am_pankaj
            </a>
          </div>
            </div>
      </div>
      </section>
      );
    }
