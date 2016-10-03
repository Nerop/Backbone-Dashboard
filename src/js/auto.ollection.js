App.Collections.Autos = Backbone.Collection.extend({
    model: App.Models.AutoModel
});
// var autosCollection = new App.Collections.Autos([autoModel, autoModel2]);
App.Global.set("autosCollection", new App.Collections.Autos([App.Global.get("autoModel"), App.Global.get("autoModel2"), App.Global.get("autoModel3")]));
