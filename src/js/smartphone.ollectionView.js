App.Views.SmartphonesView = Backbone.View.extend({
    tagName: 'tbody',

    initialize: function () {
        //this.render();
    },

    render: function () {
        this.collection.each(function (smartphoneModel) {
            var smartphoneView = new App.Views.AutoView({
                model: smartphoneModel
            });
            $('.object-holder').append(smartphoneView.el);
        }, this);

        return this;
    }
});
// var smartphoneCollectionView = new App.Views.SmarphonesView({collection: smartphonesCollection});
App.Global.set("smartphoneCollectionView", new App.Views.SmartphonesView({
    collection: App.Global.get("smartphonesCollection")
}));
