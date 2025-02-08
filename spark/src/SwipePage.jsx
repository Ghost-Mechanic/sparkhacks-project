import { useState } from 'react';
import "./styles/SwipePage.css";
import forumImage from "./assets/forumsIcon.png";
import swipeImage from "./assets/mainSwipeIcon.png";
import profileImage from "./assets/userProfileIcon.png";
import BusinessCard from "./BusinessCard.jsx";

function SwipePage() {

    return (
        <>
            <div className="main-container">
                <div className="app-name">
                    <h1>App Name</h1>
                </div>
                <div className="business-card">
                    <BusinessCard />
                </div>
                <footer className="footer">
                    <div className="footer-images" >
                        <img src={forumImage} height="32px" width="32px" />
                        <img src={swipeImage} height="44px" width="44px" />
                        <img src={profileImage} height="32px" width="32px" />
                    </div>
                </footer>
            </div>
        </>
    )

}

export default SwipePage;