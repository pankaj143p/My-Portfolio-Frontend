
import React, { useEffect, useState } from 'react';
// import im1 from './certificates/kisspng-java-runtime-environment-computer-icons-java-platf-java-5ade3063f31610.0948145615245108199957.png'
// import {Line} from "rc-progress";
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
      <section id="skills" className="py-10 bg-gray-800 relative">
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



            {/* <p className="text-gray-400 mt-0 text-4xl">Coding languages</p> */}



          </div>
        </div>
        {/* <div className="flex items-center"> */}
        <p className="text-gray-400  text-center mt-20 text-4xl self-center">Programming languages</p>
        {/* <div className="mx-32 mt-12  text-4xl flex gap-10 flex-col">
          <div className="skill-box">
            <div className='skill-chid flex flex-row gap-0'>

              <span className="title">Java</span>
            </div>
            <div className="skill-bar">
              <span className="skill-per java">
                <span className="tooltip">90%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">C++</span>
            <div className="skill-bar">
              <span className="skill-per cpp">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Paython</span>
            <div className="skill-bar">
              <span className="skill-per paython">
                <span className="tooltip">60%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">C</span>
            <div className="skill-bar">
              <span className="skill-per c">
                <span className="tooltip">60%
                </span>
              </span>
            </div>

        <div className='flex flex-row absolute'>
            <h1 className='ml-20'>Time Management</h1>
            <div style={{ width: 150, marginLeft: 550 }} className='mr-20 '>
              <CircularProgressbar value="90" text="90 %" />
            </div>
        </div>     
        <div className='flex flex-row'>
            
            <div style={{ width: 150, marginLeft: 550 }}>
              <CircularProgressbar value="90" text="90 %" />
            </div>
        </div>
    </div>
        </div> */}
        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme mt-28 pr-20 skill-slider">
                <div className="item">
                  <div style={{ width: 150, marginLeft: 550 }}>
                  
                    <CircularProgressbar value="90" text="90 %" />
                    <h2 className='ml-4 mt-4 text-5xl'>Java</h2>
                  </div>
                </div>
                <div className="item">
                <div style={{ width: 150, marginLeft: 550 }}>
                  
                    <CircularProgressbar value="80" text="80 %" />
                    <h2 className='ml-4 mt-4 text-5xl'>C++</h2>
                  </div>
                </div>
                <div className="item">
                <div style={{ width: 150, marginLeft: 550 }}>
                  
                    <CircularProgressbar value="70" text="70 %" />
                    <h2 className='mt-4 text-5xl'>Python</h2>
                  </div>
               </div>
                <div className="item">
                <div className='flex flex-col center' style={{width: 150, marginLeft: 550 }}>
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

