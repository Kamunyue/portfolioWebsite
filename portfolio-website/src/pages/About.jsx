import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="headshot">
          <img src="/project1.jpg" alt="Your Name" />
        </div>

        <div className="bio">
          <p>
            Hi, I’m <span>Kennedy Kamunyue</span>, a passionate graphic designer with a knack for creating visually stunning designs. My work spans branding, illustration, and digital art.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>Typography</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;