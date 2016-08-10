import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return this.store.createRecord('home')
  },
  actions: {
    createHome () {
      // console.log(this.controller.get('model'))
      // this.controller.get('model').save()
      var newHome = this.get('currentModel')
      newHome.save()
      // this.transitionTo('sections')
    }
  }
})
