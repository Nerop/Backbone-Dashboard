App.Models.CityModel = Backbone.Model.extend({
    defaults: {
        number: '1',
        name: 'Dnipro'
    }
});
// var cityModel = new App.Models.CityModel();
App.Global.set("cityModel", new App.Models.CityModel());
