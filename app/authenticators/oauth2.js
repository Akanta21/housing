// import Ember from 'ember'
// import Base from 'ember-simple-auth/authenticators/base'
//
// export default Base.extend({
//   restore(data) {},
//
//   authenticate( /*args*/) {},
//
//   invalidate(data) {}
// })

import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant'
import config from '../config/environment'
// import Ember from 'ember'

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: config.apiURL + '/login'
})
