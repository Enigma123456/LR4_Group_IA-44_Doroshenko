/* ============================================================================
   1.1. ПІДТЕМА «ОБ'ЄКТ» (Варіант 5: завдання 5, 9)
   ============================================================================ */

/* Завдання 5. Зміна властивостей об'єкта
Створіть об'єкт car із властивостями brand, model, year, color.
Змініть рік випуску та колір автомобіля.
Виведіть початкові та оновлені значення властивостей.
*/
console.log('=== 1.1. ОБ\'ЄКТ — Завдання 5 ===');

const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
  color: 'Чорний',
};

console.log(`Початкові значення: рік — ${car.year}, колір — ${car.color}`);

car.year = 2024;
car.color = 'Білий перламутр';

console.log(`Оновлені значення: рік — ${car.year}, колір — ${car.color}`);

/* Завдання 9. Вкладені об'єкти
Створіть об'єкт user, який містить інформацію про користувача: ім'я, прізвище,
вік та вкладений об'єкт address. Об'єкт address повинен містити місто, вулицю,
номер будинку та поштовий індекс. Виведіть у консоль місто та вулицю проживання.
*/
console.log('=== 1.1. ОБ\'ЄКТ — Завдання 9 ===');

const user = {
  firstName: 'Назар',
  lastName: 'Дорошенко',
  age: 20,
  address: {
    city: 'Київ',
    street: 'Берестейський проспект',
    house: 37,
    zipCode: '03056',
  },
};

console.log(`Місто: ${user.address.city}, вулиця: ${user.address.street}`);

/* ============================================================================
   1.2. ПІДТЕМА «МЕТОДИ ОБ'ЄКТА» (Варіант 5: завдання 5, 8)
   ============================================================================ */

/* Завдання 5. Обчислення суми числових значень
Створіть об'єкт order, який містить властивості product1, product2, product3, product4.
Значеннями властивостей мають бути числові ціни товарів. Використовуючи Object.values(),
отримайте всі значення та обчисліть їхню суму.
*/
console.log('=== 1.2. МЕТОДИ ОБ\'ЄКТА — Завдання 5 ===');

const order = {
  product1: 450,
  product2: 1200,
  product3: 320,
  product4: 830,
};

const prices = Object.values(order);
let totalOrderSum = 0;
for (const price of prices) {
  totalOrderSum += price;
}

console.log('Ціни товарів у замовленні:', prices);
console.log(`Загальна сума замовлення: ${totalOrderSum} грн`);

/* Завдання 8. Створення копії об'єкта
Створіть об'єкт product із властивостями name, price, category. Створіть його
поверхневу копію за допомогою Object.assign(). Змініть значення властивості price
у копії. Перевірте, чи змінився початковий об'єкт.
*/
console.log('=== 1.2. МЕТОДИ ОБ\'ЄКТА — Завдання 8 ===');

const product = {
  name: 'Навушники AirPods 4',
  price: 6500,
  category: 'Електроніка',
};

const productCopy = Object.assign({}, product);
productCopy.price = 5900;

console.log('Початковий об’єкт product:', product);
console.log('Копія об’єкта productCopy:', productCopy);
console.log(`Чи змінилася ціна в початковому об'єкті? ${product.price !== 6500}`);

/* ============================================================================
   1.3. ПІДТЕМА «МАСИВ ОБ'ЄКТІВ» (Варіант 5: завдання 5, 10)
   ============================================================================ */

/* Завдання 5. Видалення об'єкта з масиву
Створіть масив об'єктів employees, кожен із яких містить id, name та position.
Видаліть останній елемент масиву за допомогою методу pop().
Виведіть масив до та після видалення.
*/
console.log('=== 1.3. МАСИВ ОБ\'ЄКТІВ — Завдання 5 ===');

const employees = [
  { id: 1, name: 'Олександр Коваль', position: 'Frontend Developer' },
  { id: 2, name: 'Аліна Савченко', position: 'UI/UX Designer' },
  { id: 3, name: 'Дмитро Мельник', position: 'Backend Developer' },
  { id: 4, name: 'Ірина Бондар', position: 'QA Engineer' },
];

console.log('Масив до видалення:', [...employees]);
const removedEmployee = employees.pop();
console.log('Видалений працівник:', removedEmployee);
console.log('Масив після видалення:', employees);

/* Завдання 10. Створення нового масиву з властивостей об'єктів
Створіть масив об'єктів студентів із властивостями id, name, age, group.
За допомогою циклу for...of створіть новий масив, який містить лише імена студентів.
Виведіть обидва масиви в консоль.
*/
console.log('=== 1.3. МАСИВ ОБ\'ЄКТІВ — Завдання 10 ===');

const groupStudents = [
  { id: 1, name: 'Назар', age: 20, group: 'ІА-44' },
  { id: 2, name: 'Дмитро', age: 20, group: 'ІА-44' },
  { id: 3, name: 'Аліна', age: 19, group: 'ІА-44' },
  { id: 4, name: 'Максим', age: 21, group: 'ІА-44' },
];

const studentNames = [];
for (const student of groupStudents) {
  studentNames.push(student.name);
}

console.log('Початковий масив студентів:', groupStudents);
console.log('Новий масив імен:', studentNames);

/* ============================================================================
   1.4. ПІДТЕМА «ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ» (Варіант 5: завдання 1, 5, 8)
   ============================================================================ */

/* Завдання 1. Базова деструктуризація об'єкта
Створіть об'єкт student із властивостями name, age, group, course.
Використовуючи деструктуризацію, створіть окремі змінні для отримання значень
цих властивостей. Виведіть змінні в консоль.
*/
console.log('=== 1.4. ДЕСТРУКТУРИЗАЦІЯ — Завдання 1 ===');

const studentObj = {
  name: 'Назар Дорошенко',
  age: 20,
  group: 'ІА-44',
  course: 3,
};

const { name, age, group, course } = studentObj;
console.log(`Ім'я: ${name}, Вік: ${age}, Група: ${group}, Курс: ${course}`);

/* Завдання 5. Отримання решти властивостей об'єкта
Створіть об'єкт student із властивостями name, age, group, email, phone, course.
За допомогою деструктуризації отримайте значення name та group, а оператор rest (...)
використайте для збереження решти властивостей в окремий об'єкт. Виведіть усі результати.
*/
console.log('=== 1.4. ДЕСТРУКТУРИЗАЦІЯ — Завдання 5 ===');

const fullStudent = {
  name: 'Назар Дорошенко',
  age: 20,
  group: 'ІА-44',
  email: 'doroshenko@kpi.ua',
  phone: '+380991234567',
  course: 3,
};

const { name: stName, group: stGroup, ...otherStudentDetails } = fullStudent;
console.log('Ім’я:', stName);
console.log('Група:', stGroup);
console.log('Решта властивостей (rest):', otherStudentDetails);

/* Завдання 8. Деструктуризація зі значеннями за замовчуванням у функції
Створіть функцію createUser(), яка приймає об'єкт із властивостями name, email, role.
Використайте деструктуризацію параметрів функції. Для властивості role задайте значення
за замовчуванням "user". Перевірте роботу функції з об'єктом, який не містить role.
*/
console.log('=== 1.4. ДЕСТРУКТУРИЗАЦІЯ — Завдання 8 ===');

function createUser({ name, email, role = 'user' }) {
  return { name, email, role };
}

const regularUser = createUser({ name: 'Олена', email: 'olena@gmail.com' });
const adminUser = createUser({ name: 'Назар', email: 'nazar@kpi.ua', role: 'admin' });

console.log('Користувач без role (за замовчуванням):', regularUser);
console.log('Користувач із вказаною role:', adminUser);

/* ============================================================================
   1.5. ПІДТЕМА «CALLBACK-ФУНКЦІЇ» (Варіант 5: завдання 5, 7)
   ============================================================================ */

/* Завдання 5. Повторне виконання функції
Створіть функцію repeatAction(), яка приймає кількість повторень та функцію
зворотного виклику. За допомогою циклу викличте callback задану кількість разів.
Передайте функцію, яка виводить повідомлення "JavaScript - цікаво!".
*/
console.log('=== 1.5. CALLBACK-ФУНКЦІЇ — Завдання 5 ===');

function repeatAction(count, callback) {
  for (let i = 1; i <= count; i += 1) {
    callback(i);
  }
}

function printInterestingMessage(step) {
  console.log(`[${step}] JavaScript - цікаво!`);
}

repeatAction(3, printInterestingMessage);

/* Завдання 7. Відкладене виконання повідомлення
Створіть функцію showMessage(), яка приймає текст повідомлення та функцію зворотного
виклику. Використовуючи setTimeout(), організуйте виклик callback через 3 секунди.
Передайте функцію, яка виводить повідомлення в консоль.
*/
console.log('=== 1.5. CALLBACK-ФУНКЦІЇ — Завдання 7 ===');

function showMessage(text, callback) {
  setTimeout(() => {
    callback(text);
  }, 3000);
}

function logDelayedText(msg) {
  console.log(`[Через 3 сек] Повідомлення: ${msg}`);
}

showMessage('Відкладений callback успішно спрацював!', logDelayedText);

/* ============================================================================
   1.6. ПІДТЕМА «СТРІЛОЧНІ ФУНКЦІЇ» (Варіант 5: завдання 5, 8)
   ============================================================================ */

/* Завдання 5. Обчислення вартості товару зі знижкою
Створіть стрілочну функцію calculateDiscount, яка приймає початкову ціну товару
та відсоток знижки. Функція повинна обчислювати та повертати кінцеву вартість товару.
*/
console.log('=== 1.6. СТРІЛОЧНІ ФУНКЦІЇ — Завдання 5 ===');

const calculateDiscount = (price, discountPercent) =>
  price - (price * discountPercent) / 100;

console.log(`Ціна 2000 грн зі знижкою 15%: ${calculateDiscount(2000, 15)} грн`);
console.log(`Ціна 500 грн зі знижкою 20%: ${calculateDiscount(500, 20)} грн`);

/* Завдання 8. Стрілочна функція з кількома інструкціями
Створіть стрілочну функцію calculateArea, яка приймає довжину та ширину
прямокутника. Усередині функції обчисліть площу та периметр. Поверніть результати
у вигляді об'єкта.
*/
console.log('=== 1.6. СТРІЛОЧНІ ФУНКЦІЇ — Завдання 8 ===');

const calculateArea = (length, width) => {
  const area = length * width;
  const perimeter = 2 * (length + width);
  return { area, perimeter };
};

console.log('Прямокутник 10x5:', calculateArea(10, 5));

/* ============================================================================
   1.7. ПІДТЕМА «СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ» (Варіант 5: завдання 2, 5, 8)
   ============================================================================ */

/* Завдання 2. Використання callback для математичних операцій
Створіть функцію calculate(), яка приймає два числа та функцію операції.
Передайте у функцію стрілочні функції для виконання додавання, віднімання та
множення. Перевірте роботу кожної операції.
*/
console.log('=== 1.7. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ — Завдання 2 ===');

const calculate = (a, b, operation) => operation(a, b);

console.log('Додавання (12 + 4):', calculate(12, 4, (x, y) => x + y));
console.log('Віднімання (12 - 4):', calculate(12, 4, (x, y) => x - y));
console.log('Множення (12 * 4):', calculate(12, 4, (x, y) => x * y));

/* Завдання 5. Обробка натискання кнопки
Створіть HTML-сторінку з кнопкою button та підключеним JavaScript-файлом.
За допомогою addEventListener() додайте обробник події click. Для обробника
використайте стрілочну функцію, яка виводить повідомлення на сторінці або в консолі.
*/
console.log('=== 1.7. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ — Завдання 5 ===');

const callbackBtn = document.getElementById('callback-btn');
const callbackOutput = document.getElementById('callback-output');
let clickCount = 0;

if (callbackBtn) {
  callbackBtn.addEventListener('click', () => {
    clickCount += 1;
    const msg = `Кнопку натиснуто ${clickCount} раз(ів)! Стрілочний callback спрацював.`;
    console.log(msg);
    if (callbackOutput) {
      callbackOutput.textContent = msg;
    }
  });
}

/* Завдання 8. Повторне виконання стрілочної функції
Використовуючи setInterval(), створіть програму, яка щосекунди виводить у консоль
поточне значення лічильника. Callback реалізуйте за допомогою стрілочної функції.
Після п'яти повторень зупиніть виконання через clearInterval().
*/
console.log('=== 1.7. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ — Завдання 8 ===');

let counter = 0;
const intervalId = setInterval(() => {
  counter += 1;
  console.log(`Лічильник (setInterval): ${counter}`);

  if (counter === 5) {
    clearInterval(intervalId);
    console.log('Лічильник зупинено після 5 повторень (clearInterval).');
  }
}, 1000);

/* ============================================================================
   1.8. ПІДТЕМА «ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВУ» (Варіант 5: завдання 1, 5, 9)
   ============================================================================ */

/* Завдання 1. Перебір масиву за допомогою forEach()
Створіть масив об'єктів students, кожен із яких містить властивості name, age, group.
Використовуючи метод forEach() та стрілочну функцію, виведіть інформацію про
кожного студента в консоль.
*/
console.log('=== 1.8. ПЕРЕБИРАЮЧІ МЕТОДИ — Завдання 1 (forEach) ===');

const studentsList = [
  { name: 'Назар', age: 20, group: 'ІА-44' },
  { name: 'Аліна', age: 19, group: 'ІА-44' },
  { name: 'Дмитро', age: 20, group: 'ІА-44' },
];

studentsList.forEach((student) => {
  console.log(`Студент: ${student.name}, вік: ${student.age}, група: ${student.group}`);
});

/* Завдання 5. Пошук індексу елемента за допомогою findIndex()
Створіть масив об'єктів товарів із властивостями id, name, price. Використовуючи
метод findIndex(), знайдіть індекс товару з визначеним ідентифікатором. Виведіть
індекс у консоль. Якщо товар не знайдено, виведіть повідомлення.
*/
console.log('=== 1.8. ПЕРЕБИРАЮЧІ МЕТОДИ — Завдання 5 (findIndex) ===');

const storeProducts = [
  { id: 101, name: 'Ноутбук Huawei', price: 32000 },
  { id: 102, name: 'Мишка бездротова', price: 950 },
  { id: 103, name: 'Монітор 27"', price: 11500 },
];

const targetId = 102;
const foundIndex = storeProducts.findIndex((item) => item.id === targetId);

if (foundIndex !== -1) {
  console.log(`Індекс товару з id=${targetId}: ${foundIndex} (${storeProducts[foundIndex].name})`);
} else {
  console.log(`Товар з id=${targetId} не знайдено`);
}

const missingIndex = storeProducts.findIndex((item) => item.id === 999);
console.log(
  missingIndex !== -1 ? `Індекс: ${missingIndex}` : 'Товар з id=999 не знайдено'
);

/* Завдання 9. Перетворення масиву за допомогою flatMap()
Створіть масив об'єктів students, кожен із яких містить властивості name та subjects
(масив навчальних дисциплін). Використовуючи метод flatMap(), сформуйте один
загальний масив усіх навчальних дисциплін студентів. Виведіть отриманий масив.
*/
console.log('=== 1.8. ПЕРЕБИРАЮЧІ МЕТОДИ — Завдання 9 (flatMap) ===');

const studentsWithSubjects = [
  { name: 'Назар', subjects: ['Web-програмування', 'ТРПЗ'] },
  { name: 'Аліна', subjects: ['Бази даних', 'Комп’ютерні мережі'] },
  { name: 'Дмитро', subjects: ['Безпека інформаційних систем', 'IoT'] },
];

const allSubjects = studentsWithSubjects.flatMap((student) => student.subjects);
console.log('Загальний масив навчальних дисциплін:', allSubjects);