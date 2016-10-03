App.Views.CityView = Backbone.View.extend({
    tagName: 'tr',

    initialize: function () {
        console.log(this.model.toJSON());
        this.render();
    },

    template: _.template('<td name="number"><%= number %></td><td name="name"><%= name %></td>'),

    render: function () {
        this.delegateEvents();
        return this.$el.html(this.template(this.model.toJSON()));
    }
});

// var cityView = new App.Views.CityView({model: cityModel});
App.Global.set("cityView", new App.Views.CityView({
    model: App.Global.get("cityModel")
}));
