# ABOUT: This page handles all logon logic.

from flask import Blueprint, request, redirect, url_for, session, flash
from flask_cors import cross_origin
from project.db import get_db

logon = Blueprint('logon', __name__)

@logon.route('/login', methods=['GET', 'POST'])
@cross_origin()
def login():
    if request.method == 'POST':
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
            return error, 401

        return 'Success', 200

    return render_template('auth/login.html')

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


# @logon.route('/login', methods=('GET', 'POST'))
# def login():
#     if request.method == 'POST':
#         username = request.form['username']
#         password = request.form['password']
#         db = get_db()
#         error = None

#         # we handle user logins first.
#         # checking to see if the user login worked.
#         user = db.execute( 'SELECT * FROM users WHERE username = ? AND password = ?', (username,password)).fetchone()

#         # if the username & password does not match a user, maybe a business was trying to log in?
#         if user is None:
#             business = db.execute('SELECT * FROM businesses WHERE business_name = ? AND password = ?', (username, password)).fetchone()

#         # If both queries were none, the person input an incorrect username or password.
#         if business is None:
#             error = 'Incorrect username and/or password.'
        
#         # if either query worked, let's log in!
#         if error is None:
#             if user:
#                 # unsure exactly what session does. need to look into this.
#                 session.clear() 
#                 session['user_id'] = user['id']
#                 session['user_type'] = 'user'
#             else:
#                 session['user_id'] = business['business_id']
#                 session['user_type'] = 'business'
#             return # SHOULD BE redirect(url_for(INSERT POST-LOGIN HOMEPAGE HERE))
        
#         flash(error)
#     return "Login successful" # NEED TO DO BOTH RETURNS LATER!!

@logon.route('/logout')
def logout():
    session.clear()
    return # SHOULD BE redirect(url_for(INSERT HOMEPAGE HERE))