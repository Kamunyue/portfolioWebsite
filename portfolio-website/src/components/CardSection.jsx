import React, { useState, useRef} from 'react'
import '../styles/CardSection.css'; // Import the CSS file

const horizontalScroll = ()=> {
  scrollRef = useRef(window.getElementById('cards'))
}

const scrollLeft = ()=>{
  if (scrollRef.current){
    scrollRef.current.scrollBy({left:-300 ,behavior: "smooth"})
  }
    
  }

const scrollRight = ()=>{
  if(scrollRef.current){
    scrollRef.current.scrollBy({left:300,behavior: "smooth" })
  }
}
const Card = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  }

  return (
    <div
      style = {cardStyle}
      className={`card ${isHovered ? 'card-hovered' : 'card-not-hovered'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <img
        src={imageUrl}
        />
        <div className = "overlay">
          <h3>{title}</h3>
        <p>{description}</p>
        </div>
      
    </div>
  );
};

const CardSection = () => {

  const cardsData = [
    { title: 'Card 1', description: 'Description for card 1.', imageUrl: '/vision.jpg' },
    { title: 'Card 2', description: 'Description for card 2.', imageUrl: '/amine.jpeg' },
    { title: 'Card 3', description: 'Description for card 3.', imageUrl: '/project1.jpg' },
    { title: 'Card 4', description: 'Description for card 4.', imageUrl: '/project2.jpg' },
    { title: 'Card 5', description: 'Description for card 5.', imageUrl: '/manchesterderby.jpg'},
    { title: 'Card 6', description: 'Description for card 6.', imageUrl: '/amine,jpeg' },
    { title: 'Card 7', description: 'Description for card 7.', imageUrl: '/amine.jpeg' },
    { title: 'Card 8', description: 'Description for card 8.', imageUrl: '/amine.jpeg' },
    { title: 'Card 9', description: 'Description for card 9.', imageUrl: '/amine.jpeg' },
  ];

  return (
    <>
      <section className="container">
      <div className = 'space-holder'>
        <div className = 'sticky'>
          <div className="horizontal">
            <section className= "cards">
                {cardsData.map((card, index) => (
                <Card key={index} title={card.title} description= {card.description} imageUrl={card.imageUrl}/>
               ))}
            </section>
          </div>
        </div>
      </div>
    </section>
    <div className = "scroll-container">
      <div className = "left-button">
        <button 
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <span>
          ←
          </span>
        </button>
      </div>
      <div className = "right-button">
        <button 
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <span>
          →
          </span>
        </button>
      </div>
        
        
    </div>
    </>
  );
};

export default CardSection;