App.Views.AutosView = Backbone.View.extend({
    tagName: 'tbody',

    initialize: function () {
        //this.render();
    },

    render: function () {
        this.collection.each(function (autoModel) {
            var autoView = new App.Views.AutoView({
                model: autoModel
            });
            $('.object-holder').append(autoView.el);
        }, this);

        return this;
    }
});
// var autosCollectionView = new App.Views.AutosView({collection: autosCollection});
App.Global.set("autosCollectionView", new App.Views.AutosView({
    collection: App.Global.get("autosCollection")
}));
