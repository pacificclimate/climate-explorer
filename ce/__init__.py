from flask import Flask

from ce.views import add_routes

def get_app():
    app = Flask(__name__)
    add_routes(app)
    return app
