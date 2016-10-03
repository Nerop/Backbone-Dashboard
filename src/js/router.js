App.Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'authorize': 'authorize',
        'autos': 'showAutos',
        'cities': 'showCities',
        'smartphones': 'showSmarphones',
        'add_edit': 'addOrEdit'
            // 'settings': 'settings',
            // 'record/:id': 'showRecord'
    },

    index: function () {
        console.log('Всем привет от индексного роута!');
    },

    authorize: function () {
        //vent.trigger('Authorize:show');
        $('.container').html(App.Global.get('authView').render().$el);
    },

    showAutos: function () {
        console.log('autos');
        $('.object-holder').html('');
        $('.add_edit_container').html('');
        $('.object-holder').append(App.Global.get('autosCollectionView').render());
    },

    showCities: function () {
        console.log('cities');
        $('.object-holder').html('');
        $('.add_edit_container').html('');
        $('.object-holder').append(App.Global.get('citiesCollectionView').render());
    },

    showSmarphones: function () {
        console.log('smartphones');
        $('.object-holder').html('');
        $('.add_edit_container').html('');
        $('.object-holder').append(App.Global.get('smartphoneCollectionView').render());
    },

    addOrEdit: function () {
        console.log('add_edit');
        $('.add_edit_container').html('');
        $('.add_edit_container').append(App.Global.get('add_editView').el);
    }

    // settings: function() {
    //     console.log('Settings');
    // },
    //
    // showRecord: function(id) {
    //     if (id == 1 || id == 2 || id == 3) {
    //         vent.trigger('Records:show', id);
    //         //console.log(id);
    //     } else {
    //         console.log('No such record!');
    //     }
    // }
});

new App.Router();

Backbone.history.start();
