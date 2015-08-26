import inspect

from json import dumps
from flask import request
from werkzeug.wrappers import BaseResponse as Response

def call(session, request_type):

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

def stats(sesh, id_, time, area, variable):
    return {
        'model_id1':
        {
            'min': 0.0,
            'max': 2.0,
            'mean': 1.0,
            'median': 1.0,
            'stdev': 1.0,
            'units': 'degC'
        },
    }

def data(sesh, id_, time, area, variable):
    return {
        'model_id1':
        {
            '2020': 10.0,
            '2050': 20.0,
            '2080': 35.0,
            'units': 'degC'
        },
    }

def models(sesh, ensemble_name='bcsd_downscale_canada'):
    return [ 'model_id{}'.format(i) for i in range(5) ]

def metadata(sesh, model_id=None):
    return {
        'model_id1':
        {
            'institute_id': '<string>',
            'institution': '<string>',
            'model_id': '<string>',
            'model_name': '<string>',
            'experiment': '<string>',
            'variables': ['<string:var1>', '<string:var2>'],
            'ensemble_member': '<string>'
        },
        'model_id2':
        {
            'institute_id': '<string>',
            'institution': '<string>',
            'model_id': '<string>',
            'model_name': '<string>',
            'experiment': '<string>',
            'variables': ['<string:var1>', '<string:var2>'],
            'ensemble_member': '<string>'
        },
    }

methods = {
    'stats': stats,
    'data': data,
    'models': models,
    'metadata': metadata
}

# from http://stackoverflow.com/questions/196960/can-you-list-the-keyword-arguments-a-python-function-receives
def get_required_args(func):
    args, varargs, varkw, defaults = inspect.getargspec(func)
    if defaults:
        args = args[:-len(defaults)]
    return args   # *args and **kwargs are not required, so ignore them.
