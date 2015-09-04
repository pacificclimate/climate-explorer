import pytest

from flask import url_for

from ce.api import *

@pytest.mark.parametrize(('endpoint', 'query_params'), [
    ('stats', {'id_': '', 'time': '', 'area': '', 'variable': ''}),
    ('data', {'id_': '', 'time': '', 'area': '', 'variable': ''}),
    ('models', {}),
    ('metadata', {})
])
def test_api_endpoints_are_callable(test_client, endpoint, query_params):
    url = '/api/' + endpoint
    response = test_client.get(url, query_string=query_params)
    assert response.status_code == 200

def test_models(populateddb):
    sesh = populateddb.session
    rv = models(sesh, 'bc_prism')
    assert rv
