// Задание № 1
let password = 'пароль';
let age= prompt('Ведите пароль');
if (age === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание № 2
let c = prompt('Введите любую цифру');
    if (c > 0 && c < 10) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }

// Задание № 3
let f = 3;
let g = 110;
if (f > 100 || getComputedStyle >100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание № 4
let a = '2';
let b = '3';
alert(+a + +b);

// Задание № 5
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '1':
        alert('Это январь, сезон - "зима"');
        break;
    case '2':
        alert('Это февраль , сезон - "зима"');
        break;
    case '3':
        alert('Это март, сезон - "весна"');
        break;
    case '4':
        alert('Это апрель, сезон - "весна"');
        break;
    case '5':
        alert('Это май, сезон - "весна"');
        break;
    case '6':
        alert('Это июнь, сезон - "лето"');
        break;
    case '7':
        alert('Это июль, сезон - "лето"');
        break;
    case '8':
        alert('Это август, сезон - "лето"');
        break; 
    case '9':
        alert('Это сентябрь, сезон - "осень"');
        break;
    case '10':
        alert('Это октябрь, сезон - "осень"');
        break;
    case '11':
        alert('Это ноябрь, сезон - "осень"');
        break;
    case '12':
        alert('Это декабрь, сезон - "зима"');
        break;
    default:
        alert('Такого месяца не существует! В году всего 12 месяцев');
        break;
}   

// Доплонительное задание № 1
let q = prompt('Пожалуйста, введите любое число');
q = Number(q);
if (typeof q === 'number' && !isNaN(q)) {
    if (q % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
} else {
    alert('Введенное значение не является числом!');
}

// Доплонительное задание № 2
let clientOS = 0;
switch(clientOS === 0) {
    case 0:
        console.log('Установите версию приложения для iOS по ссылке');
        break;
    case 1:
        console.log('Установите версию приложения для Android по ссылке');
        break;
    default:
        console.log('Ваша операционная система не поддерживается');
}

// Доплонительное задание № 3
clientOS = 0;
let clientDeviceYear = 2015;

const currentYear = new Date().getFullYear();

if (clientDeviceYear < 2015) {
    switch (clientOS) {
        case 0:
            console.log('Установите облегченную версию приложения для iOS по ссылке');
            break;
        case 1:
            console.log('Установите облегченную версию приложения для Android по ссылке');
            break;
        default:
            console.log('Ваша операционная система не поддерживается');
            break;
    }
} else if (clientDeviceYear >= 2015 && clientDeviceYear <= currentYear) {
    switch (clientOS) {
        case 0:
            console.log('Установите версию приложения для iOS по ссылке');
            break;
        case 1:
            console.log('Установите версию приложения для Android по ссылке');
            break;
        default:
            console.log('Ваша операционная система не поддерживается');
    }
}
