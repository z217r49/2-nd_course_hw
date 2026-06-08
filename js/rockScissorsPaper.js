function rockScissorsPaper() {

    const quiz = ["1. Камень", "2. Ножницы", "3. Бумага"];


    const fullQuestion = 'Выберите свой вариант и введите номер:' + '\n' + quiz.join('\n');

    let userAnswer;
    let isValidInput = false;

    do {
        userAnswer = prompt(fullQuestion);
        const cpuAnswer = Math.floor(Math.random() * quiz.length) + 1;

        if (userAnswer === null) {
            alert('Жаль, поиграем в другой раз!');
            return;
        }

        const userAnswerNum = Number(userAnswer);
        const userChoice = quiz[userAnswerNum - 1];
        const cpuChoice = quiz[cpuAnswer - 1];

        const fullAnswer = `Вы выбрали ${userChoice}\nЯ выбрал ${cpuChoice}`;

        if (!isNaN(userAnswerNum) && userAnswerNum >= 1 && userAnswerNum <= quiz.length) {
            isValidInput = true;

            if (cpuAnswer === userAnswerNum) {
                alert(fullAnswer + '\n' + 'Ничья!');
            }

            if (cpuAnswer === 1) {
                if (userAnswerNum === 2) {
                    alert(fullAnswer + '\n' + 'Камень ломает ножницы!' + '\n' + 'К сожалению Вы проиграли :(');
                }

                if (userAnswerNum === 3) {
                    alert(fullAnswer + '\n' + 'Бумага обёртывает камень!' + '\n' + 'Поздравляю, Вы победили! :)');
                }
            }

            if (cpuAnswer === 2) {
                if (userAnswerNum === 1) {
                    alert(fullAnswer + '\n' + 'Камень ломает ножницы!' + '\n' + 'Поздравляю, Вы победили! :)');
                }

                if (userAnswerNum === 3) {
                    alert(fullAnswer + '\n' + 'Ножницы режут бумагу!' + '\n' + 'К сожалению Вы проиграли :(');
                }
            }

            if (cpuAnswer === 3) {
                if (userAnswerNum === 1) {
                    alert(fullAnswer + '\n' + 'Бумага обёртывает камень!' + '\n' + 'К сожалению Вы проиграли :(');
                }

                if (userAnswerNum === 2) {
                    alert(fullAnswer + '\n' + 'Ножницы режут бумагу!' + '\n' + 'Поздравляю, Вы победили! :)');
                }
            }

        } else {
            alert('Пожалуйста, вводите только цифры от 1 до 3!');
        }
    } while (!isValidInput);
}
