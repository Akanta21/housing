import Ember from 'ember'

export default Ember.Component.extend({
  users: [],
  color: '',
  home: '',
  homeExist: '',

  init () {
    this._super()
    if (this.currentUser.get('home')) {
      this.set('homeExist', true)
      this.set('color', this.currentUser.get('home').color)
      var filterHome = this.homes.filter(home => { return parseInt(home.get('id'), 10) === this.currentUser.get('home').id })
      this.set('home', filterHome[0])
      this.set('users', filterHome[0].get('users'))
    }
    else this.set('homeExist', false)
  },

  actions: {
    delete () {
      console.log('delete component')
      this.attrs.delete(this.get('home'))
    },
    add () {
      var userEmail = this.get('email')
      console.log(userEmail)
      this.attrs.add(userEmail)
    }
  }
})
