// //  Задание № 1
// const num = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < num.length; i++) {
//     if (num[i] == 10) break;

//     console.log(num[i]);
// }

// //  Задание № 2
// console.log(`индекс 4 - ${num.indexOf(4)}`);

// //  Задание № 3
// const arr = [1, 3, 5, 10, 20];
// let joinArr = arr.join(" ");

// console.log(joinArr);

// //  Задание № 4
// const rows = 3;
// const cols = 3;
// const arrOne = [];

// for (let i = 0; i < rows; i++) {
//     const row = [];
//     for (let j = 0; j < cols; j++) {
//         row.push(1);
//     }
//     arrOne.push(row);
// }

// console.log(arrOne);

// //  Задание № 5
// const numbs = [1, 1, 1];
// numbs.push(2, 2, 2);

// console.log(numbs);

// //  Задание № 6
// const arr6 = [9, 8, 7, 'a', 6, 5];
// arr6.sort((a, b) => a - b);
// console.log(arr6);
// const filterArr6 = arr6.filter(item => typeof item  === 'number');

// console.log(filterArr6);

// //  Задание № 7
// const arr7 = [9, 8, 7, 6, 5];
// let userNumber = prompt('Угадай число');
// userNumber = Number(userNumber);
// let isFound = arr7.includes(userNumber);

// if (isFound === true) {
//     alert('Угадал');    
// } else {
//     alert('Не угадал');
// }

// //  Задание № 8
// let rows = 'abcdef';
// const splitRows = rows.split("");
// console.log(splitRows);
// const reverseRows = splitRows.reverse();
// console.log(reverseRows);
// const joinRows = reverseRows.join("");

// console.log(joinRows);

// //  Задание № 9
// const arr9 = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// const combArr9 = [...arr9[0], ...arr9[1]];

// console.log(combArr9);

// //  Задание № 10
// const randomArray = Array.from({ length: 10 }, () =>
//     Math.floor(Math.random() * 10) + 1
// );

// console.log(randomArray);

// for (let i = 0; i < randomArray.length - 1; i++) {
//     const current = randomArray[i];
//     const next = randomArray[i + 1];
//     const sum = current + next;

//     console.log(`Итерация ${i + 1}: ${current} + ${next} = ${sum}`);
// }

// //  Задание № 11
// function squareNumbers(arr) {
//     return arr.map(item => item ** 2);
// }

// function createRandomArray(length, min = 1, max = 10) {
//     const result = [];
//     for (let i = 0; i < length; i++) {
//         const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//         result.push(randomNum);
//     }
//     return result;
// }

// const arr11 = createRandomArray(5, 1, 5);
// console.log('Исходный массив:', arr11); 

// const squareArr11 = squareNumbers(arr11);
// console.log('Массив квадратов:', squareArr11); 


//  Задание № 12







