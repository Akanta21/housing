import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  home: DS.attr()
  // home: DS.belongsTo('home')
})
