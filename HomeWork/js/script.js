class Abonent {
  constructor(name, phone) {
    this._name = name;
    this._phone = phone;
  }

  // Setter для встановлення даних
  set abonentData(data) {
    const [name, phone] = data;
    this._name = name;
    this._phone = phone;
  }

  // Getter для отримання даних
  get abonentInfo() {
    return `Ім'я: ${this._name}, Телефон: ${this._phone}`;
  }

  // Окремі сеттери для імені та телефону
  set name(newName) {
    this._name = newName;
  }

  set phone(newPhone) {
    this._phone = newPhone;
  }

  // Окремі геттери
  get name() {
    return this._name;
  }

  get phone() {
    return this._phone;
  }
}

// Створення трьох різних абонентів
const abonent1 = new Abonent("Іван Петренко", "+380501234567");
const abonent2 = new Abonent("Марія Коваленко", "+380671234568");
const abonent3 = new Abonent("Олексій Сидоренко", "+380631234569");

// Виведення даних про абонентів
console.log("=== ТЕЛЕФОННА КНИГА ===");
console.log(abonent1.abonentInfo);
console.log(abonent2.abonentInfo);
console.log(abonent3.abonentInfo);

// Демонстрація роботи сеттера
console.log("\n=== ОНОВЛЕННЯ ДАНИХ ===");
abonent1.abonentData = ["Іван Іванов", "+380501111111"];
console.log(abonent1.abonentInfo);

// Демонстрація окремих сеттерів
abonent2.phone = "+380672222222";
console.log(abonent2.abonentInfo);
