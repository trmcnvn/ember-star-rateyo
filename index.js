/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-star-rating',

  included: function(app) {
    app.import(app.bowerDirectory + '/rateYo/src/jquery.rateyo.js');
    app.import(app.bowerDirectory + '/rateYo/src/jquery.rateyo.css');
  }
};
