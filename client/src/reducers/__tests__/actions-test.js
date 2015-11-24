jest.dontMock('../actions.js');

import Immutable, {Map} from 'immutable';

const prismMeta = {
  "pr_monClim_PRISM_historical_run1_197101-200012": {
    "model_id": "PRISM",
    "variables": {
      "pr": "Precipitation Climatology",
      "tmax": "Temperature Climatology (Maximum)",
      "tmin": "Temperature Climatology (Minimum)"
    },
    "model_name": null,
    "experiment": "historical",
    "ensemble_member": "run1",
    "institution": ""
  }
}

describe('state modifications', () => {

  beforeEach(function () {
    this.addMatchers({
      toEqualImmutable: function(expected) {
        return Immutable.is(this.actual, expected);
      }
    })
  })

  describe('addModels', () => {
    var setModels = require('../actions').setModels;

    it('adds the models to the state', () => {
      const state = Map();
      const models = Map(prismMeta);
      const nextState = setModels(state, models);
      const expected = Map({'models': Map(prismMeta)});
      expect(nextState).toEqualImmutable(expected);
    });

    it('converts to immutable', () => {
      const state = Map();
      const nextState = setModels(state, prismMeta);
      expect(nextState).toEqualImmutable(Map({'models': Map(prismMeta)}));
    });


  });

});

