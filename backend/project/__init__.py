import os
from flask import Flask
from flask_cors import CORS

def create_app(test_config=None):
    # create and configure the app
    # __name__ is used whenever this file is imported
    # 2nd arg makes config files relative to the instance folder
    app = Flask(__name__, static_folder='../spark/dist', static_url_path='/')
    CORS(app)
    # sets default configuration stuff
    app.config.from_mapping(
        SECRET_KEY='dev', # change if we ever actually deploy lol
        # defines the relative path to where we're keeping our db
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    # ----- BLUEPRINT IMPORTS ----- #
    from project.auth.logon import logon
    from project.swipe.swipe_logic import swipe
    from project.friends.friends_list import friends_list
    

    # ----- REGISTERING BLUEPRINTS ----- #
    app.register_blueprint(logon)
    app.register_blueprint(swipe)
    app.register_blueprint(friends_list)

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
    
    # @app.route('/hello')
    # def hello():
    #     return 'Hello, World! We reinitialized our database :3'
        
    from . import db
    from flask import send_from_directory
    
    db.init_app(app)

    @app.route('/')
    def serve_react():
        return send_from_directory(app.static_folder, 'index.html')


    @app.route('/<path:path>')
    def serve_static_files(path):
        return send_from_directory(app.static_folder, path)


    return app
