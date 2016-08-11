import Ember from 'ember'

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),

  currentUser () {
    // return something
  },

  actions: {
    createHome (params) {
      var newHome = this.store.createRecord('home', params)
      newHome.save()
      this.transitionToRoute('sections')
    }
  }
})
