App.Models.CityModel = Backbone.Model.extend({
    defaults: {
        number: '1',
        name: 'Dnipro'
    }
});
// var cityModel = new App.Models.CityModel();
App.Global.set("cityModel", new App.Models.CityModel());
$.ajax({
    type: "GET",
    url: "cities.json",
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
            let collection = App.Global.get('citiesCollection');
            collection.add(App.Global.get("'" + parsedData.data[i].number + parsedData.data[i].name + "'"));
            console.log(App.Global.get('citiesCollection').toJSON());
            // console.log('key is ' + parsedData.data[i].number);
            // console.log("value is " + parsedData.data[i].name);
        }
    }
});
