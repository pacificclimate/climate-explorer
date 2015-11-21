/*
Functions which modify the state

*/

import {Map} from 'immutable';

export function setModels(state, models) {
  console.log(models)
  return state.set('models', Map(models));
}

export function updateFilter(state) {

}