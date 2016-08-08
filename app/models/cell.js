import DS from 'ember-data'

export default DS.Model.extend({
  occupied: DS.attr(),
  section: DS.attr(),
  home: DS.attr()
  // home: DS.belongsTo('home')
// section: DS.belongsTo('section')
})
