App.Models.Add_EditModel = Backbone.Model.extend({
    defaults: {
        collection: '123',
        number: '444',
        name: '321',
    }
});
App.Global.set("add_editModel", new App.Models.Add_EditModel());
