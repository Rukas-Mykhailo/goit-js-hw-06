// Создай класс  Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент — начальный массив товаров, который записывается в созданный объект в частное свойство  items.

// Огласи следующие методы класса:

// getItems() возвращает массив текущих товаров в частном свойстве  items.
// addItem(newItem) — принимает новый товар  newItem и добавляет его в массив товаров в частное свойство  items объекта.
// removeItem(itemToRemove) — принимает строчку с названием товара itemToRemove и удаляет его из массива товаров в частном свойстве  items объекта.

// Возьми код ниже с инициализацией экземпляра и вызовами методов и вставь его после объявления класса для проверки корректности работы. В консоль будут выведены результаты их работы. Пожалуйста, ничего там не меняй.

class Storage {
  #items;
  constructor(privItems) {
    this.#items = privItems;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
