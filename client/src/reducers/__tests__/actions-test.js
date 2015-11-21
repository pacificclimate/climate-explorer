jest.dontMock('../actions');
jest.dontMock('immutable');

import {fromJS} from 'immutable';
import {setModels} from '../actions';

const prismMeta = {
  "pr_monClim_PRISM_historical_run1_197101-200012": {
    "model_id": "PRISM",
    "variables": {
      "pr": "Precipitation Climatology"
    },
    "model_name": null,
    "experiment": "historical",
    "ensemble_member": "run1",
    "institution": ""
  }
}

describe('state modifications', () => {

  describe('initializing state', () => {

    it('adds the models to the state', () => {
      const state = Map();
      const models = fromJS(prismMeta);
      const nextState = setModels(state, prismMeta);
      expect(nextState).to.equal(Map({
        models: Map({
          "pr_monClim_PRISM_historical_run1_197101-200012": Map({
            "model_id": "PRISM",
            "variables": Map({
              "pr": "Precipitation Climatology"
            }),
            "model_name": null,
            "experiment": "historical",
            "ensemble_member": "run1",
            "institution": ""
          })
        })
      }));
    });

  });

});

