
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
// function () {

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // const [percentage, setPercentage] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (percentage < 80) {
  //       setPercentage(percentage + 1);
  //     }
  //   }, 50);
  // }, [percentage]);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const skillElements = document.querySelectorAll('.skill-box');
  skillElements.forEach((el) => observer.observe(el));






  const skills = [
    {
      logo: <IoLogoCss3 />,
      level: "Advance",
      count: 88,
    },
    {
      logo: <TbBrandJavascript />,
      level: "Advance",
      count: 90,
    },
    {
      logo: <FaReact />,
      level: "Intermediate",
      count: 80,
    },
    {
      logo: <FaNodeJs />,
      level: "Intermediate",
      count: 80,
    },
  ];
  const Coding = [
    {
      logo: "java",
      level: "intermediate",
      count: 60,
    }
  ];
  return (
      <section id="skills" className="py-10 bg-gray-800 relative lg:ml-0 mx-7 w-full">
        <div className="mt-4 text-gray-100 text-center">
          <h1 className="text-6xl font-semibold">
            My <span className="text-cyan-600">Skills</span>
          </h1>
          {/* <p className="text-gray-400 mt-6 text-4xl">Web Skills</p> */}
          <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
            {skills?.map((skill, i) => (
              <div
                key={i}
                className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
              >
                <div
                  style={{
                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                  }}
                  className="w-32 h-32 flex items-center justify-center rounded-full"
                >
                  <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                    {skill.logo}


                  </div>
                </div>
                <p className="text-xl mt-3">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex items-center"> */}
        <p className="text-gray-400 p-2 text-center mt-20 text-4xl self-center">Programming languages</p>
        <Carousel responsive={responsive} infinite={true} className=" owl-carousel owl-theme mt-28 lg:mb-4 skill-slider">
                <div className="item ml-[-56px] lg:ml-0">
                  <div style={{ width: 150, marginLeft: 520 }}>
                  
                    <CircularProgressbar value="90" text="90 %" />
                    <h2 className='ml-4 mt-4 text-5xl'>Java</h2>
                  </div>
                </div>
                <div className="item ml-[-56px] lg:ml-0">
                <div style={{ width: 150, marginLeft: 520 }}>
                  
                    <CircularProgressbar value="80" text="80 %" />
                    <h2 className='ml-4 mt-4 text-5xl'>C++</h2>
                  </div>
                </div>
                <div className="item ml-[-56px] lg:ml-0">
                <div style={{ width: 150, marginLeft: 520 }}>
                  
                    <CircularProgressbar value="70" text="70 %" />
                    <h2 className='mt-4 text-5xl'>Python</h2>
                  </div>
               </div>
                <div className="item ml-[-56px] lg:ml-0">
                <div className='flex flex-col center ml-20' style={{width: 150, marginLeft:520 }} >
                    <CircularProgressbar value="65" text="65 %" />
                  <h2 className='ml-12 mt-4 text-5xl'>C</h2>
                  </div>
                </div>
              </Carousel>
      </section>

    // <section className="skill" id="skills">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-12">
    //         <div className="skill-bx wow zoomIn">
            
          
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    // </section>



  );
};

export default Skills;

