import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['grid_indiv'],
  attributeBindings: ['style'],

  occupiedCellId: Ember.computed('cell', function () {
    if (this.get('cell').occupied) {
      return this.get('cell').id
    }
  }),

  cellColor: Ember.computed('cells', function () {
    var occupied = this.get('occupiedCellId')
    if (occupied) {
      var filterCell = this.get('cells').filter(cell => { return parseInt(cell.get('id'), 10) === occupied })
      return filterCell[0].get('home').color
    }
  }),

  style: Ember.computed('cell', function () {
    if (this.get('cell').occupied) {
      return Ember.String.htmlSafe('background-color: ' + this.get('cellColor'))
    }
    else return null
  })
})
