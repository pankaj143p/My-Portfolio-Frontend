import React from "react";
import imageUrl from './MyImages/IMG-20240402-WA0008.jpg';
import './frame.css'

// hire me section
const Hireme = ({ altText }) => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-lg mt-4 text-gray-200 leading-7">
          Hi there! I'm Pankaj Prajapati, a dedicated student on the cusp of 
          graduating with a degree in Computer Science Engineering (AIML) 
          from Technocrats institute of technology , from Bhopal. 
          I am passionate about my programming, and I am excited to 
          apply my academic knowledge in a practical setting.
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>

        <div className="image-frame">
      <img src={imageUrl} alt={altText} className="image" />
    </div>
        {/* <img
          src={hireMe}
          alt=""
          className="lg:h-[24rem] h-60 lg:absolute bottom-0 -right-3 object-cover"
        /> */}
      </div>
    </section>
  );
};

export default Hireme;