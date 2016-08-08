import DS from 'ember-data'
import Ember from 'ember'

export default DS.Model.extend({
  occupied: DS.attr(),
  home: DS.attr(),
  section: DS.attr(),

  elementId: Ember.computed('id', function () {
    return 'cell-' + this.get('id')
  })

// home: DS.belongsTo('home'),
// section: DS.belongsTo('section')
})
