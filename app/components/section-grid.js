import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['grid_whole'],

  numOfTimes: Ember.computed('sections', function () {
    console.log('section-grid.js')
    var array = []
    var section = this.get('sections')
    var height = section.get('height')
    var i = 0
    while (i < height) {
      i++
      array.push('x')
    }
    return array
  })

})
