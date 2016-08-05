import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['grid_whole'],

  numOfTimes: Ember.computed('model', function () {
    var array = []
    this.get('sections').forEach(function (section) {
      var height = section.get('height')
      var i = 0
      while (i < height) {
        i++
        array.push('x')
      }
    })
    return array
  })
})
