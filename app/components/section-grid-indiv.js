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

  residents: [],

  click: function (event) {
    console.log('CLICK')
    console.log(event.target)
    if (this.get('cell').occupied) {
      var occupiedCellId = this.get('cell').id
      var filterCell = this.get('cells').filter(cell => { return parseInt(cell.get('id'), 10) === occupiedCellId })
      var filterHome = this.get('homes').filter(home => { return parseInt(home.get('id'), 10) === filterCell[0].get('home').id })
      console.log('HOME ID: ', filterHome[0].get('id'))
      this.set('residents', filterHome[0].get('users'))
      console.log(this.get('residents'))
      var residents = filterHome[0].get('users')
      this.attrs.save(residents)
    } else {
      // Option to add cell to home
    }
  }

  // actions: {
  //   selectCell: function () {
  //     console.log('select')
  //   }
  // }
})
