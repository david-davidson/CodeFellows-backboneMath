var Backbone = require('backbone');
var FormView = require('./views/FormView');
var $ = require('jquery');
Backbone.$ = $;

// Spit out the default view
var formView = new FormView();
$('#form').html(formView.$el);