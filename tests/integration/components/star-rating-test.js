import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('star-rating', 'Integration | Component | star rating', {
  integration: true
});

test('it renders with default options', function(assert) {
  assert.expect(1);
  this.render(hbs`{{star-rating}}`);
  assert.equal(this.$('svg').length, 10, 'Stars are rendered');
});

test('can pass options hash', function(assert) {
  assert.expect(1);
  this.render(hbs`
    {{star-rating
      options=(hash numStars=10)
    }}
  `);
  assert.equal(this.$('svg').length, 20, 'Stars are rendered');
});

test('actions are invoked', function(assert) {
  assert.expect(2);
  this.set('onChange', () => assert.ok(true));
  this.set('onSet', () => assert.ok(true));
  this.render(hbs`{{star-rating onChange=onChange onSet=onSet}}`);

  const offset = (el) => {
    const rect = el.getBoundingClientRect();
    return { x: rect.left, y: rect.top };
  };
  const event = document.createEvent('MouseEvents');
  const elem = this.$('.jq-ry-group-wrapper')[0];
  event.initMouseEvent('click', true, true, window, null, 0, 0,
    offset(elem).left + 100, offset(elem).top + 8, false,
    false, false, false, 0, null);
  elem.dispatchEvent(event);

  event.initMouseEvent('mousemove', true, true, window, null, 0, 0,
    offset(elem).left + 100, offset(elem).top + 8, false,
    false, false, false, 0, null);
  elem.dispatchEvent(event);
});
