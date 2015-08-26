import pytest
from flask.ext.sqlalchemy import SQLAlchemy
from modelmeta import *

@pytest.mark.usefixtures("cleandb")
def test_can_query_db(app):
    db = SQLAlchemy(app)
    sesh = db.session
    results = sesh.query(Ensemble.name).all()


@pytest.mark.usefixtures("populateddb")
def test_db_is_populated(app):
    db = SQLAlchemy(app)
    sesh = db.session()
    assert sesh.query(Ensemble).count() > 0
