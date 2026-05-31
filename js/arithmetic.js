function arithmeticProblem() {

    const arithmeticOperations = ['+', '-', '*', '/'];
    let randomIndex = Math.floor(Math.random() * arithmeticOperations.length);
    let randomOperation = arithmeticOperations[randomIndex];
    console.log(randomOperation); // Удалить

    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    if (randomOperation === '/' && b === 0) {
        b = 1;
    }

    a = Number(a);
    b = Number(b);

    let result;

    switch (randomOperation) {
        case '+':
            result = a + b;
            break;
        case '-':
            if (a < b) {
                a = b + Math.floor(Math.random() * 10) + 1;
            }
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            const multiplier = Math.floor(Math.random() * 10) + 1;
            a = b * multiplier;
            result = a / b;
            break;
    }


    let userResult = prompt(`Посчитай, сколько будет ${a} ${randomOperation} ${b}`);

    if (userResult === null) {
        alert('Жаль, поиграем в другой раз!');
        return;
    }

    userResult = Number(userResult);

    if (isNaN(userResult)) {
        alert('Пожалуйста, вводите только цифры!');
        return null;
    }

    if (+userResult === result) {
        alert(`Правильно! ${a} ${randomOperation} ${b} = ${result}`);
    } else {
        alert(`Неправильно! Правильный ответ: ${result}`);
    }

}

