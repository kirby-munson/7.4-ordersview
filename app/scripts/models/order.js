var Backbone = require('backbone');

var Order = Backbone.model.extend({
  urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/kirby-menu'
});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/kirby-menu'
});


module.exports = {
  'Order': Order,
  'OrderCollection': OrderCollection
};
