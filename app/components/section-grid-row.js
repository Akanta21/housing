import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['grid_row'],

  numOfTimes: Ember.computed('model', function () {
    var array = []
    this.get('sections').forEach(function (section) {
      var width = section.get('width')
      var i = 0
      while (i < width) {
        i++
        array.push('x')
      }
    })
    return array
  })
})
