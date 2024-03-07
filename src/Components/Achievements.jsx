import React from 'react';
export default function Achievements() {
    const myAchievements = [
        {
         "des" : "I got global rank 3rd on Codechef in startes 124",
        },
        {
         "des" : "I got AIR 16th on Coding Ninjas World cup event and also I solved 2000+ probles on Coding Ninjas",
        },
        {
          "des" : "I got AIR 16th on Coding Ninjas World cup event and also I solved 2000+ probles on Coding Ninjas",
         },
         {
          "des" : "I got AIR 16th on Coding Ninjas World cup event and also I solved 2000+ probles on Coding Ninjas",
         },
         {
          "des" : "I got AIR 16th on Coding Ninjas World cup event and also I solved 2000+ probles on Coding Ninjas",
         },        
         {
          "des" : "I got AIR 16th on Coding Ninjas World cup event and also I solved 2000+ probles on Coding Ninjas",
         },
         {
          "des" : "I got AIR 16th on Coding Ninjas World cup event and also I solved 2000+ probles on Coding Ninjas",
         },
         {
          "des" : "I got AIR 16th on Coding Ninjas World cup event and also I solved 2000+ probles on Coding Ninjas",
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
              <div className='text-2xl border-2 rounded-2xl flex  bg-cyan-900 text-white mt-10 px-4 py-2' key={idx}>{Achievements.des}
                    {/* <p className='description'>{Achievements.dis}</p> */}
              
           </div>
            ))}
      </div>
      </section>
      );
    }
