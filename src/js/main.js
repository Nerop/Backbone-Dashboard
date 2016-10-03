window.App = {
    Views: {},
    Models: {},
    Collections: {},
    Router: {},
    Global: {}
};

// шаблон
window.template = function (id) {
    return _.template($('#' + id).html());
};

var USERNAME = localStorage.getItem('Username');
var PASSWORD = localStorage.getItem('Password');
//var authorized = false;

var vent = _.extend({}, Backbone.Events);
