import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "./Projects/marketmart.png";
import project2 from "./Projects/quiz.avif";
import project3 from "./Projects/education.png";
import project4 from "./Projects/weather.png";
import project5 from "./Projects/chat.jpg";
// import project_person from './Images/Him.png';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";



const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Market Mart",
      github_link: "https://github.com/pankaj143p/Market-Mart",
      live_link: "https://github.com/pankaj143p/Market-Mart",
    },
    {
      img: project3,
      name: "Smart TnP Education",
      github_link: "https://smart-tnp-education-app-web.vercel.app/",
      live_link: "https://github.com/pankaj143p/Smart-TNP-education-app",
    },
    {
      img: project2,
      name: "Quiz App",
      github_link: "https://github.com/pankaj143p/QuizApp",
      live_link: "https://github.com/pankaj143p/QuizApp",
    },
    {
      img: project4,
      name: "Weather App",
      github_link: "https://github.com/pankaj143p/Weather-App",
      live_link: "https://github.com/pankaj143p/Weather-App",
    },
    {
      img: project5,
      name: "Snappy Chat",
      github_link: "https://github.com/pankaj143p/Snappy-chat-web",
      live_link: "https://github.com/pankaj143p/Snappy-chat-web",
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
            {projects.map((project_info,i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" 
                //  className={`rounded-xl ${project_info.name === "Market Mart " ? "h-48 w-full" : ""}`}
                className="rounded-xl w-full h-48" 
                 />

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