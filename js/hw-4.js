// Задание № 1
for(let a = 1; a <= 2; a++) {
    console.log('Привет');
}

// Задание № 2
for(let b = 1; b <= 5; b++) {
    console.log(b)
}

// Задание № 3
let c = 7;
do {
    console.log(c);
    c++;
}
while(c <= 22);

// Задание № 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}
for (const key in obj) {
    console.log(`${key}: ${obj[key]}$`)
}

// Задание № 5
let n = 1000;
let num = 0;
for (; n >= 50; n /= 2) {
    num++;
}
console.log(`Результат: ${n}`);
console.log(`Количество делений: ${num}`);

// Задание № 5
for (let dateFriday = 1; dateFriday <= 31; dateFriday += 7) {
    console.log(`Сегодня пятница, ${dateFriday}-е число. Необходимо подготовить отчет`)
}

// Дополнительное задание № 1
let f = 100;
let iterations = 0;
for (; f > 0; f -= 7) {
    iterations++;
}
console.log(`Результат: ${f}`);
console.log(`Количество итераций: ${iterations}`);

// Дополнительное задание № 2
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
months.forEach((item, g, months) => {
    console.log(item + " - " + (g + 1));
});

// Дополнительное задание № 3
const book = {
    "Название": 'Санёк',
    "Автор": 'Шамликашвили Ц.А.',
    "Год издания": '2025г',
    "Жанр": 'Историческое фэнтези'
}
for (const key in book) {
    console.log(`${key}: ${book[key]}`)
}

