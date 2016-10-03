App.Models.AutoModel = Backbone.Model.extend({
    defaults: {
        number: '1',
        name: 'BMW'
    }
});
//var autoModel = new App.Models.AutoModel();
App.Global.set("autoModel", new App.Models.AutoModel());
// var autoModel2 = new App.Models.AutoModel({name:"Audi", number:"2"});
App.Global.set("autoModel2", new App.Models.AutoModel({
    name: "Audi",
    number: "2"
}));
App.Global.set("autoModel3", new App.Models.AutoModel({
    name: "Daewoo",
    number: "3"
}));
