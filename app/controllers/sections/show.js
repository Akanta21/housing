import Ember from 'ember'

export default Ember.Controller.extend({
  residents: [],

  actions: {
    saveResult (newData) {
      console.log(newData)
      this.set('residents', newData)
    }
  }
})
