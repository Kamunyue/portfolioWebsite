import { motion } from 'framer-motion';
import "../styles/ProjectGrid.css";


const projects = [
    { id: 1, title: 'Project 1', image: '/project1.jpg', description: 'Branding Design.' },
    { id: 2, title: 'Project 2', image: '/project2.jpg', description: 'Poster Design' },
    { id: 3, title: 'Project 3', image: '/amine.jpeg', description: 'UI/UX mockup' },
    { id: 4, title: 'Project 4', image: '/project2.jpg', description: 'Illustration' },
    { id: 5, title: 'Project 5', image: '/project1.jpg', description: 'Packaging design' },
    // Add more projects
  ];

function Grid() {
    return(
        <div className="project-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`project-card item-${project.id}`}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    )
    
}

export default Grid;