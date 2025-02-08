<style>
    @import url('https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Asap+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=DynaPuff:wght@400..700&display=swap');
</style>

import { useNavigate } from 'react-router-dom';
import forumImage from './assets/compass.png';
import swipeImage from './assets/mainSwipeIcon.png';
import profileImage from './assets/userProfileIcon.png';
import BusinessCard from "./BusinessCard.jsx";

function SwipePage() {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/user-dashboard');
    };

    const handleForumsClick = () => {
        navigate('/forums-page');
    };


    return (
        <div style={styles.mainContainer}>
            <div style={styles.appName}>
                <h1>BiteSwipe</h1>
            </div>

            {/* <div style={styles.businessCard}> </div> */}
            <BusinessCard />


            <footer style={styles.footer}>
                <div style={styles.footerImages}>
                    <img src={forumImage} height="32px" width="32px" alt="Forum" onClick={handleForumsClick} style={styles.profileImage} />
                    <img src={swipeImage} height="44px" width="44px" alt="Swipe" style={styles.profileImage} />
                    <img src={profileImage} height="32px" width="32px" alt="Profile" onClick={handleProfileClick} style={styles.profileImage} />

                </div>
            </footer>
        </div>
    );
}

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100vh",
        width: '100vw',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        marginTop: "-20px",
    },
    appName: {
        fontFamily: 'DynaPuff, sans-serif',
        fontSize: '1rem',
        color: '#333',
        marginTop: '-20px',
    },
    businessCard: {
        width: '80%',
        height: '500px',
        backgroundColor: 'black',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '50px',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#FAFAFA',
        borderTop: '1px solid black',
    },
    footerImages: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "200px",
        width: "100%",
    },
    profileImage: {
        cursor: 'pointer',
    },
};

export default SwipePage;
