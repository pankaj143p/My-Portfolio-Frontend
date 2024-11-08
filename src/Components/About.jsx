import React from "react";
import './style.css'
import aboutImg from "./MyImages/IMG-20240402-WA0012-removebg-preview.png";
// import MyResume from './Projects/Pankaj_Prajapati.pdf'
const About = () => {
  const info = [
    // { text: "", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Internship", count: "02" },
    { text: "Certifications",count: "20"}
  ];
  return (
    <section id="about" className="about text-white lg:pr-12 lg:ml-0 ml-24 ">
      <div className="text-center mt-4">
        <h3 className="mt-12 lg:mt-0  lg:text-center text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        {/* <p className="text-gray-400 my-3 text-lg">My introduction</p> */}
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 lg:px-10 max-w-6xl mx-h-auto mx-auto">
          <div className="px-4">
            <div className="text-gray-300 ">
              <p className=" lg:px-4 text-justify leading-8 text-2xl lg:w-18/14 w-full mx-auto">
               Hello, I'm Pankaj Prajapati a passionate MERN Stack Developer 
               and a dedicated student pursuing a Bachelor's degree in 
               Computer Science with a focus on Artificial Intelligence 
               and Machine Learning. I have a strong foundation in multiple
                programming languages and technologies, allowing me to create
                robust,  efficient, and innovative solutions in the web development
                domain. Below, I've highlighted some of my key skills, experiences, 
                and projects that show my expertise.
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
             
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-2 w-full  lg:ml-4 flex justify-center items-center lg:mb-32 ">
            <div className="lg:w-64 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg mt-12 lg:mb-4">
              <img
                src={aboutImg}
                alt=""
                className="w-full h-96 object-cover bg-cyan-800 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;