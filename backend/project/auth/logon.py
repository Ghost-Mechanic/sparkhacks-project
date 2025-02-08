# ABOUT: This page handles all logon logic.

from flask import Blueprint, request, redirect, url_for, session, flash
from flask_cors import cross_origin
from project.db import get_db

logon = Blueprint('logon', __name__)

@logon.route('/login', methods=['GET', 'POST'])
@cross_origin()
def login():
    if request.method == 'POST':
        print("Received form data:", request.form)  # Debug log
        username = request.form['username']
        password = request.form['password']
        db = get_db()
        error = None

        # Check users table
        user = db.execute(
            'SELECT * FROM users WHERE username = ? AND password = ?', (username, password)
        ).fetchone()

        # If not in users, check businesses
        if user is None:
            user = db.execute(
                'SELECT * FROM businesses WHERE business_name = ? AND password = ?', 
                (username, password)
            ).fetchone()

        if user is None:
            error = 'Invalid username or password'
            print("Login error:", error)  # Debug log
            return error, 401

        print("Login successful for user:", username)  # Debug log
        return 'Success', 200

    return 'Method not allowed', 405  # For GET requests

@logon.route('/register_user', methods=['GET', 'POST'])
@cross_origin()
def register_user():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        db = get_db()
        error = None

        # check to make sure the user actually filled out the forms correctly.
        if not username:
            error = 'Username is required.'
            return error, 400
        elif not password:
            error = 'Password is required.'
            return error, 400

        # if all is good, we put them in the database.
        if error is None:
            try:
                db.execute("INSERT INTO users (username, password) VALUES (?,?)", 
                          (username, password))
                db.commit()
                return 'Registration successful', 200
            except db.IntegrityError:
                error = f"User {username} is already registered."
                return error, 400
            
        return error, 400
    
    return 'Method not allowed', 405 

@logon.route('/logout')
def logout():
    session.clear()
    return # SHOULD BE redirect(url_for(INSERT HOMEPAGE HERE))