import DS from 'ember-data'
import Ember from 'ember'

export default DS.Model.extend({
  height: DS.attr(),
  width: DS.attr(),
  cells: DS.attr(),
  elementId: Ember.computed('id', function () {
    return 'grid-' + this.get('id')
  })

  // section_grids: DS.hasMany('section_grid')
})
