var Backbone = require('backbone');
var FormView = require('./views/FormView');
var $ = require('jquery');
Backbone.$ = $;

var formView = new FormView();

console.log(formView.$el);

$('#form').html(formView.$el);