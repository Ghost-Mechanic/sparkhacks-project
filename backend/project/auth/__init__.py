from flask import Blueprint

logon = Blueprint('logon', __name__)

from . import logon