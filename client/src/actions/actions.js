import * as actions from '../constants/ActionTypes'

export function updateClimateLayer(uniqueID) {
  console.log('actions:updateClimateLayer() called')
  return {
    type: actions.UPDATE_CLIMATE_LAYER,
    uniqueID
  }
}

export function updateClimateVariable(variable) {
  return {
    console.log('actions:updateClimateVariable() called');
    type: actions.UPDATE_CLIMATE_VARIABLE,
    variable
  }
}

export function updateDataVariable(variable) {
  return {
    type: actions.UPDATE_DATA_VARIABLE,
    variable
  }
}