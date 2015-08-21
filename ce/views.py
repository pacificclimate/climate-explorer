from flask import render_template, request

import ce.api

def add_routes(app):

    @app.route("/")
    def index():
        return render_template("index.html", analytics='UA-20166041-3')

    @app.route("/api/<request_type>")
    def api_request(*args, **kwargs):
        return ce.api.call(*args, **kwargs)
