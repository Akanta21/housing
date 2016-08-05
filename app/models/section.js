import DS from 'ember-data'

export default DS.Model.extend({
  height: DS.attr(),
  width: DS.attr()
  // section_grids: DS.hasMany('section_grid')
})
