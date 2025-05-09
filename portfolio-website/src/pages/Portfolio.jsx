import '../styles/Portfolio.css';
// import Grid from '../components/ProjectGrid';
import CardSection from '../components/CardSection'
import Footer from '../components/Footer';

// Placeholder project data (replace with real images in /public)


function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio">
      <div className="intro">
        <h2>Gallery<span>.</span></h2> 
      <p>A brief display of some of my conceptual work and real world examples of my work</p>
      </div>
      
      <div className='portfolio-display'>
    
        {/* <Grid /> */}
        <CardSection />
      </div>
      </div>
      <Footer />
    </div>
      

    
    
  );
}

export default Portfolio;