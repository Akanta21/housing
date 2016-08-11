import Ember from 'ember'

export default Ember.Controller.extend({
  sessionAccount: Ember.inject.service(),
  residents: [],
  optionToOccupy: false,
  optionToVacate: false,
  emptyCell: '',
  color: '',

  actions: {
    checkCell (cell) {
      if (cell.occupied) {
        this.set('optionToOccupy', false)
        console.log('occupied')
        var occupiedCellId = cell.id
        var filterCell = this.get('model.cells').filter(cell => { return parseInt(cell.get('id'), 10) === occupiedCellId })
        var filterHome = this.get('model.homes').filter(home => { return parseInt(home.get('id'), 10) === filterCell[0].get('home').id })
        this.set('residents', filterHome[0].get('users'))
        this.set('color', filterHome[0].get('color'))
        if (parseInt(this.get('sessionAccount').currentUser.get('home').id, 10) === parseInt(filterHome[0].id, 10)) {
          console.log('match!')
          this.set('optionToVacate', true)
        } else {
          this.set('optionToVacate', false)
        }
      } else {
        console.log('empty')
        this.set('optionToOccupy', true)
        this.set('optionToVacate', false)
        this.set('color', 'black')
        var emptyCellId = cell.id
        var filterEmptyCell = this.get('model.cells').filter(cell => { return parseInt(cell.get('id'), 10) === emptyCellId })
        this.set('emptyCell', filterEmptyCell[0])
      }
    },

    updateCell (cell) {
      cell.save()
      window.location.reload(true)
    }
  }
})
