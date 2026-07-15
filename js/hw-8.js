// Задание № 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

// Задание № 2
function isPositive(numbers) {
    return numbers > 0;
}
function isMale(man) {
    return man.gender === 'male';
}
function filter(array, ruleFunction) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const newArray = array[i];
        if (ruleFunction(newArray)) {
            result.push(newArray);
        }
    }

    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale));

// Задание № 3
let currentDate = setInterval(() => console.log(new Date().toLocaleDateString()), 3000);

setTimeout(() => { clearInterval(currentDate); console.log('30 секунд прошло'); }, 30000);

// Задание № 4
function delayForSecond4(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond4(function () {
    console.log('Привет, Глеб!');
})

// Задание № 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));

async function name(params) {
    
}

