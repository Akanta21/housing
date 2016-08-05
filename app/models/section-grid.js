import DS from 'ember-data'

export default DS.Model.extend({
  occupied: DS.attr(),
  homes: DS.belongsTo('home'),
  sectionGrids: DS.belongsTo('sectionGrid')
})
