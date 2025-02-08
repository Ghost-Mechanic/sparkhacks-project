from flask import Blueprint, request, redirect, url_for, session, jsonify
from project.db import get_db
import sqlite3 as sql

friends_list= Blueprint('friends_list', __name__)

# URL route to adding friends page
@friends_list.route('/add_friend', methods=['POST'])
def add_friend():
    """Adds a friend relationship between two users."""
    data = request.get_json()
    user1 = data.get('user1')
    user2 = data.get('user2')

   # error checking
    if not user1 or not user2:
        return jsonify({'error': 'Both usernames are required'}), 400
    
    if user1 == user2:
        return jsonify({'error': 'Users cannot be friends with themselves'}), 400

    db = get_db()
    try:
        db.execute("INSERT INTO friendships (user1, user2) VALUES (?, ?)", (user1, user2))
        db.execute("INSERT INTO friendships (user1, user2) VALUES (?, ?)", (user2, user1))  # Ensuring bidirectional friendship
        db.commit()
        return jsonify({'message': 'Friend added successfully'}), 201
    except sql.IntegrityError:
        return jsonify({'error': 'Friendship already exists or user does not exist'}), 400
    finally:
        db.close()

@friends_list.route('/get_friends/<username>', methods=['GET'])
def get_friends(username):
    """Retrieves a list of a user's friends."""
    db = get_db()
    cur = db.cursor()
    cur.execute("SELECT user2 FROM friendships WHERE user1 = ?", (username,))
    friends = [row[0] for row in cur.fetchall()]
    db.close()
    
    return jsonify({'username': username, 'friends': friends}), 200