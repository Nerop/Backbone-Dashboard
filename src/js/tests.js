QUnit.test("Проверка обертки над Local Storage", function (assert) {
    assert.deepEqual(loc.getItem('array', 'array'), [1, 2, 3], 'Получили массив');
    assert.deepEqual(loc.getItem('array', 'JSON'), [1, 2, 3], 'Получили JSON');
    assert.strictEqual(loc.getItem('array', 'string'), "[1,2,3]", 'Получили строку');

    assert.strictEqual(loc.getItem('', 'array'), 'Неправильный ввод', 'Ошибка сработала');
    assert.strictEqual(loc.getItem('', ''), 'Неправильный ввод', 'Ошибка сработала');
    assert.strictEqual(loc.getItem('asd', 'qwe'), 'Такого варианта нет', 'Ошибка сработала');

    assert.strictEqual(loc.setItem('setItem', 'valueOfSetItem'), undefined, 'Значение записано');

    assert.strictEqual(loc.setItem('', ''), 'Неправильный ввод', 'Ошибка сработала');
    assert.strictEqual(loc.setItem('123', ''), 'Неправильный ввод', 'Ошибка сработала');
    assert.strictEqual(loc.setItem('', '123'), 'Неправильный ввод', 'Ошибка сработала');

    assert.strictEqual(loc.removeItem('setItem'), undefined, 'Значение удалено');

    assert.strictEqual(loc.removeItem(''), 'Неправильный ввод', 'Ошибка сработала');
});
