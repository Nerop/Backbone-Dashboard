App.Views.CitiesView = Backbone.View.extend({
    tagName: 'tbody',

    initialize: function () {
        //this.render();
    },

    render: function () {
        this.collection.each(function (cityModel) {
            var cityView = new App.Views.AutoView({
                model: cityModel
            });
            $('.object-holder').append(cityView.el);
        }, this);

        return this;
    }
});
// var citiesCollectionView = new App.Views.CitiesView({collection: citiesCollection});
App.Global.set("citiesCollectionView", new App.Views.CitiesView({
    collection: App.Global.get("citiesCollection")
}));
