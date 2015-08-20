'''
Query Params

id: Model ID[s] (optional, null means all models)

Returns JSON model metadata:

{
model_id1:
    {
    institute_id: <string>,
    institution: <string>,
    model_id: <string>,
    model_name: <string>,
    experiment: <string>,
    variables: [<string:var1>, <string:var2>, ... ],
    ensemble_member: <string>
    },
model_id2:
    ...
}
'''