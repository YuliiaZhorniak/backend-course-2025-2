const { URL } = require('url');

// Константи (за завданням)
const date = '202302';        // лютий 2023
const time_period = 'm';      // місяць

// Базовий URL сервера НБУ
const base = 'https://bank.gov.ua';
const path = '/NBUStatService/v1/statdirectory/inflation';

// Створюємо об'єкт URL
const url = new URL(path, base);

// Додаємо параметри
url.searchParams.set('period', time_period);
url.searchParams.set('date', date);

// Додаємо прапорець json
if (url.search) {
  url.search += '&json';
} else {
  url.search = '?json';
}

// Виводимо фінальний URL у консоль
console.log(url.toString());
