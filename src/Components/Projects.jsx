import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "./Projects/p23.avif";
import project2 from "./Projects/21.avif";
import project3 from "./Projects/p3.png";
import project4 from "./Projects/p4.png";
import project5 from "./Projects/p22.jpg";
// import project_person from './Images/Him.png';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";



const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Calculator",
      github_link: "",
      live_link: "",
    },
    {
      img: project2,
      name: "Quiz App",
      github_link: "",
      live_link: "",
    },
    {
      img: project3,
      name: "Portfolio Sites",
      github_link: "",
      live_link: "",
    },
    {
      img: project4,
      name: "Weather App",
      github_link: "",
      live_link: "",
    },
    {
      img: project5,
      name: "Music Player",
      github_link: "",
      live_link: "",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-16  mx-auto items-center relative">
        <div className="lg:w-3/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

   


        </div>
        <div className="lg:block hidden">
         {/* <img src={project_person} alt="" /> */}
        </div>
      </div> 
    </section>
  );
};

export default Project;