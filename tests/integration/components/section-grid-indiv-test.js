import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('section-grid-indiv', 'Integration | Component | section grid indiv', {
  integration: true
})

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value')
  // Handle any actions with this.on('myAction', function(val) { ... })

  this.render(hbs`{{section-grid-indiv}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#section-grid-indiv}}
      template block text
    {{/section-grid-indiv}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
