import React from "react";
import hero from "./MyImages/IMG-20240402-WA0008.jpg";
import { FaGithub, FaInstagram, FaLinkedin,FaFacebook,FaTwitter} from "react-icons/fa6";


const Hero = () => {
  
  const social_media = [
    {name :<FaLinkedin />,link : "https://www.linkedin.com/in/pankaj-prajapati-7619bb226/"},
    {name :<FaGithub/>,link : "https://github.com/pankaj143p"},
    {name :<FaInstagram/>,link : "https://www.instagram.com/pankaj07._/"},
    {name :<FaFacebook/> ,link : "https://www.facebook.com/profile.php?id=100070913362312"}, 
    {name :<FaTwitter/>,link : "https://twitter.com/Pankaj07__"},
  ];
  return (
    <section
      id="home"
      className="hero min-h-screen flex py-24 md:flex-row flex-col items-center"
    >
      {/* <div className="flex-1 flex items-center justify-center">
        <img src={hero} alt="" className="md:w-64 h-64 h-full object-cover " />
      </div> */}
    
      <div className="flex-1 md:mt-12 mt-16 flex justify-center items-center">
            <div className="myImg lg:w-80 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={hero}
                alt=""
                className="w-full h-96 object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
      <div className="flex-1 mt-40px">
        <div className="md:text-left mt-32px text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Pankaj Prajapati</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            MernStack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="my-14 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <a
                key={icon.name}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                {icon.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;