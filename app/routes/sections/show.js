import Ember from 'ember'

export default Ember.Route.extend({
  model (params) {
    return Ember.RSVP.hash({
      // cells: this.store.findAll('cell'),
      // homes: this.store.findAll('home'),
      sections: this.store.findRecord('section', params.section_id, {reload: true})
    })
  }
})
