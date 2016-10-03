App.Collections.Cities = Backbone.Collection.extend({
    model: App.Models.CityModel
});
// var citiesCollection = new App.Collections.Cities([cityModel]);
App.Global.set("citiesCollection", new App.Collections.Cities([App.Global.get("cityModel")]));
