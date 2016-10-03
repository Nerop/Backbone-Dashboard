class localStorageWrap {

    constructor() {

    }

    getItem(key, type) {
        try {
            if (arguments[0] === '') {
                return 'Неправильный ввод';
            } else {
                var retrievedObject = localStorage.getItem(key);

                switch (type) {
                case 'string':
                    return retrievedObject;

                case 'array':
                    return JSON.parse(retrievedObject);

                case 'JSON':
                    return JSON.parse(retrievedObject);

                default:
                    return 'Такого варианта нет';
                }
            }
        } catch (err) {
            console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
        }
    }

    setItem(key, value) {
        if (arguments[0] === '' || arguments[1] === '') {
            return 'Неправильный ввод';
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    removeItem(key) {
        if (arguments[0] === '') {
            return 'Неправильный ввод';
        } else {
            return localStorage.removeItem(key);
        }
    }
}

var loc = new localStorageWrap();
