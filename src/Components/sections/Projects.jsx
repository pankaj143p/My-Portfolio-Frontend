// ...existing code from /src/Components/Projects.jsx
import project1 from '../../assets/Projects/marketmart.png';
import project2 from '../../assets/Projects/quiz.avif';
import project3 from '../../assets/Projects/education.png';
import project4 from '../../assets/Projects/weather.png';
import project5 from '../../assets/Projects/chat.png';

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        <img src={project1} alt="MarketMart Project" />
        <img src={project2} alt="Quiz App Project" />
        <img src={project3} alt="Education Platform Project" />
        <img src={project4} alt="Weather App Project" />
        <img src={project5} alt="Chat Application Project" />
      </div>
    </div>
  );
};

export default Projects;
