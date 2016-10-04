import Ember from 'ember';

const {
  Component,
  get,
  set,
  run
} = Ember;

const StarRatingComponent = Component.extend({
  rating: 0,

  init() {
    this._super(...arguments);
    const { options } = this.attrs;
    if (options) {
      set(this, 'options', options);
    }
  },

  didInsertElement() {
    this._super(...arguments);
    run.scheduleOnce('afterRender', () => {
      const options = get(this, 'options') || {};
      const reference = this.$().rateYo(options);
      reference.rateYo('rating', get(this, 'rating'));

      reference.on('rateyo.set', (e, data) => {
        const onSet = get(this, 'onSet');
        if (onSet !== undefined) {
          onSet(data.rating);
        }
      });

      reference.on('rateyo.change', (e, data) => {
        const onChange = get(this, 'onChange');
        if (onChange !== undefined) {
          onChange(data.rating);
        }
      });
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$().off('rateyo.set').off('rateyo.change');
    this.$().rateYo('destroy');
  }
});

StarRatingComponent.reopenClass({
  positionalParams: ['rating']
});

export default StarRatingComponent;
