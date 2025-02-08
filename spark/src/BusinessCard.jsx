import "./styles/BusinessCard.css";
import dislike from "./assets/dislike.png";
import info from "./assets/info.png";
import like from "./assets/like.png";
import favorite from "./assets/save.png";
import verified from "./assets/verifiedIcon.png";

function BusinessCard() {
    return (
        <>
            <div className="main-business-container">
                <div className="business-content">
                    <h1 className="business-name">Business Name
                        <img src={verified} alt="Verified" className="verified-icon" />
                    </h1>
                    <h2 className="business-type">Coffee Shop</h2>
                    <p className="business-description">
                    “My husband always loved houseplants and wanted to do something with them. I have many years of experience in coffee and food. We decided to combine our passions four years ago, and here we are.”
                    </p>
                </div>

                <div className="business-buttons">
                    <img src={favorite} alt="Favorite" className="business-icon" />
                    <img src={dislike} alt="Dislike" className="business-icon dislike-icon" />
                    <img src={like} alt="Like" className="business-icon like-icon" />
                    <img src={info} alt="Info" className="business-icon" />
                </div>

            </div>
        </>
    );
}

export default BusinessCard;
