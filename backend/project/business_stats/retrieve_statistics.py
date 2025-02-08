# ABOUT: This page handles logic relating to displaying statistics of users who have "liked"
# a business to the business.

from flask import Blueprint, request, redirect, url_for, session, jsonify
from project.db import get_db

swipe = Blueprint('swipe', __name__)

@swipe.route('/stats/<string:business_name>', methods=['GET'])
def business_stats(business_name):
    db = get_db()
    # we retrieve the name of the current business for database lookup purposes.
    # might be unnecessary.
    business_name = session.get('business_id')
    users = db.execute("""
    SELECT users.username
    FROM likedBusinesses
    JOIN users ON likedBusiness.username = users.username
    WHERE likedBusinesses.business_name = ?""", (business_name,)).fetchall()

    # if no users liked this business yet we throw some sort of error lol
    if not users:
        return jsonify({'message': 'No likes for this business yet'}), 200
    
    # put it into json for frontend shenanigans
    users_list = [
        {
            'username' : user['username'],
        }
        for user in users
    ]
    
    return jsonify({'liked_by': users_list}), 200


    