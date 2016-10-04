# ember-star-rating

[![npm version](https://badge.fury.io/js/ember-star-rating.svg)](http://badge.fury.io/js/ember-star-rating)
[![Build Status](https://travis-ci.org/vevix/ember-star-rating.svg?branch=master)](https://travis-ci.org/vevix/ember-star-rating)

An [ember.js](http://www.emberjs.com) component for star ratings using RateYo!

![](https://i.gyazo.com/e9048b774f88f8fdab6c4b10f70b5427.gif)

### Installing the Add-on

In your application's directory:
```bash
$ ember install ember-star-rating
```

### Using the Add-on

Use the component in your Handlebars templates:

```hbs
{{star-rating 2.5}}
```

#### Actions

```hbs
{{star-rating
  onChange=(action ...)
  onSet=(action ...)
}}
```

#### Configuration

```hbs
{{star-rating
  options=(hash ...)
}}
```

To see what options are available consult the [RateYo! Docs](http://rateyo.fundoocode.ninja/).

### License

[MIT](https://github.com/vevix/ember-star-rating/blob/master/LICENSE.md)
