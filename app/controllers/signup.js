import Ember from 'ember'

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),
  ajax: Ember.inject.service(),

  actions: {
    register () {
      let userData = {
        name: this.get('name'),
        email: this.get('email'),
        password: this.get('password')
      }

      this.get('ajax').post('/users', { data: userData })
        .then(() => {
          let { name, email, password } = this.getProperties('name', 'email', 'password')
          this.get('session').authenticate('authenticator:oauth2', name, email, password)
            .then(() => {
              this.get('sessionAccount').loadCurrentUser()
            })
        }).catch(() => {
          this.set('errorMessage', 'An error occurred, please try again')
        })
    }
  }
})
