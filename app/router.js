import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('sections', function () {
    this.route('show', {
      path: ':section_id'
    })
  })
  this.route('login')
  this.route('signup')
})

export default Router
