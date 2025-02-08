import React, { useState } from 'react';
import "./styles/BusinessCard.css";
import dislike from "./assets/dislike.png";
import info from "./assets/info.png";
import like from "./assets/like.png";
import favorite from "./assets/save.png";
import verified from "./assets/verifiedIcon.png";

const sampleBusinesses = [
  {
    name: "Business Name",
    type: "Coffee Shop",
    description: "\"My husband always loved houseplants and wanted to do something with them. I have many years of experience in coffee and food. We decided to combine our passions four years ago, and here we are.\""
  },
  {
    name: "Another Business",
    type: "Cafe & Bakery",
    description: "\"We've been serving our community with fresh pastries and specialty coffee for over a decade. Every recipe has been perfected through years of dedication.\""
  }
];

const BusinessCard = () => {
  const [businesses, setBusinesses] = useState(sampleBusinesses);
  const [animation, setAnimation] = useState({ active: false, direction: null });
  const handleSwipe = (direction) => {
    setAnimation({ active: true, direction });
  
    setTimeout(() => {
      setBusinesses(prev => prev.slice(1)); 
      setAnimation({ active: false, direction: null });
    }, 300);
  };
  
  if (businesses.length === 0) {
    return (
      <div className="main-business-container" style={{ 
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75%'
      }}>
        <h2 style={{ 
          color: 'white', 
          fontFamily: 'Afacad, sans-serif',
          fontSize: '2rem',
          margin: 0
        }}>
          No more businesses to show!
        </h2>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '80%', height: '75%' }}>
      {businesses.length > 1 && (
        <div className="main-business-container" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 0
        }}>
          <div className="business-content">
            <h1 className="business-name">
              {businesses[1].name}
              <img src={verified} alt="Verified" className="verified-icon" />
            </h1>
            <h2 className="business-type">{businesses[1].type}</h2>
            <p className="business-description">{businesses[1].description}</p>
          </div>

          <div className="business-buttons">
            <img src={favorite} alt="Favorite" className="business-icon" />
            <img src={dislike} alt="Dislike" className="business-icon dislike-icon" />
            <img src={like} alt="Like" className="business-icon like-icon" />
            <img src={info} alt="Info" className="business-icon" />
          </div>
        </div>
      )}

      <div 
        className="main-business-container"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          transform: animation.active 
            ? `translateX(${animation.direction === 'right' ? '150%' : '-150%'}) rotate(${animation.direction === 'right' ? '30deg' : '-30deg'})`
            : 'none',
          transition: 'transform 0.3s ease-out',
          zIndex: 1
        }}
      >
        <div className="business-content">
          <h1 className="business-name">
            {businesses[0].name}
            <img src={verified} alt="Verified" className="verified-icon" />
          </h1>
          <h2 className="business-type">{businesses[0].type}</h2>
          <p className="business-description">{businesses[0].description}</p>
        </div>

        <div className="business-buttons">
          <img src={favorite} alt="Favorite" className="business-icon" />
          <img 
            src={dislike} 
            alt="Dislike" 
            className="business-icon dislike-icon" 
            onClick={() => handleSwipe('left')}
          />
          <img 
            src={like} 
            alt="Like" 
            className="business-icon like-icon" 
            onClick={() => handleSwipe('right')}
          />    
          <img src={info} alt="Info" className="business-icon" />
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;