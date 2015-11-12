import * as types from '../constants/ActionTypes'

export function updateClimateLayer(uniqueID) {
  return {
    type: types.UPDATE_CLIMATE_LAYER,
    uniqueID
  }
}

export function updateClimateVariable(variable) {
  return {
    type: types.UPDATE_CLIMATE_VARIABLE,
    variable
  }
}

export function updateDataVariable(variable) {
  return {
    type: types.UPDATE_DATA_VARIABLE,
    variable
  }
}