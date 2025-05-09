import '../styles/About.css';
import {motion} from 'framer-motion'
import Footer from '../components/Footer';

function About() {
  return (
    <div className="about-container">
      <div className="about">
      
      <div className="description">
          <p>
            Hi, I’m <span>Kennedy Kamunyue</span>, a passionate graphic designer with a knack for creating visually stunning designs. My work spans branding, illustration, and digital art.
          </p>
          <h3><span>Skills</span></h3>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Typography</li>
          </ul>
      </div>
    <div className="about-image">
        <img src="/amine.jpeg" alt="Profile Picture" />
      </div>
    </div>
      <motion.div 
      className="title"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 1 }}
      >
        <h1>About <span>Me</span><span>.</span></h1>
      </motion.div>
      <Footer />
    </div>
    
    
  );
}

export default About;