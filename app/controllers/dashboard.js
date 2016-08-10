import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    createHome (params) {
      var newHome = this.store.createRecord('home', params)
      newHome.save()
      this.transitionToRoute('sections')
    }
  }
})
