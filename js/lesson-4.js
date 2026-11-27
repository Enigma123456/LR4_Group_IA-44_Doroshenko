/* ЗАВДАННЯ 1
Збережіть введене значення (використати метод prompt()) у змінну value.
Вивести це значення у Console, використовуючи шаблонний рядок.
Перевірити: введене значення від'ємне? Додатнє? Дорівнює нулю?
Відповідь вивести за допомогою alert().
Наприклад: при введенні 80 виведе «Число додатнє»
*/

// const value = prompt('Завдання 1. Введіть число:');
// console.log(`Ви ввели: ${value}`);

// if (value === null || value.trim() === '') {
//   alert('Ви нічого не ввели або натиснули Cancel');
// } else if (isNaN(Number(value))) {
//   alert('Це не число!');
// } else {
//   const num = Number(value);
//   if (num > 0) {
//     alert('Число додатнє');
//   } else if (num < 0) {
//     alert("Число від'ємне");
//   } else {
//     alert('Число дорівнює нулю');
//   }
// }

/* ЗАВДАННЯ 2
Змінна number може набувати 4 значення: '1', '2', '3' або '4' (запитуй через prompt).
Якщо '1', то у змінну result запишіть 'зима', якщо '2' - 'весна' і так далі.
Розв'яжіть завдання через switch-case. Не забудьте про default.
Значення змінної result виведіть в консоль.
*/

// const number = prompt('Завдання 2. Введіть номер пори року (1-4):');
// let result;

// switch (number) {
//   case '1':
//     result = 'зима';
//     break;
//   case '2':
//     result = 'весна';
//     break;
//   case '3':
//     result = 'літо';
//     break;
//   case '4':
//     result = 'осінь';
//     break;
//   default:
//     result = 'Такої пори року немає. Введіть число від 1 до 4';
// }

// console.log(`Результат: ${result}`);

/* ЗАВДАННЯ 3
Є Admin та User, з відповідними паролями (оголосити, проініціалізувати).
Запитати логін (prompt), вивести в консоль шаблонним рядком.
- якщо вводить "Admin", prompt запитує пароль. При вдалій ідентифікації
  в alert вивести «Hello, Admin»;
- якщо нічого не ввели або натиснули Cancel, в alert вивести "Cancelled";
- в іншому випадку в alert вивести "I don't know you".
Теж саме виконати з User.
*/

// const adminLogin = 'Admin';
// const adminPassword = 'AdminPass123';
// const userLogin = 'User';
// const userPassword = 'UserPass123';

// const login = prompt('Завдання 3. Введіть логін:');
// console.log(`Введений логін: ${login}`);

// if (login === null || login === '') {
//   alert('Cancelled');
// } else if (login === adminLogin || login === userLogin) {
//   const password = prompt('Введіть пароль:');
//   const correctPassword = login === adminLogin ? adminPassword : userPassword;

//   if (password === null || password === '') {
//     alert('Cancelled');
//   } else if (password === correctPassword) {
//     alert(`Hello, ${login}`);
//   } else {
//     alert('Wrong password');
//   }
// } else {
//   alert("I don't know you");
// }

/* ЗАВДАННЯ 4
Станція з продажу ремонтних дроїдів.
Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть
задаватися під час її виклику:
- quantity — перший параметр, число, що містить кількість замовлених дроїдів
- pricePerDroid — другий параметр, число, що містить вартість одного дроїда
Напиши код функції так, щоб вона повертала рядок повідомленням про покупку
ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!"
*/

// console.log('=== ЗАВДАННЯ 4 ===');

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

/* ЗАВДАННЯ 5
Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його
на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку
параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
- Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
- Якщо в рядку відсутні заборонені слова, функція повертає буль false
*/

// console.log('=== ЗАВДАННЯ 5 ===');

// function checkForSpam(message) {
//   const normalizedMessage = message.toLowerCase();
//   return normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
// }

// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('Amazing SalE, only tonight!')); // true
// console.log(checkForSpam('Trust me, this is not a spam message')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

/* ЗАВДАННЯ 6
Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers)
та значення (value) як параметри. Функція повинна повертати новий масив лише тих
чисел із масиву numbers, які більші за значення value.
Усередині функції:
- Створи порожній масив, у який будеш додавати підходящі числа.
- Використай цикл для ітерації кожного елемента масиву numbers.
- Використовуй умовний оператор if усередині циклу для перевірки кожного елемента
  і додавання до свого масиву.
- Поверни свій новий масив з підходящими числами як результат.
*/

// console.log('=== ЗАВДАННЯ 6 ===');

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

/* ЗАВДАННЯ 7 (Варіант 5)
1. Створити одновимірний масив, кількість елементів якого задана користувачем.
   Визначити максимальне та мінімальне значення серед елементів із парними та
   непарними номерами. Застосувати функції.
2. Упорядкувати масив у порядку зменшення методом вибору. Надрукувати вхідний та
   вихідний масив. Застосувати функції.
*/

// console.log('=== ЗАВДАННЯ 7 (Варіант 5) ===');

// function createRandomArray(size, min = -50, max = 50) {
//   const arr = [];
//   for (let i = 0; i < size; i += 1) {
//     const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     arr.push(randomNum);
//   }
//   return arr;
// }

// function findMinMaxByParity(arr) {
//   const evenIndexElements = [];
//   const oddIndexElements = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (i % 2 === 0) {
//       evenIndexElements.push(arr[i]);
//     } else {
//       oddIndexElements.push(arr[i]);
//     }
//   }

//   return {
//     evenMin: evenIndexElements.length ? Math.min(...evenIndexElements) : null,
//     evenMax: evenIndexElements.length ? Math.max(...evenIndexElements) : null,
//     oddMin: oddIndexElements.length ? Math.min(...oddIndexElements) : null,
//     oddMax: oddIndexElements.length ? Math.max(...oddIndexElements) : null,
//   };
// }

// function selectionSortDescending(arr) {
//   const sorted = [...arr];
//   const n = sorted.length;

//   for (let i = 0; i < n - 1; i += 1) {
//     let maxIdx = i;
//     for (let j = i + 1; j < n; j += 1) {
//       if (sorted[j] > sorted[maxIdx]) {
//         maxIdx = j;
//       }
//     }
//     if (maxIdx !== i) {
//       const temp = sorted[i];
//       sorted[i] = sorted[maxIdx];
//       sorted[maxIdx] = temp;
//     }
//   }

//   return sorted;
// }

// const rawSize = prompt('Завдання 7. Введіть кількість елементів масиву:', '10');
// const arraySize = Number(rawSize);

// if (!Number.isInteger(arraySize) || arraySize <= 0) {
//   console.log('Некоректна кількість елементів для Завдання 7.');
// } else {
//   const inputArray = createRandomArray(arraySize);
//   const stats = findMinMaxByParity(inputArray);
//   const sortedArray = selectionSortDescending(inputArray);

//   console.log('Вхідний масив:', inputArray);
//   console.log(
//     `Парні індекси (0, 2, 4...): min = ${stats.evenMin}, max = ${stats.evenMax}`
//   );
//   console.log(
//     `Непарні індекси (1, 3, 5...): min = ${stats.oddMin}, max = ${stats.oddMax}`
//   );
//   console.log('Вихідний масив (сортування вибором за зменшенням):', sortedArray);
// }

/* ЗАВДАННЯ 8
Є двовимірний масив додатніх і від'ємних чисел (об'явити, проініціалізувати
генератором випадкових чисел). Вивести у Console браузера.
Створити два масива: масив додатніх чисел і масив від'ємних чисел.
Третій елемент у додатньому масиві заміни на від'ємне значення, яке буде введено
за допомогою prompt.
Вивести у Console браузера.
*/

// console.log('=== ЗАВДАННЯ 8 ===');

// function create2DRandomArray(rows, cols, min = -25, max = 25) {
//   const matrix = [];
//   for (let i = 0; i < rows; i += 1) {
//     const row = [];
//     for (let j = 0; j < cols; j += 1) {
//       let num = 0;
//       while (num === 0) {
//         num = Math.floor(Math.random() * (max - min + 1)) + min;
//       }
//       row.push(num);
//     }
//     matrix.push(row);
//   }
//   return matrix;
// }

// let matrix2D = create2DRandomArray(3, 5);
// let positiveNumbers = [];
// let negativeNumbers = [];

// // Гарантуємо наявність щонайменше 3 додатніх елементів
// while (positiveNumbers.length < 3) {
//   matrix2D = create2DRandomArray(3, 5);
//   positiveNumbers = [];
//   negativeNumbers = [];

//   for (const row of matrix2D) {
//     for (const num of row) {
//       if (num > 0) {
//         positiveNumbers.push(num);
//       } else if (num < 0) {
//         negativeNumbers.push(num);
//       }
//     }
//   }
// }

// console.log('Двовимірний масив:');
// console.table(matrix2D);
// console.log('Масив додатніх чисел (до заміни):', [...positiveNumbers]);
// console.log('Масив від’ємних чисел:', negativeNumbers);

// const negativeInputRaw = prompt(
//   "Завдання 8. Введіть від'ємне число для заміни 3-го елемента додатнього масиву:",
//   '-15'
// );
// const negativeInput = Number(negativeInputRaw);

// if (negativeInputRaw !== null && !Number.isNaN(negativeInput) && negativeInput < 0) {
//   positiveNumbers[2] = negativeInput;
//   console.log('Масив додатніх чисел (після заміни 3-го елемента):', positiveNumbers);
// } else {
//   console.log("Заміну не виконано: потрібно ввести коректне від'ємне число (< 0).");
// }

/* ЗАВДАННЯ 9 (Варіант 5 — Слайд-шоу)
Реалізувати можливість перегляду зображень за таймером, врахувати можливість
налаштування розміру зображень, циклічність перегляду, а також часу між
переключеннями.
*/

const slides = [
  {
    title: 'Слайд 1 — Основи JavaScript у браузері',
    url: `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
        <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1e3a8a"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#g1)"/>
        <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Segoe UI, sans-serif" font-size="38" font-weight="bold">JavaScript &amp; DOM</text>
        <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="#dbeafe" font-family="Segoe UI, sans-serif" font-size="20">Лабораторна робота №4 • Слайд 1</text>
      </svg>`
    )}`,
  },
  {
    title: 'Слайд 2 — Шаблонні рядки та оператори',
    url: `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
        <defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#065f46"/><stop offset="100%" stop-color="#10b981"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#g2)"/>
        <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Segoe UI, sans-serif" font-size="38" font-weight="bold">Template Literals</text>
        <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="#d1fae5" font-family="Segoe UI, sans-serif" font-size="20">Інтерполяція змінних та виразів • Слайд 2</text>
      </svg>`
    )}`,
  },
  {
    title: 'Слайд 3 — Масиви та методи масивів',
    url: `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
        <defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#581c87"/><stop offset="100%" stop-color="#a855f7"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#g3)"/>
        <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Segoe UI, sans-serif" font-size="38" font-weight="bold">Arrays &amp; Sorting</text>
        <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="#f3e8ff" font-family="Segoe UI, sans-serif" font-size="20">Фільтрація, пошук та сортування вибором • Слайд 3</text>
      </svg>`
    )}`,
  },
  {
    title: 'Слайд 4 — Функції та область видимості',
    url: `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
        <defs><linearGradient id="g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#9a3412"/><stop offset="100%" stop-color="#f97316"/></linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#g4)"/>
        <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Segoe UI, sans-serif" font-size="38" font-weight="bold">Functions &amp; Callbacks</text>
        <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="#ffedd5" font-family="Segoe UI, sans-serif" font-size="20">Декомпозиція логіки програми • Слайд 4</text>
      </svg>`
    )}`,
  },
];

const viewerEl = document.getElementById('slideshow-viewer');
const imageEl = document.getElementById('slide-image');
const captionEl = document.getElementById('slide-caption');
const statusEl = document.getElementById('slide-status');

const widthInput = document.getElementById('slide-width');
const heightInput = document.getElementById('slide-height');
const intervalInput = document.getElementById('slide-interval');
const loopCheckbox = document.getElementById('slide-loop');

const prevBtn = document.getElementById('btn-prev');
const toggleBtn = document.getElementById('btn-toggle');
const nextBtn = document.getElementById('btn-next');

let currentIndex = 0;
let timerId = null;
let isPlaying = true;

function renderSlide(index) {
  const slide = slides[index];
  imageEl.src = slide.url;
  imageEl.alt = slide.title;
  captionEl.textContent = slide.title;
  statusEl.textContent = `Слайд ${index + 1} з ${slides.length} • ${
    isPlaying ? 'Автоперегляд увімкнено' : 'На паузі'
  }`;
}

function stopTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex += 1;
    renderSlide(currentIndex);
  } else if (loopCheckbox.checked) {
    currentIndex = 0;
    renderSlide(currentIndex);
  } else {
    isPlaying = false;
    toggleBtn.textContent = 'Старт';
    stopTimer();
    statusEl.textContent = `Слайд ${currentIndex + 1} з ${slides.length} • Показ завершено (циклічність вимкнена)`;
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderSlide(currentIndex);
  } else if (loopCheckbox.checked) {
    currentIndex = slides.length - 1;
    renderSlide(currentIndex);
  }
}

function startTimer() {
  stopTimer();
  const seconds = Math.max(0.5, Number(intervalInput.value) || 2);
  timerId = setInterval(nextSlide, seconds * 1000);
}

function updateDimensions() {
  const width = Math.min(1100, Math.max(250, Number(widthInput.value) || 640));
  const height = Math.min(700, Math.max(180, Number(heightInput.value) || 380));
  viewerEl.style.width = `${width}px`;
  viewerEl.style.height = `${height}px`;
}

toggleBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    if (!loopCheckbox.checked && currentIndex === slides.length - 1) {
      currentIndex = 0;
    }
    toggleBtn.textContent = 'Пауза';
    renderSlide(currentIndex);
    startTimer();
  } else {
    toggleBtn.textContent = 'Старт';
    stopTimer();
    renderSlide(currentIndex);
  }
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  if (isPlaying) startTimer();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  if (isPlaying) startTimer();
});

widthInput.addEventListener('input', updateDimensions);
heightInput.addEventListener('input', updateDimensions);

intervalInput.addEventListener('change', () => {
  if (isPlaying) startTimer();
});

loopCheckbox.addEventListener('change', () => {
  if (isPlaying && timerId === null) {
    startTimer();
  }
});

// Ініціалізація слайд-шоу при завантаженні сторінки
updateDimensions();
renderSlide(currentIndex);
startTimer();