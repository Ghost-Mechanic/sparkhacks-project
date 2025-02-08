import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import forumsIcon from "./assets/compass.png";
import mainSwipeIcon from "./assets/mainSwipeIcon.png";
import userProfileIcon from "./assets/userProfileIcon.png";
import mockPfp from "./assets/1707693186054.jpg";
import restaurantImage from "./assets/restaurantImage.jpg";

const ForumsPage = () => {
  const [post, setPost] = useState("");
  const navigate = useNavigate();

  const handlePost = () => {
    if (post.trim()) {
      alert("Post submitted successfully!");
      setPost("");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.appName}>BiteSwipe</h1>

      <div style={styles.postContainer}>
        <img src={mockPfp} alt="Profile" style={styles.profilePic} />
        <input
          type="text"
          placeholder="What do you want to ask or share?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          style={styles.inputBox}
        />
        <button onClick={handlePost} style={styles.postButton}>Post</button>
      </div>

      <div style={styles.forumCard}>
        <img src={restaurantImage} alt="Profile" style={styles.profilePic} />
        <div style={styles.forumContent}>
          <h3 style={styles.forumTitle}>B'Gabs Goodies</h3>
          <a href="https://www.instagram.com/bgabsvegankitchen/?hl=en" style={styles.forumLink}>https://www.instagram.com/bgabsvegankitchen/?hl=en</a>
          <p style={styles.forumText}><strong>Who Are We?</strong></p>
          <p style={styles.forumText}>
            We believe that every person that desires to upgrade their food choices to include more live and vibrant fresh fruit, veggies, nuts and seeds should be able to do so. We value and promote the practice of clean living by using organic and local products when available and offer additional life-enhancing tools to aid in your transition to a cleaner, healthier, more vibrant lifestyle.
          </p>
        </div>
      </div>

      <div style={styles.forumCard}>
        <img src={restaurantImage} alt="Profile" style={styles.profilePic} />
        <div style={styles.forumContent}>
          <h3 style={styles.forumTitle}>B'Gabs Goodies</h3>
          <a href="https://www.instagram.com/bgabsvegankitchen/?hl=en" style={styles.forumLink}>https://www.instagram.com/bgabsvegankitchen/?hl=en</a>
          <p style={styles.forumText}><strong>Who Are We?</strong></p>
          <p style={styles.forumText}>
            We believe that every person that desires to upgrade their food choices to include more live and vibrant fresh fruit, veggies, nuts and seeds should be able to do so. We value and promote the practice of clean living by using organic and local products when available and offer additional life-enhancing tools to aid in your transition to a cleaner, healthier, more vibrant lifestyle.
          </p>
        </div>
      </div>
      
      <div style={styles.forumCard}>
        <img src={restaurantImage} alt="Profile" style={styles.profilePic} />
        <div style={styles.forumContent}>
          <h3 style={styles.forumTitle}>B'Gabs Goodies</h3>
          <a href="https://www.instagram.com/bgabsvegankitchen/?hl=en" style={styles.forumLink}>https://www.instagram.com/bgabsvegankitchen/?hl=en</a>
          <p style={styles.forumText}><strong>Who Are We?</strong></p>
          <p style={styles.forumText}>
            We believe that every person that desires to upgrade their food choices to include more live and vibrant fresh fruit, veggies, nuts and seeds should be able to do so. We value and promote the practice of clean living by using organic and local products when available and offer additional life-enhancing tools to aid in your transition to a cleaner, healthier, more vibrant lifestyle.
          </p>
        </div>
      </div>
      
      <div style={styles.forumCard}>
        <img src={restaurantImage} alt="Profile" style={styles.profilePic} />
        <div style={styles.forumContent}>
          <h3 style={styles.forumTitle}>B'Gabs Goodies</h3>
          <a href="https://www.instagram.com/bgabsvegankitchen/?hl=en" style={styles.forumLink}>https://www.instagram.com/bgabsvegankitchen/?hl=en</a>
          <p style={styles.forumText}><strong>Who Are We?</strong></p>
          <p style={styles.forumText}>
            We believe that every person that desires to upgrade their food choices to include more live and vibrant fresh fruit, veggies, nuts and seeds should be able to do so. We value and promote the practice of clean living by using organic and local products when available and offer additional life-enhancing tools to aid in your transition to a cleaner, healthier, more vibrant lifestyle.
          </p>
        </div>
      </div>
      
      <div style={styles.forumCard}>
        <img src={restaurantImage} alt="Profile" style={styles.profilePic} />
        <div style={styles.forumContent}>
          <h3 style={styles.forumTitle}>B'Gabs Goodies</h3>
          <a href="https://www.instagram.com/bgabsvegankitchen/?hl=en" style={styles.forumLink}>https://www.instagram.com/bgabsvegankitchen/?hl=en</a>
          <p style={styles.forumText}><strong>Who Are We?</strong></p>
          <p style={styles.forumText}>
            We believe that every person that desires to upgrade their food choices to include more live and vibrant fresh fruit, veggies, nuts and seeds should be able to do so. We value and promote the practice of clean living by using organic and local products when available and offer additional life-enhancing tools to aid in your transition to a cleaner, healthier, more vibrant lifestyle.
          </p>
        </div>
      </div>
      
      <div style={styles.forumCard}>
        <img src={restaurantImage} alt="Profile" style={styles.profilePic} />
        <div style={styles.forumContent}>
          <h3 style={styles.forumTitle}>B'Gabs Goodies</h3>
          <a href="https://www.instagram.com/bgabsvegankitchen/?hl=en" style={styles.forumLink}>https://www.instagram.com/bgabsvegankitchen/?hl=en</a>
          <p style={styles.forumText}><strong>Who Are We?</strong></p>
          <p style={styles.forumText}>
            We believe that every person that desires to upgrade their food choices to include more live and vibrant fresh fruit, veggies, nuts and seeds should be able to do so. We value and promote the practice of clean living by using organic and local products when available and offer additional life-enhancing tools to aid in your transition to a cleaner, healthier, more vibrant lifestyle.
          </p>
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerImages}>
          <img src={forumsIcon} height="32px" width="32px" alt="Forum" style={styles.profileImage}/>
          <img src={mainSwipeIcon} height="44px" width="44px" alt="Swipe" onClick={() => navigate('/swipe')} style={styles.profileImage} />
          <img src={userProfileIcon} height="32px" width="32px" alt="Profile" onClick={() => navigate('/user-dashboard')} style={styles.profileImage} />
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "calc(100vh - 60px)",
    width: "100vw",
    height:"100vh",
    backgroundColor: "white",
    overflowY: "auto",
    paddingBottom: "60px",
  },
  appName: {
    fontFamily: 'DynaPuff, sans-serif',
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  postContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FF8274",
    padding: "10px",
    borderRadius: "10px",
    width: "61%",
  },
  profilePic: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
    objectFit: "cover",
  },
  inputBox: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
  },
  postButton: {
    backgroundColor: "#F75F5F",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  forumCard: {
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: "#F75F5F",
    padding: "20px",
    borderRadius: "10px",
    width: "60%",
    marginTop: "20px",
    color: "white",
  },
  forumContent: {
    marginLeft: "10px",
  },
  forumTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  forumLink: {
    color: "#add8e6",
    textDecoration: "none",
  },
  forumText: {
    fontSize: "14px",
    marginTop: "5px",
  },
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    padding: "17.5px",
    backgroundColor: "#FAFAFA",
    borderTop: "1px solid black",
  },
  footerImages: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "200px",
  },
  profileImage: {
    cursor: 'pointer',
  },
};

export default ForumsPage;
