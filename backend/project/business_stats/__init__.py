from flask import Blueprint

business_stats = Blueprint('business_stats', __name__)

from . import business_stats