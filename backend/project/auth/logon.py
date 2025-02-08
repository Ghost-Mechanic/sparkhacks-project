from flask import Blueprint

logon = Blueprint('logon', __name__)

@logon.route('/logon')

def hello():
    return 'We are now on the logon page!'