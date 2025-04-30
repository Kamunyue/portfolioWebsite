import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <span>Your Name</span>
        </Link>
      </div>
      <div className="navigation">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Gallery</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <div className="action">
        <Link to="/contact">
          <div className="cta">
            <span>Contact me</span>
          </div>
        </Link>
      </div>
      
        
    </nav>
  );
}

export default Navbar;
