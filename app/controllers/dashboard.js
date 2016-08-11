import Ember from 'ember'

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),

  actions: {
    createHome (params) {
      var newHome = this.store.createRecord('home', params)
      newHome.save()
      window.location.reload(true)
    },

    deleteHome (home) {
      console.log('deleteAction Controller')
      console.log(home)
      home.destroyRecord().then(function () {
        window.location.reload(true)
      })
    },

    addUser (userEmail) {
      var filterUser = this.get('model.users').filter(function (user) {
        return user.get('email') === userEmail
      })
      var userId = filterUser[0].get('id')
      this.store.findRecord('user', userId).then(function (user) {
        console.log(user)
        user.save()
        window.location.reload(true)
      })
    }
  }
})
