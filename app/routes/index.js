import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      homes: this.store.findAll('home'),
      section_grids: this.store.findAll('section_grid')
      // sections: this.store.findAll('section')
    })
  }
})
