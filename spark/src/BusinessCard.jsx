import "./styles/BusinessCard.css";
import greenHeart from "./assets/greenHeartIcon.png";
import xIcon from "./assets/xIcon.png";

function BusinessCard() {

    return (
        <>
            {/* <div className="image-gradient"> */}
                <div className="main-business-container">
                    <div className="business-content">
                        <h1 className="business-name">Business Name</h1>    
                        <h2 className="business-type">Coffee Shop</h2>
                        <p className="business-description">Business Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description HereBusiness Description Here</p>
                        <div className="business-buttons">
                            <img src={xIcon} height="40px" width="40px" />
                            <img src={greenHeart} height="48px" width="48px" />
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default BusinessCard;