import React, { useState } from "react";

import addFriendIcon from "./assets/addFriendIcon.png";
import invitationIcon from "./assets/invitationIcon.png";
import forumsIcon from "./assets/forumsIcon.png";
import mainSwipeIcon from "./assets/mainSwipeIcon.png";
import inviteFriendIcon from "./assets/inviteFriendIcon.png";
import userProfileIcon from "./assets/userProfileIcon.png";
import mockPfp from "./assets/1707693186054.jpg";

const UserDashboard = () => {
  const [friends, setFriends] = useState([
    { name: "Alex Johnston", username: "@alexj", active: true },
    { name: "Taylor Smith", username: "@taylors", active: true },
    { name: "Mark Baltro", username: "@taylors", active: true },
    { name: "Jordan Lee", username: "@jordanl", active: false },
    { name: "Morgan Reed", username: "@morganr", active: false },
    { name: "John Adams", username: "@morganr", active: false },
    { name: "Katie Hall", username: "@morganr", active: false },
  ]);

  const handleAddFriend = () => {
    const newFriend = prompt("Enter a username or name to send a friend request:");
    if (newFriend) {
      alert(`Friend request sent to ${newFriend}!`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.columns}>
        {/* Left Column - User Info */}
        <div style={styles.leftColumn}>
          <div style={styles.profileContainer}>
            <img src={mockPfp} alt="Profile" width={200} height={200} style={styles.profileImage} />
            <div style={styles.textContainer}>
              <h2 style={styles.title}>Justin Cervantes</h2>
              <p style={styles.username}>@ghost_mechanic</p>
            </div>
          </div>

          <div style={styles.patternsContainer}>
            <h3 style={styles.subtitle}>Your Patterns</h3>
            <hr style={{ ...styles.divider, width: "20%" }} />
            <ul style={styles.list}>
              <li>Your most visited category is “Restaurant”</li>
              <li>Your favorite cuisine is “Greek”</li>
              <li>You've swiped an average of 15 small businesses this week</li>
              <li>You've liked an average of 4.6 businesses this week</li>
            </ul>
          </div>
        </div>

        {/* Right Column - Friends List */}
        <div style={styles.rightColumn}>
          <div style={styles.friendsHeader}>
            <h3 style={styles.friendsTitle}>Friends</h3>
            <img
              src={addFriendIcon}
              alt="Add Friend"
              width={25}
              height={25}
              style={styles.addFriendIcon}
              onClick={handleAddFriend}
            />
          </div>

          <hr style={styles.divider} />

          <div style={styles.friendsList}>
            {friends.map((friend, index) => (
              <div
                key={index}
                style={{
                  ...styles.friendItem,
                  color: friend.active ? "white" : "#ACACAC"
                }}
              >
                <div>
                  <p style={styles.friendName}>{friend.name}</p>
                  <p style={styles.friendUsername}>{friend.username}</p>
                </div>
                {friend.active && index === 0 ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <img
                      src={invitationIcon}
                      alt="Invitation"
                      width={25}
                      height={25}
                      style={styles.inviteIcon}
                    />
                    <img
                      src={inviteFriendIcon}
                      alt="Invite Friend"
                      width={25}
                      height={25}
                      style={styles.inviteIcon}
                    />
                  </div>
                ) : friend.active ? (
                  <img
                    src={inviteFriendIcon}
                    alt="Invite Friend"
                    width={25}
                    height={25}
                    style={styles.inviteIcon}
                  />
                ) : null}
              </div>
            ))}
          </div>



        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
    backgroundColor: "white",
    position: "relative",
  },
  columns: {
    display: "flex",
    justifyContent: "center",
    width: "200%",
    maxWidth: "900px",
    gap: "0px",
    marginTop: "40px",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "120%",
    backgroundColor: "#FF8274",
    padding: "40px",
    borderTopLeftRadius: "30px",
    borderBottomLeftRadius: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    height: "500px",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "60%",
    backgroundColor: "#F75F5F",
    padding: "40px",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    height: "500px",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0px",
  },
  profileImage: {
    borderRadius: "50%",
    marginRight: "20px",
  },
  textContainer: {
    marginBottom: "20px",
  },
  patternsContainer: {
    marginTop: "20px",
  },
  list: {
    listStyleType: "none",
    paddingLeft: 0,
    textAlign: "left",
  },
  title: {
    color: "white",
    fontSize: "32px",
    fontWeight: "bold",
  },
  username: {
    color: "white",
    fontSize: "16px",
    marginTop: "-30px",
    marginBottom: "70px",
  },
  subtitle: {
    fontSize: "18px",
    color: "white",
    marginBottom: "10px",
  },
  friendsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  friendsTitle: {
    fontSize: "20px",
    color: "white",
    fontWeight: "bold",
  },
  addFriendIcon: {
    cursor: "pointer",
  },
  divider: {
    width: "100%",
    height: "2px",
    backgroundColor: "white",
    margin: "10px 0",
  },
  friendsList: {
    width: "100%",
    overflowY: "auto",
    maxHeight: "450px",
    paddingRight: "20px",
  },
  friendItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    // borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
  },
  friendName: {
    fontSize: "16px",
    margin: "0",
  },
  friendUsername: {
    fontSize: "14px",
    margin: "0",
    opacity: "0.8",
  },
  inviteIcon: {
    cursor: "pointer",
  },
  seeMore: {
    marginTop: "10px",
    textAlign: "center",
    color: "white",
    cursor: "pointer",
  },
};

export default UserDashboard;
