import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return this.store.findAll('section')
  }
  // numOfTimes: Ember.computed('sections', function () {
  //   console.log(this.get('sections'))
  //   var array = []
  //   var section = this.get('sections')
  //   // console.log(section)
  //   var height = section.get('height')
  //   console.log(height)
  //   var i = 0
  //   while (i < height) {
  //     i++
  //     array.push('x')
  //   }
  //   return array
  // })
})
