// Игра "Уадай число"
let randomNumber = Math.floor(Math.random() * 100) + 1;

function getUserNumber() {
    let userNumber;

    do {
        let userInput = prompt('Угадай число от 1 до 100');

        if (userInput === null) {
            alert('Очень жаль, поиграем в следующий раз');
            return null;
        }

        userNumber = Number(userInput);

        if (isNaN(userNumber)) {
            alert('Пожалуйста, введите число!');
            continue; 
        }

        if (userNumber === randomNumber) {
            alert(`Поздравляю! Вы угадали: ${userNumber}`);
            return userNumber;
        } else if (userNumber > randomNumber) {
            if (userNumber - randomNumber <= 10) {
                alert('Твое число немного больше');
            } else {
                alert('Твое число намного больше');
            }
        } else {
            if (randomNumber - userNumber <= 10) {
                alert('Твое число немного меньше');
            } else {
                alert('Твое число намного меньше');
            }
        }
    } while (userNumber !== randomNumber);
}

