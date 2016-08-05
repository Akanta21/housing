import DS from 'ember-data'

export default DS.Model.extend({
  size: DS.attr(),
  users: DS.hasMany('user'),
  sectionGrids: DS.hasMany('sectionGrid')
})
