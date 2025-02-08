import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import forumImage from './assets/compass.png';
import swipeImage from './assets/mainSwipeIcon.png';
import profileImage from './assets/userProfileIcon.png';
import BusinessCard from "./BusinessCard.jsx";

function SwipePage() {
    const navigate = useNavigate();

    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    const handleProfileClick = () => {
        navigate('/user-dashboard');
    };

    const handleForumsClick = () => {
        navigate('/forums-page');
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.appName}>
                <h1 style={styles.appTitle}>BiteSwipe</h1>
            </div>

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
        textAlign: "center",
    },
    appTitle: {
        fontFamily: '"DynaPuff", sans-serif',
        fontSize: '2rem',
        color: '#333',
        marginTop: '-20px',
        marginBottom: '60px',
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
