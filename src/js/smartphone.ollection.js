App.Collections.Smartphones = Backbone.Collection.extend({
    model: App.Models.SmartphoneModel
});
// var smartphoneCollection = new App.Collections.Smarphones([smartphoneModel]);
App.Global.set("smartphonesCollection", new App.Collections.Smartphones([App.Global.get("smartphoneModel")]));
