App.Models.SmartphoneModel = Backbone.Model.extend({
    defaults: {
        number: '1',
        name: 'iPhone'
    }
});

// var smartphoneModel = new App.Models.SmarphoneModel();
App.Global.set("smartphoneModel", new App.Models.SmartphoneModel());
