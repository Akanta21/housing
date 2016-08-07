import DS from 'ember-data'
import Ember from 'ember'

export default DS.Model.extend({
  occupied: DS.attr(),

  elementId: Ember.computed('id', function () {
    // return this.get('id')
    return 'hi'
  })

// home: DS.belongsTo('home'),
// section: DS.belongsTo('section')
})
