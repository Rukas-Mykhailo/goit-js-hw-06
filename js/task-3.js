// Напиши класс  StringBuilder, который принимает один параметр  initialValue — произвольная строка, которая записывается в частное свойство  value создаваемого объекта.

// Огласи следующие методы класса:

// getValue() - возвращает текущее значение частного свойства  value.
// padEnd(str) — получает параметр  str (строка) и добавляет его в конец частному свойству  value объекта, который вызывает этот метод.
// padStart(str) — получает параметр  str (строка) и добавляет его к началу значения частного свойства  value объекта, вызывающего этот метод.
// padBoth(str) — получает параметр  str (строка) и добавляет его к началу и концу значения частного свойства  value объекта, который вызывает этот метод.

class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); //"."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
