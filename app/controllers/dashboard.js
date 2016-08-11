import Ember from 'ember'

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),

  actions: {
    createHome (params) {
      var newHome = this.store.createRecord('home', params)
      newHome.save()
      this.transitionToRoute('sections')
    },

    deleteHome (home) {
      console.log('deleteAction Controller')
      console.log(home)
      home.destroyRecord()
    },

    addUser (userEmail) {
      this.store.queryRecord('user', { email: userEmail }).then(function (user) {
        user.save()
      })
    }
  }
})
