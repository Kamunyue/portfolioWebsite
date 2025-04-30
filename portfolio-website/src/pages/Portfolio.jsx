import '../styles/Portfolio.css';
import Grid from '../components/ProjectGrid';
import Footer from '../components/Footer';

// Placeholder project data (replace with real images in /public)


function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Gallery.</h2> 
      <div className='portfolio-display'>
        <Grid />
      </div>
      <Footer />
    </div>
    
    
  );
}

export default Portfolio;