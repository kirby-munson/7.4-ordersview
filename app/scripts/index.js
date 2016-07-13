var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');


var url = "https://tiny-lasagna-server.herokuapp.com/collections/kirby-menu";

    $.get(url).done(function(orders){
      var $deleteButton = '<button class="button">Completed</button><br />';
      var orderList = orders.forEach(function(orders, index, array){
        $('.container').append('<div class="order">' + orders.name + '' +  orders.price + '</div>').append($deleteButton);
    });

  });
