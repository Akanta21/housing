import Ember from 'ember'

export default Ember.Component.extend({

  actions: {
    createHome: function () {
      console.log(this.get('homes'))
      this.get('homes').save
      // this.transitionTo('/')

      // model.save()
      // .then((home) => {
      //   this.transitionTo('home', home)
      // })
      // .catch(function (error) {
      //   console.log(error)
      // })
    }
  }
})
