# ABOUT: This page handles all logon logic.

from flask import Blueprint, request, redirect, url_for
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
                db.execute("INSERT INTO user (username, password) VALUES (?,?)", (username, password))
                db.commit()
            except db.IntegrityError:
                error = f"User {username} is already registered."
            else:
                return redirect(url_for("logon.login")) # redirects user to login page once they have registered.
    return

@logon.route('/register_business', methods=['GET', 'POST'])
def register_business():
    return


@logon.route('/login', methods=('GET', 'POST'))
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        db = get_db()
        error = None
