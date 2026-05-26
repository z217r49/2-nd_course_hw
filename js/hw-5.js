// Задание № 1

function minNumber(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(minNumber(11, 3));
console.log(minNumber(11, 20));

// Задание № 2

let evenNumber = (c) => {
    if (c % 2 === 0) {
        console.log(`Число ${c} — чётное`);
    } else {
        console.log(`Число ${c} — нечётное`);
    }
};

evenNumber(8);

// Задание № 3

let squareNumber = d => d ** 2;
console.log(squareNumber(5));

const squareNumber2 = e => e ** 2;
const result = squareNumber2(11);
console.log(result);

// Задание № 4

function checkAge() {
    const ageInput = prompt('Сколько вам лет?');
    const age = Number(ageInput);

    if (isNaN(age) || age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

checkAge();

// Задание № 5

function enteringNumber() {
    const oneInput = prompt('Введите первое число');
    const oneNumber = Number(oneInput);

    const twoInput = prompt('Введите второ число');
    const twoNumber = Number(twoInput);

    if (isNaN(oneNumber) || isNaN(twoNumber)) {
        alert('Одно или оба значения не являются числом');
    } else {
        return oneNumber * twoNumber;
    }
}

alert(enteringNumber())

// Задание № 6

function cubeNumber() {
    const userInput = prompt('Введите любое число');
    const userNumber = Number(userInput);    

    if (isNaN(userNumber)) {
        alert('Переданный параметр не является числом');
    } else {
        let cubeResult = userNumber ** 3;
        alert(`${userNumber} в кубе равняется ${cubeResult}`)
    }
}

cubeNumber()

// Задание № 7

function getArea() {
    return this.radius ** 2 * Math.PI;
}

function getPerimeter() {
    return this.radius * 2 * Math.PI;
}

const circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

console.log(circle1.getArea());
console.log(circle2.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getPerimeter());
