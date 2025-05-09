import { motion } from 'framer-motion';
import '../styles/Home.css';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home">
      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      >
        <div className="intro">
          <div className="greet">
            <h1>HELLO I'M</h1>
          </div>
          <div className="intro-name">
            <h1>KENNEDY</h1>
          </div>
          <div className="intro-name2">
            <h1>KAMUNYUE<span>.</span></h1>
          </div>
          
        </div>

      </motion.div>
      
      <Footer />
      
    </div> 
    
  );
}

export default Home;