import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['grid_indiv'],
  attributeBindings: ['style'],

  style: Ember.computed('cell', 'cells', function () {
    if (this.get('cell').occupied) {
      var occupiedCellId = this.get('cell').id
      var filterCell = this.get('cells').filter(cell => { return parseInt(cell.get('id'), 10) === occupiedCellId })
      return Ember.String.htmlSafe('background-color: ' + filterCell[0].get('home').color)
    }
    else return null
  }),

  click: function (event) {
    console.log('CLICK')
    console.log(event.target)
    this.attrs.save(this.get('cell'))
  }
})
