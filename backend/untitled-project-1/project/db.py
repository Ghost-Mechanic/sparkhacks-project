import sqlite3 as sql
from datetime import datetime

import click
from flask import current_app, g
# current_app is a reference to the specific FLask object handling a request

# singleton object: g
# represents a unique object for each request,
# to be used by any function
def get_db():
    if 'db' not in g:
        g.db = sql.connect(
            current_app.config['DATABASE'],
            detect_types=sql.PARSE_DECLTYPES
        )
        g.db.row_factory = sql.Row

    return g.db


def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()
