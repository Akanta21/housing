import DS from 'ember-data'

export default DS.Model.extend({
  height: DS.attr(),
  width: DS.attr(),
  sectionGrids: DS.hasMany('sectionGrid')
})
