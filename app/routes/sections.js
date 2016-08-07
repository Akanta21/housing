import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return Ember.RSVP.hash({
      cells: this.store.findAll('cell'),
      sections: this.store.findAll('section')
    })
  }
})
