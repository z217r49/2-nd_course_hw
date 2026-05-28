//  Задание № 1
const num = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < num.length; i++) {
    if (num[i] == 10) break;

    console.log(num[i]);
}

//  Задание № 2
console.log(`индекс 4 - ${num.indexOf(4)}`);

//  Задание № 3
const arr = [1, 3, 5, 10, 20];
let joinArr = arr.join(" ");

console.log(joinArr);

//  Задание № 4
const rows = 3;
const cols = 3;
const arrOne = [];

for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
        row.push(1);
    }
    arrOne.push(row);
}

console.log(arrOne);

//  Задание № 5
const numbs = [1, 1, 1];
numbs.push(2, 2, 2);

console.log(numbs);

//  Задание № 6
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort((a, b) => a - b);
console.log(arr6);
const filterArr6 = arr6.filter(item => typeof item  === 'number');

console.log(filterArr6);

//  Задание № 7
const arr7 = [9, 8, 7, 6, 5];
let userNumber = prompt('Угадай число');
userNumber = Number(userNumber);
let isFound = arr7.includes(userNumber);

if (isFound === true) {
    alert('Угадал');    
} else {
    alert('Не угадал');
}

//  Задание № 8
let rows2 = 'abcdef';
const splitRows2 = rows2.split("");
console.log(splitRows2);
const reverseRows2 = splitRows2.reverse();
console.log(reverseRows2);
const joinRows2 = reverseRows2.join("");

console.log(joinRows2);

//  Задание № 9
const arr9 = [
    [1, 2, 3],
    [4, 5, 6]
];
const combArr9 = [...arr9[0], ...arr9[1]];

console.log(combArr9);

//  Задание № 10
const randomArray = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 10) + 1
);

console.log(randomArray);

for (let i = 0; i < randomArray.length - 1; i++) {
    const current = randomArray[i];
    const next = randomArray[i + 1];
    const sum = current + next;

    console.log(`Итерация ${i + 1}: ${current} + ${next} = ${sum}`);
}

//  Задание № 11
function squareNumbers(arr) {
    return arr.map(item => item ** 2);
}

function createRandomArray(length, min = 1, max = 10) {
    const result = [];
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        result.push(randomNum);
    }
    return result;
}

const arr11 = createRandomArray(5, 1, 5);
console.log('Исходный массив:', arr11); 

const squareArr11 = squareNumbers(arr11);
console.log('Массив квадратов:', squareArr11); 


//  Задание № 12
function arrayWordLengths(arr) {
    return arr.map(word => word.length);
}

const words = ['стул', 'подушка', 'эксперимент'];
const lengths = arrayWordLengths(words);
console.log(lengths);

//  Задание № 13
function getRandomArray(length, min = 1, max = 10) {
    const result = [];
    for (let i = 0; i < length; i++) {
        const randomNumbs = Math.floor(Math.random() * (max - min + 1)) + min;
        result.push(randomNumbs);
    }
    return result;
}

function getRandomNegativArray(length, min = 1, max = 10) {
    const negativResult = [];
    for (let i = 0; i < length; i++) {
        const randomNegativNumbs = Math.floor(Math.random() * (max - min + 1)) + min;
        const negativNum = -randomNegativNumbs
        negativResult.push(negativNum);
    }
    return negativResult;
}

const arr13 = getRandomArray(5, 1, 5);
console.log('Исходный массив:', arr13); 

const negativArr13 = getRandomNegativArray(5, 1, 5);
console.log('Исходный массив отрицательных чисел:', negativArr13);

const combinedArray = [...arr13, ...negativArr13];
console.log('Объединенный массив чисел:', combinedArray);

const filteredCombinedArray = combinedArray.filter(el => el < 0);
console.log('Отрицательные значения объединенного массива:', filteredCombinedArray)

//  Задание № 14
const randomArray14 = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 10));
console.log('Исходный массив:', randomArray14);

const filteredArray14 = randomArray14.filter(el => el % 2 === 0);
console.log('Массив четных значений:', filteredArray14);

//  Задание № 15
const randomArray15 = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 10) + 1);
console.log('Исходный массив:', randomArray15);

const sumArray15 = randomArray15.reduce((total, number) => total + number, 0);

let arithmeticMean = sumArray15 / 6;
console.log('Среднее арифметическое массива:', arithmeticMean);
