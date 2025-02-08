import React, { useState } from 'react';
import dislike from "./assets/dislike.png";
import info from "./assets/info.png";
import like from "./assets/like.png";
import favorite from "./assets/save.png";
import verified from "./assets/verifiedIcon.png";
import coffeeShopImage from "./assets/coffeeShopImage.png";
import bakeryImage from "./assets/bakeryImage.png";
import grillImage from "./assets/restaurantImage.jpg"; // Add image for grill
import sushiImage from "./assets/sushiImage.png"; // Add image for sushi
import italianImage from "./assets/italianImage.jpg"; // Add image for italian
import veganImage from "./assets/veganImage.png"; // Add image for vegan

const sampleBusinesses = [
  {
    name: "Sip & Dip",
    type: "Coffee Shop",
    description: "\"My husband always loved houseplants and wanted to do something with them. I have many years of experience in coffee and food. We decided to combine our passions four years ago, and here we are.\"",
    image: coffeeShopImage
  },
  {
    name: "Comfort Cravings",
    type: "Cafe/Bakery",
    description: "\"We've been serving our community with fresh pastries and specialty coffee for over a decade. Every recipe has been perfected through years of dedication.\"",
    image: bakeryImage
  },
  {
    name: "The Grill Spot",
    type: "Grill",
    description: "\"Serving mouth-watering grilled dishes for over 15 years. Come taste our signature ribs and smoky burgers, perfect for any meat lover.\"",
    image: grillImage
  },
  {
    name: "Sushi Haven",
    type: "Sushi Bar",
    description: "\"A Japanese sushi restaurant offering fresh and vibrant sushi, sashimi, and rolls. A peaceful spot for a great dining experience.\"",
    image: sushiImage
  },
  {
    name: "La Dolce Vita",
    type: "Italian Restaurant",
    description: "\"Authentic Italian cuisine in the heart of the city. Pasta made fresh daily and wood-fired pizza that transports you straight to Italy.\"",
    image: italianImage
  },
  {
    name: "Green Leaf Café",
    type: "Vegan Restaurant",
    description: "\"Serving delicious plant-based dishes. We believe in healthy, sustainable, and tasty food for everyone, no matter their diet.\"",
    image: veganImage
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
      <div style={{
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70%',
        width: '80%',
        marginBottom: '30px',
        borderRadius: '25px'
      }}>
        <h2 style={{
          color: 'white',
          fontFamily: 'Afacad, sans-serif',
          fontSize: '2rem',
          margin: 0
        }}>
          No more businesses to show! Check back tomorrow.
        </h2>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '80%', height: '75%' }}>
      {businesses.map((business, index) => {
        if (index > 1) return null;

        const isTopCard = index === 0;

        return (
          <div
            key={business.name}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '95%',
              borderRadius: '25px',
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)), url(${business.image})`,
              backgroundSize: 'cover',
              transform: isTopCard && animation.active
                ? `translateX(${animation.direction === 'right' ? '150%' : '-150%'}) rotate(${animation.direction === 'right' ? '30deg' : '-30deg'})`
                : 'none',
              transition: isTopCard ? 'transform 0.3s ease-out' : 'none',
              zIndex: isTopCard ? 2 : 1,
            }}
          >
            <div style={{
              height: '100%',
              boxSizing: 'border-box',
              padding: '50px',
              paddingBottom: '150px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}>
              <h1 style={{
                color: 'white',
                textShadow: '0px 0px 2px black',
                margin: 0,
                fontSize: '50px'
              }}>
                {business.name}
                <img src={verified} alt="Verified" style={{ height: '40px', width: '40px', marginLeft: '10px' }} />
              </h1>
              <h2 style={{
                color: 'white',
                textShadow: '0px 0px 2px black',
                fontSize: '30px',
                margin: 0,
                fontFamily: 'Afacad, sans-serif'
              }}>
                {business.type}
              </h2>
              <p style={{
                color: 'white',
                fontSize: '30px',
                textShadow: '0px 0px 2px black',
                overflow: 'auto',
                fontFamily: 'Afacad, sans-serif'
              }}>
                {business.description}
              </p>
            </div>

            {isTopCard && (
              <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '40px',
                justifyContent: 'center',
                alignItems: 'flex-end',
                width: '100%'
              }}>
                <img src={favorite} alt="Favorite" style={{ height: '50px', width: '50px' }} />
                <img
                  src={dislike}
                  alt="Dislike"
                  style={{ height: '90px', width: '90px', marginRight: '30px', cursor: 'pointer' }}
                  onClick={() => handleSwipe('left')}
                />
                <img
                  src={like}
                  alt="Like"
                  style={{ height: '90px', width: '90px', marginLeft: '30px', cursor: 'pointer' }}
                  onClick={() => handleSwipe('right')}
                />
                <img src={info} alt="Info" style={{ height: '50px', width: '50px' }} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BusinessCard;
