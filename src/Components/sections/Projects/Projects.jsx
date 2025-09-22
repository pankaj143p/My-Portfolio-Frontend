import React from "react";
import project1 from "../../Projects/marketmart.png";
import project2 from "../../Projects/quiz.avif";
import project3 from "../../Projects/education.png";
import project4 from "../../Projects/weather.png";
import project5 from "../../Projects/chat.png";

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        <img src={project1} alt="MarketMart" />
        <h2>MarketMart</h2>
        <p>An e-commerce platform.</p>
      </div>
      <div>
        <img src={project2} alt="Quiz App" />
        <h2>Quiz App</h2>
        <p>A fun and interactive quiz application.</p>
      </div>
      <div>
        <img src={project3} alt="Education Platform" />
        <h2>Education Platform</h2>
        <p>An online learning management system.</p>
      </div>
      <div>
        <img src={project4} alt="Weather App" />
        <h2>Weather App</h2>
        <p>Get real-time weather updates.</p>
      </div>
      <div>
        <img src={project5} alt="Chat Application" />
        <h2>Chat Application</h2>
        <p>Real-time chat application.</p>
      </div>
    </div>
  );
};

export default Projects;
