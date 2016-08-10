import Ember from 'ember'

export default Ember.Component.extend({
  homeExist () {
    // if current user home exist, return true
    // else return false
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
