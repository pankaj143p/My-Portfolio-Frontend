import React, {useEffect, useState } from 'react';
import codechef from './CodingProfiles/cc-logo.svg';
import leetcode from './CodingProfiles/lc-logo.webp';
import geeksfogeeks from './CodingProfiles/gfg-logo.svg';
import codingninjas from './CodingProfiles/cn-logo.svg';
import hackerearth from './CodingProfiles/he-logo.png'
import hackerrank from './CodingProfiles/hr-logo.png'
import axios from 'axios';
import './style.css';
export default function QuestionsLiveStatus() {
 const [data,setData] = useState("");
 const [error,setError] = useState(null);
 const [loading,setLoading] = useState('');
  const [liveStatus,setLiveStatus] = useState([]);
  // fetch api 
  useEffect(() => {
    axios.get('https://leetcode-stats-api.herokuapp.com/pankaj077')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <section id="hireme" className=" py-10  text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Achievements</span>
          <div className='p-3 bg-slate-100 rounded-xl text-gray-800'>
          <h1>Live Status</h1>
    
          <p>Live = {data.totalSolved}</p>

          </div>
        </h3>
        </div>
    </section>
  );
}





