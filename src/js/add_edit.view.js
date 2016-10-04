App.Views.Add_EditView = Backbone.View.extend({
    tagName: 'div',

    class: 'add_edit',

    events: {
        'click #btn-save': 'saveModel'
    },

    saveModel: function () {
        //let collectionName = $('#collection').text();
        let number = $('#number').text();
        let name = $('#name').text();
        console.log('saved');

        if ($("#change_model option:selected").text() === "Редактирование") {
            if ($("#change_collection option:selected").text() === "Автомобили") {
                // let editModel = App.Global.get('autosCollection').where({number: $('#number').text()});
                // editModel.set({name: $('#name').text()});
                console.log('click');
            } else if ($("#change_collection option:selected").text() === "Города") {
                let editModel = App.Global.get('citiesCollection').where({
                    number: $('#number').text()
                });
                editModel.set({
                    name: $('#name').text()
                });
            } else {
                let editModel = App.Global.get('smartphonesCollection').where({
                    number: $('#number').text()
                });
                editModel.set({
                    name: $('#name').text()
                });
            }
        } else if ($("#change_model option:selected").text() === "Добавление") {
            if ($("#change_collection option:selected").text() === "Автомобили") {
                // App.Global.set("'" + name + number + "'", new App.Models.AutoModel({
                //     name: "'" + name + "'",
                //     number: "'" + number + "'"
                // }));
                //App.Global.set("autosCollection", App.Global.get("'" + name + number + "'"));
                // console.log('added new auto');

                let collection = App.Global.get('autosCollection');
                collection.add({name: $('#name').val(), number: $('#number').val()});

                //console.log(collection.toJSON());
                //App.Global.set("autosCollection", collection);
                console.log(App.Global.get('autosCollection').toJSON());
            } else if ($("#change_collection option:selected").text() === "Города") {
                let collection = App.Global.get('citiesCollection');
                collection.add({name: $('#name').val(), number: $('#number').val()});

                //console.log(collection.toJSON());
                //App.Global.set("autosCollection", collection);
                console.log(App.Global.get('citiesCollection').toJSON());
            } else {
                let collection = App.Global.get('smartphonesCollection');
                collection.add({name: $('#name').val(), number: $('#number').val()});

                //console.log(collection.toJSON());
                //App.Global.set("autosCollection", collection);
                console.log(App.Global.get('smartphonesCollection').toJSON());
            }

        }
    },

    initialize: function () {
        console.log(this.model.toJSON());
        this.render();
    },

    template: _.template('<div class="container add_edit"><div class="col-md-5"><div class="form-area"><br style="clear:both"><select id="change_model"><option>Добавление</option><option>Редактирование</option></select><div class="form-group"><select id="change_collection"><option>Автомобили</option><option>Города</option><option>Смартфоны</option></select>    </div><div class="form-group"><input type="text" class="form-control" id="number" name="number" placeholder="Номер"></div><div class="form-group"><input type="text" class="form-control" id="name" name="name" placeholder="Название"></div><button id="btn-save" class="btn btn-primary pull-right">Сохранить</button></div></div></div>'),

    render: function () {
        this.delegateEvents();
        // $('.add_edit_container').html(this.template(this.model.toJSON()));
        return this.$el.html(this.template(this.model.toJSON()));
    }
});

// var autoView = new App.Views.AutoView({model: autoModel});
App.Global.set("add_editView", new App.Views.Add_EditView({
    model: App.Global.get("add_editModel")
}));
