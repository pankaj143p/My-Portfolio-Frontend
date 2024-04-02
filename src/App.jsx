import './App.css';
import Navbar from './Components/Navbar';
import Bot from './Components/Bot';
import Hero from './Components/Hero';
import About from './Components/About'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Hireme from './Components/Hireme';
import Footer from './Components/Footer';
import Certificates from './Components/Certificates';
import Achievements from './Components/Achievements';






function App() {
  return (
   
    <>
      <Navbar></Navbar>
      <Bot />
      <Hero />
      <About />
      <Achievements/>
      <Skills />
      <Hireme />
      <Projects />
      <Certificates/>       
      <Contact />
      <Footer />
    </>
   
  );
}

export default App;
