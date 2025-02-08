import os
from flask import Flask


def create_app(test_config=None):
    # create and configure the app
    # __name__ is used whenever this file is imported
    # 2nd arg makes config files relative to the instance folder
    app = Flask(__name__, instance_relative_config=True)
    # sets default configuration stuff
    app.config.from_mapping(
        SECRET_KEY='dev', # change if we ever actually deploy lol
        # defines the relative path to where we're keeping our db
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    # ----- BLUEPRINT IMPORTS ----- #
    from auth.logon import logon

    # ----- REGISTERING BLUEPRINTS ----- #
    app.register_blueprint(logon, url_prefix='/logon')

    # lets us load testing configs when we want, otherwise just grabs
    # whatever is in the config.py file in the current instance folder
    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    # annotation that connects between url "/hello" on localhost
    # and simply runs the function
    @app.route('/hello')
    def hello():
        return 'Hello, World! We reinitialized our database :3'
        
    from . import db
    db.init_app(app)

    return app
