// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта  customer, расставив отсутствующие  this при обращении к свойствам объекта.

// Используй этот стартовый код и выполни рефакторинг. После оглашения объекта мы добавили вызовы методов. В консоль будут выведены результаты их работы. Пожалуйста, ничего там не меняй.

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Изменить код ниже этой линии
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Изменить код выше этой линии
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); //0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
