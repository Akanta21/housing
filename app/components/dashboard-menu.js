import Ember from 'ember'

export default Ember.Component.extend({
  homeExist: '',

  init () {
    this._super()
    if (this.currentUser.get('home')) this.set('homeExist', true)
    else this.set('homeExist', false)
  },

  actions: {
    create () {
      var params = {
        color: this.get('color')
      }
      this.attrs.create(params)
    }
  }

})
