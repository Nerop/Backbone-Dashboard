App.Views.SmartphoneView = Backbone.View.extend({
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
// var smartphoneView = new App.Views.SmarphoneView({model: smartphoneModel});
App.Global.set("smartphoneView", new App.Views.SmartphoneView({
    model: App.Global.get("smartphoneModel")
}));
