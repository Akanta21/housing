import Ember from 'ember'

export default Ember.Route.extend({
  // model () {
  //   return Ember.RSVP.hash({
  //     users: this.store.findAll('user'),
  //     homes: this.store.findAll('home')
  //   })
  // }
  model () {
    return this.store.createRecord('home')
  }
})
