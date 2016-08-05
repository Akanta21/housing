import DS from 'ember-data'

export default DS.Model.extend({
  occupied: DS.attr()
  // home: DS.belongsTo('home'),
  // section: DS.belongsTo('section')
})
