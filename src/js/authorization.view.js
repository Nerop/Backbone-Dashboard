$(function () {
    App.Views.AuthorizationView = Backbone.View.extend({
        //el: $('authorization-container'),
        //tagName: 'li',

        initialize: function () {
            //vent.on('Authorize:show', this.Authorize, this);
            this.Authorize();
            this.render();
        },

        template: _.template('<div class="row text-center"><div class="col-md-offset-4 col-md-4"><div class="form-login"><input type="text" id="userName" class="form-control input-sm chat-input" placeholder="Логин" /></br><input type="text" id="userPassword" class="form-control input-sm chat-input" placeholder="Пароль" /></br><div class="row text-center"><button class="btn btn-primary btn-md" id="btn-login">Войти</button></div></div></div>'),

        events: {
            'click #btn-login': 'log'
        },

        log: function () {
            // localStorage.setItem('Username',$('#userName').html());
            // localStorage.setItem('Password',$('#userPassword').html());
            // this.Authorize();
            console.log('clicked');
        },

        logOff: function () {
            localStorage.setItem('Username', '');
            localStorage.setItem('Password', '');
            location.reload();
        },

        Authorize: function () {
            if (USERNAME === 'Admin' && PASSWORD === 'qwerty') {
                //console.log('Authorized!');
                this.model.set('authorized', true);
                this.render();
                //location.href += '#authorize';
                //setTimeout(this.logOff, 300000);
                console.log(this.model.get('authorized'));
            } else {
                this.model.set('authorized', false);
                this.render();
                console.log('Access denied!');
            }
        },

        render: function () {
            if (this.model.get('authorized') === true) {
                console.log(this.model.get('authorized'));
                $('.authorization-container').html('<div class="container main-container admin-page"><div class="row"><div class="col-md-2 sidebar"><ul class="nav nav-pills nav-stacked"><li><a href="#autos">Автомобили</a></li><li><a href="#cities">Города</a></li><li><a href="#smartphones">Смартфоны</a></li><li><a href="#add_edit">Добавление/Редактирование</a></li></ul></div><div class="col-md-10 content"><div class="panel panel-default"><div class="panel-heading">Рабочая область</div><table class="table table-striped custab object-holder"><thead><tr><th>ID</th><th class="text-center">Название</th></tr></thead></table></div></div></div></div>');
            }
            //this.$el.html(this.template(this.model.toJSON()));
            else if (this.model.get('authorized') === false) {
                //console.log('Call from else: ' + authorized);
                this.$el.html(this.template);
            }
            return this;
            //console.log('rendered!');
        }
    });
    //var authView = new App.Views.AuthorizationView({model: authModel});
    App.Global.set("authView", new App.Views.AuthorizationView({
        model: App.Global.get('authModel')
    }));

});
