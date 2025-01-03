import React from "react";
import './style.css'
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
const social_media = [
  { name: <FaLinkedin size={32} />, link: "https://www.linkedin.com/in/pankaj-prajapati-7619bb226/" },
  { name: <FaGithub size={32} />, link: "https://github.com/pankaj143p" },
  { name: <FaInstagram size={32} />, link: "https://www.instagram.com/pankaj07._/" },
  { name: <FaFacebook size={32} />, link: "https://www.facebook.com/profile.php?id=100070913362312" },
  { name: <FaTwitter size={32} />, link: "https://twitter.com/Pankaj07__" },
];
// footer 
const Footer = () => {
  // const contact_info = [
  //     { logo: "mail", text: "pankaj114477pankaj@gmail.com" },
  //     { logo: "logo-whatsapp", text: "+91 9179213653" },
  //   ];
  const contact_info = [
    { logo: <IoMdMailUnread size={28} />, text: "pankaj114477pankaj@gmail.com" },
    { logo: <IoLogoWhatsapp size={28} />, text: "+91 91xxxxxx53" },
  ];
  return (
    <footer className=" mr-[-100px] lg:mr-0">
      {/* <div className="container">
        <div className="row">
        <div className="col-md-4 col-sm-0 mx-auto my-5">
       
            <ul className="list-unstyled d-flex justify-content-around flex-wrap">
            {contact_info.map((item, index) => (
                    <li key={index} className="mb-3">
                    <a href={`https://www.${item.logo}.com/${item.text}`}>
                        <i className={`fa fa-${item.logo} fa-lg`}></i>
                    </a>
                    </li>
            ))}
            </ul>
        </div>
        </div>
        </div> */}
        
        {/* contact us page */}

      <h2 className="text-center text-4xl font-weight-bold">Contact Us</h2>
      <div className="mt-8">
        <hr />
      </div>

      <div className="copyright bg-dark py-4 my-0 mx-0 text-white text-center">
        <div className="container text-[#8d9294]">
          {/* <div  className="container text-[#374151]"> */}
          <p className="text-4xl py-6">Pankaj Prajapati</p>
          <div className="contact flex flex-col ml-8 my-0 gap-2 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[2.5rem]  text-3xl min-h-[2.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  {contact.logo}
                </div>
                <p className="center pb-3 md:text-base text-lg lg:text-2xl  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
          <div className="contact text-4xl flex items-center md:justify-end justify-center gap-4 py-6">
            {social_media?.map((icon) => (
              <a
                key={icon.name}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="icons  mr-8 text-gray-600 hover:text-white cursor-pointer "
              >
                {icon.name}
              </a>
            ))}
          </div>
          <div>
            <p>&copy; 2024  Pankaj Prajapati. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};


export default Footer;