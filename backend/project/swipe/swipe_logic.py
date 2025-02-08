# ABOUT: This page handles logic relating to displaying the business profiles on the
# swipe page.

from flask import Blueprint, request, redirect, url_for, session, jsonify
from project.db import get_db

swipe = Blueprint('swipe', __name__)

@swipe.route('/swipe/<string:business_name>', methods=['GET'])
def business_profile(business_name):
    db = get_db()

    # We ping the database to retrieve the current business' info!
    business = db.execute("SELECT business_name, business_type, about_me FROM businesses WHERE business_name = ?", (business_name,)).fetchone()

    # we're handling a right "swipe", aka "liking".
    if request.method == 'POST' and 'like' in request.form:
        username = session.get('user_id') # we get the current user's username

        #now let's insert the business into the current user's "likes"
        try:
            db.execute("INSERT INTO likedBusinesses (username, business_name) VALUES (?, ?)", 
                       (username, business_name))
            db.commit()
        except db.IntegrityError:
            return jsonify({'error': 'IGNORE'}), 400 #idk what 400 does lol
        
    if request.method == 'POST' and 'not_liked' in request.form:
        # now we get the info of the next business
        next_business = db.execute("SELECT business_name FROM businesses where business_name != ? ORDER BY RANDOM() LIMIT 1",
                                (business_name),).fetchone()

    # returning information about the current business and next business to be displayed to the front-end.
    return jsonify({
        'business_name': business['business_name'],
        'business_type': business['business_type'],
        'about_me': business['about_me'],
        'next_business': next_business['business_name']
    })
    
    # /swipe/<next_business_name> to create our business loop by navigating to the next business.

