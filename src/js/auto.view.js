App.Views.AutoView = Backbone.View.extend({
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

// var autoView = new App.Views.AutoView({model: autoModel});
App.Global.set("autoView", new App.Views.AutoView({
    model: App.Global.get("autoModel")
}));
