import Ember from 'ember'

export function filterArray (params /*, hash*/) {
  let [section, index] = params
  let cellsArray = section.get('cells')
  let width = section.get('width')
  let newArray = []
  for (var i = width * index; i < width * (index + 1); i++) {
    newArray.push(cellsArray[i])
  }
  return newArray
}

export default Ember.Helper.helper(filterArray)
