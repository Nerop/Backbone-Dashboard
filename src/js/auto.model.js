App.Models.AutoModel = Backbone.Model.extend({
    defaults: {
        number: '1',
        name: 'BMW'
    }
});
//var autoModel = new App.Models.AutoModel();
App.Global.set("autoModel", new App.Models.AutoModel());
// var autoModel2 = new App.Models.AutoModel({name:"Audi", number:"2"});

$.ajax({
    type: "GET",
    url: "autos.json",
    error: function () {
        alert('smth went wrong');
    },
    success: function (data) {
        var parsedData = JSON.parse(data);
        var length = 0;
        for (var k in parsedData.data) {
            if (parsedData.data.hasOwnProperty(k))
                length++;
        };

        for (i = 0; i < length; i++) {
            App.Global.set("'" + parsedData.data[i].number + parsedData.data[i].name + "'", new App.Models.AutoModel({
                number: parsedData.data[i].number,
                name: parsedData.data[i].name
            }));
            console.log(App.Global.get("'" + parsedData.data[i].number + parsedData.data[i].name + "'").toJSON());
            let collection = App.Global.get('autosCollection');
            collection.add(App.Global.get("'" + parsedData.data[i].number + parsedData.data[i].name + "'"));
            console.log(App.Global.get('autosCollection').toJSON());
            // console.log('key is ' + parsedData.data[i].number);
            // console.log("value is " + parsedData.data[i].name);
        }
    }
});
