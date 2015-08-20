'''
Query Params

id: Model ID
time: Climatological period (0-17)
area: WKT of selected area
variable: Variable requested

Returns JSON Climatological data:

{
model_id1: 
    {
    2020: <float>,
    2050: <float>,
    2080: <float>,
    units: <string>
    },
model_id2:
    ...
}
'''