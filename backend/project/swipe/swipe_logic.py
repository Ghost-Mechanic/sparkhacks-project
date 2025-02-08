# ABOUT: This page handles logic relating to displaying the business profiles on the
# swipe page.

from flask import Blueprint, request, redirect, url_for, session
from project.db import get_db

swipe = Blueprint('swipe', __name__)