App.Views.Record = Backbone.View.extend({
    initialize: function () {
        vent.on('Records:show', this.showRecord, this);
    },

    showRecord: function (id) {
        console.log("Record's id is " + id);
    }
});
