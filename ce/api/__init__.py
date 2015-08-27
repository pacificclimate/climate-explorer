''' PCIC Climate Explorer backend API module

.. moduleauthor:: James Hiebert <hiebert@uvic.ca>

'''


import inspect

from json import dumps
from werkzeug.wrappers import BaseResponse as Response
from flask import request

from ce.api.stats import stats
from ce.api.data import data
from ce.api.models import models
from ce.api.metadata import metadata

methods = {
    'stats': stats,
    'data': data,
    'models': models,
    'metadata': metadata
}

__all__ = list(methods.keys()) + ['call']

def call(session, request_type):
    '''Extracts request query parameters, checks for required arguments
       and delegates to helper functions to fetch the resuls from
       storage

       Args:
          session (sqlalchemy.orm.session.Session): A database Session object
          request_type(str): name of the API endpoint to call

       Returns:
          werkzeug.wrappers.Response.  A JSON encoded response object
    '''

    try:
        func = methods[request_type]
    except KeyError:
        return Response("Bad Request", status=400)

    # Check that required args are included in the query params
    required_params = set(get_required_args(func)).difference(['sesh'])
    provided_params = set(request.args.keys())
    if required_params.difference(provided_params):
        return Response("Missing query params", status=400)

    # FIXME: Sanitize input
    args = [ request.args.get(key) for key in required_params ]
    return Response(dumps(func(session, *args)), content_type='application/json')

# from http://stackoverflow.com/questions/196960/can-you-list-the-keyword-arguments-a-python-function-receives
def get_required_args(func):
    args, varargs, varkw, defaults = inspect.getargspec(func)
    if defaults:
        args = args[:-len(defaults)]
    return args   # *args and **kwargs are not required, so ignore them.
