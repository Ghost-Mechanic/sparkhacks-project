# ABOUT: This page handles all logon logic.

from flask import Blueprint, request, redirect, url_for, session
from project.db import get_db

logon = Blueprint('logon', __name__)

@logon.route('/logon')

def hello():
    return 'We are now on the logon page!'

@logon.route('/register_user', methods=['GET', 'POST'])
def register_user():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        db = get_db() # fetches database using function defined in db.py
        error = None

        # check to make sure the user actually filled out the forms correctly.
        if not username:
            error = 'Username is required.'
        elif not password:
            error = 'Password is required.'

        # if all is good, we put them in the database.
        if error is None:
            try:
                db.execute("INSERT INTO users (username, password) VALUES (?,?)", (username, password))
                db.commit()
            except db.IntegrityError:
                error = f"User {username} is already registered."
            else:
                return redirect(url_for("logon.login")) # redirects user to login page once they have registered.
            
    return # TO DO !!! FINISH THIS 

@logon.route('/register_business', methods=['GET', 'POST'])
def register_business():
    if request.method == 'POST':
        business_name = request.form['business_name']
        password = request.form['password']
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
                db.execute("INSERT INTO businesses (business_name, password) VALUES (?,?)", (business_name, password))
                db.commit()
            except db.IntegrityError:
                error = f"User {business_name} is already registered."
            else:
                return redirect(url_for("logon.login")) # redirects user to login page once they have registered.
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
            # unsure exactly what session does. need to look into this.
            session.clear() 
            session['user_id'] = user['id']
            return # SHOULD BE redirect(url_for(INSERT HOMEPAGE HERE))
    return # NEED TO DO BOTH RETURNS LATER!!
