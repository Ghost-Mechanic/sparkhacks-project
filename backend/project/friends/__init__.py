from flask import Blueprint

friends_list = Blueprint('friends_list', __name__)

from . import friends_list