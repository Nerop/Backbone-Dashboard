App.Models.AuthorizationModel = Backbone.Model.extend({
    defaults: {
        username: 'Admin',
        password: 'qwerty',
        authorized: false
    }
});
App.Global.set("authModel", new App.Models.AuthorizationModel()); //new App.Models.AuthorizationModel();
