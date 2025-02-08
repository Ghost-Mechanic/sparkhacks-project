# ABOUT: This page handles all logon logic.

from flask import Blueprint, request, redirect, url_for, session, flash
from project.db import get_db

logon = Blueprint('logon', __name__)

@logon.route('/register_user', methods=['GET', 'POST'])
def register_user():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        city = request.form['city']
        age = request.form['age']
        fav_food = request.form['favorite food']
        db = get_db() # fetches database using function defined in db.py
        error = None

        # check to make sure the user actually filled out the forms correctly.
        if not username:
            error = 'Username is required.'
        elif not password:
            error = 'Password is required.'
        elif not city:
            error = 'City is required.'
        elif not age:
            error = 'Age is required.'
        elif not fav_food:
            error = 'Favorite food is required.'

        # if all is good, we put them in the database.
        if error is None:
            try:
                db.execute("INSERT INTO users (username, password, city, age, favorite_food) VALUES (?,?, ?, ?, ?)", (username, password, city, age, fav_food))
                db.commit()
            except db.IntegrityError:
                error = f"User {username} is already registered."
            else:
                return redirect(url_for("logon.login")) # redirects user to login page once they have registered.
            
        flash(error)
    return # TO DO !!! FINISH THIS 

@logon.route('/register_business', methods=['GET', 'POST'])
def register_business():
    if request.method == 'POST':
        business_name = request.form['business_name']
        password = request.form['password']
        business_type = request.form['business_type']
        about_me = request.form.get('about_me', '') # syntax makes this an optional field.
        db = get_db()
        error = None

        # check to make sure the user actually filled out the forms correctly.
        if not business_name:
            error = 'Business name is required.'
        elif not password:
            error = 'Password is required.'

        # if all is good, we put them in the database.
        if error is None:
            try:
                db.execute("INSERT INTO businesses (business_name, password, business_type, about_me) VALUES (?,?,?,?)", 
                           (business_name, password, business_type, about_me))
                db.commit()
            except db.IntegrityError:
                error = f"User {business_name} is already registered."
            else:
                return redirect(url_for("logon.login")) # redirects user to login page once they have registered.
            
        flash(error)
    return #TO DO !! FINISH THIS 


@logon.route('/login', methods=('GET', 'POST'))
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        db = get_db()
        error = None

        # we handle user logins first.
        # checking to see if the user login worked.
        user = db.execute( 'SELECT * FROM users WHERE username = ? AND password = ?', (username,password)).fetchone()

        # if the username & password does not match a user, maybe a business was trying to log in?
        if user is None:
            business = db.execute('SELECT * FROM businesses WHERE business_name = ? AND password = ?', (username, password)).fetchone()

        # If both queries were none, the person input an incorrect username or password.
        if business is None:
            error = 'Incorrect username and/or password.'
        
        # if either query worked, let's log in!
        if error is None:
            if user:
                # unsure exactly what session does. need to look into this.
                session.clear() 
                session['user_id'] = user['id']
                session['user_type'] = 'user'
            else:
                session['user_id'] = business['business_id']
                session['user_type'] = 'business'
            return # SHOULD BE redirect(url_for(INSERT POST-LOGIN HOMEPAGE HERE))
        
        flash(error)
    return "Login successful" # NEED TO DO BOTH RETURNS LATER!!

@logon.route('/logout')
def logout():
    session.clear()
    return # SHOULD BE redirect(url_for(INSERT HOMEPAGE HERE))