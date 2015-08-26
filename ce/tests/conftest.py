import py.path
import tempfile

import pytest
import modelmeta
from modelmeta import *
from flask.ext.sqlalchemy import SQLAlchemy

from ce import get_app

# From http://stackoverflow.com/questions/25525202/py-test-temporary-folder-for-the-session-scope
@pytest.fixture(scope='session')
def sessiondir(request):
    dir = py.path.local(tempfile.mkdtemp())
    request.addfinalizer(lambda: dir.remove(rec=1))
    return dir

@pytest.fixture(scope='session')
def dsn(sessiondir):
    return 'sqlite:///{}'.format(sessiondir.join('test.sqlite').realpath())

@pytest.fixture
def app(dsn):
    app = get_app()
    app.config['SQLALCHEMY_DATABASE_URI'] = dsn
    app.config['SQLALCHEMY_ECHO'] = True
    return app

@pytest.fixture
def cleandb(app):
    db = SQLAlchemy(app)
    modelmeta.v2.metadata.create_all(bind=db.engine)
    db.create_all()

@pytest.mark.usefixtures("cleandb")
@pytest.fixture
def populateddb(app):
    db = SQLAlchemy(app)

    ens0 = Ensemble(name='bccaqv2', version=1.0, changes='', description='')
    ens1 = Ensemble(name='bc_prism', version=2.0, changes='', description='')
    db.session.add_all([ens0, ens1])
    db.session.commit()

