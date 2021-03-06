import Ember from 'ember'
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model () {
    return Ember.RSVP.hash({
      currentUser: this.store.queryRecord('user', { me: true }),
      homes: this.store.findAll('home'),
      users: this.store.findAll('user')
    })
  }
})
