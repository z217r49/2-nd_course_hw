// Задание № 1
let str = 'js';
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

// Задание № 2
function acceptsArr(array, str2) {
    return array.filter(item => item.toLowerCase().startsWith(str2.toLowerCase()));
}

const countries = ['Россия', 'Румыния', 'Хорватия', 'Руанда', 'Норвегия'];
const countriesR = acceptsArr(countries, 'Р');
console.log(countriesR);

// Задание № 3
const num = 32.58884;

console.log('Округление до минимального целого значения: ' + Math.floor(num));
console.log('Округление до максимального целого значения: ' + Math.ceil(num));
console.log('Округление до ближайшего целого значения: ' + Math.round(num));

// Задание № 4
const numbs = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbs);
const max = Math.max(...numbs);

console.log(`Минимальное значение: ${min}`);
console.log(`Максимальное значение: ${max}`);

// Задание № 5
function printRandomNumber() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
}

printRandomNumber();


// Задание № 6
function creatNumbs6(num6) {
    const result = [];
    for (let i = 0; i < num6 / 2; i++) {
        const randomNum6 = Math.floor(Math.random() * (num6 + 1));
        result.push(randomNum6);
    }
    return result;
}

const Arr6 = creatNumbs6(7);
console.log(Arr6);

// Задание № 7
function creatNumbs(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

const oneRandomNumber = creatNumbs(2, 5);
console.log(oneRandomNumber);

// Задание № 8
let todayDate = new Date();
console.log(todayDate);

// Задание № 9
const currentDate = new Date();
const futureDate = new Date(currentDate);
const currentDay = currentDate.getDate();

futureDate.setDate(currentDay + 73);

console.log(futureDate);

// Задание № 10
function formatDate(date) {
    const days = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];

    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));
