// Задача 2. Інтерфейси (файл task-2.ts)

// У цьому фрагменті коду є об'єкт product, який описує товар.
// Завдання:
// 1. Створи інтерфейс Product, який описує структуру цього об’єкта.
// 2. Зроби поле id тільки для читання – воно не повинно змінюватись після створення об’єкта.
// 3. Зроби поле description необов’язковим – не всі товари можуть його мати.
// 4. Типізуй змінну product за допомогою створеного інтерфейсу.
// 5. Залиш властивості обʼєкта product і їх значення без змін.

interface Product {
  readonly id: number;
  title: string;
  description?: string;
}
const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
