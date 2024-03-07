import React from "react";
import './style.css'
import aboutImg from "./Images/1658571266826-removebg-preview.png";
import MyResume from './Projects/Pankaj_Prajapati.pdf'
const About = () => {
  const info = [
    // { text: "", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Internship", count: "02" },
    { text: "Certifications",count: "20"}
  ];
  return (
    <section id="about" className="about py- text-white">
      <div className="text-center mt-4">
        <h3 className="mb-8 text-center text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        {/* <p className="text-gray-400 my-3 text-lg">My introduction</p> */}
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-h-auto mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="mt-16 pr-8 text-justify leading-8 text-2xl w-18/14 mx-auto">
                I'm Pankaj Prajapati I'm in 3rd year student I'm 3rd
                ⭐ ⭐ ⭐ Coder on codechef and s700+problems solved and Globel 🎖️
                Rank 58 in december 2022 contest Max Rating (1624) ||
                2nd ⭐ on Leetcode and 150+probelems solved on it ||
                150+probelems solved on Geeks for Geeks || 300+probelems
                solved onCode Studio || 5⭐ in java and 4⭐ in C++
                and 200+probelems solved on HackerRank || 50+problem
                solve on Hacker Earth
              </p>
              <div className="flex mt-10 items-center gap-20">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={MyResume} download>
                <button className="btn-primary">See My Resume</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;