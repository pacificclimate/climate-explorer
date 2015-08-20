from flask import render_template

def add_routes(app):

    @app.route("/")
    def index():
        return render_template("index.html", analytics='UA-20166041-3')
