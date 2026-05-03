// Задание № 1
let a = 10;
alert(a);
a = 20;
alert (a); 

// Задание № 2
let b = 2007;
alert (b);

// Задание № 3
const c = ("Брендан Эйх");
alert (c);

// Задание № 4
let d = 10;
let e = 2;
alert (d + e);
alert (d - e);
alert (d * e);
alert (d / e);

// Задание № 5
let result = 2 ** 5;
alert(result);

// Задание № 6
a = 9;
b= 2;
alert (a % b);

// Задание № 7
let num = 1;
num +=5;
num -=3;
num *=7;
num /=3;
num++;
num--;
alert(num);

// Задание № 8
let age = prompt("Сколько Вам лет?");
alert(age);

// Задание № 9
const user = {
    name: 'Алексей',
    age: 48,
    isAdmin: true
};
    let info = prompt("Что Вы хотите узнать? Введите: name, age или isAdmin", "name");
    // console.log(user[info]);
    alert(`Значение "${info}": ${user[info]}`);

    // Задание № 10
    let yorName = prompt("Как Вас зовут?");
    let phrase = `Привет, ${yorName}`;
    alert(phrase);

