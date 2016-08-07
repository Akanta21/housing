// import DS from 'ember-data'
// import Ember from 'ember'
import ActiveModelAdapter from 'active-model-adapter'

// export default DS.RESTAdapter.extend({
//   host: 'https://project-4.herokuapp.com',
//   pathForType: function (type) {
//     return Ember.String.underscore(type)
//   }
// })

export default ActiveModelAdapter.extend({
  // host: 'https://project-4.herokuapp.com'
  host: 'http://localhost:3000'
})
