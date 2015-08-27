'''
Query Params

none

Returns list of all models available:

[
model_id1,
model_id2,
...
]
'''

def models(sesh, ensemble_name='bcsd_downscale_canada'):
    '''
    '''
    return [ 'model_id{}'.format(i) for i in range(5) ]
