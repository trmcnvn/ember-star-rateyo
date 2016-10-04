import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    onChange(rating) {
      console.log(rating);
    },

    onSet(rating) {
      window.alert('Rating set to ' + rating);
    }
  }
});
