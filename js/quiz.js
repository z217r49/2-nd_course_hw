function quizGame() {
    let counter = 0;

    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        const fullQuestion = currentQuestion.question + '\n' + 'Введите номер правильного ответа:' + '\n' + currentQuestion.options.join('\n');
        let userAnswer;
        let isValidInput = false;

        do {
            userAnswer = prompt(fullQuestion);

            if (userAnswer === null) {
                alert('Жаль, поиграем в другой раз!');
                return;
            }

            const userAnswerNum = Number(userAnswer);

            if (!isNaN(userAnswerNum) && userAnswerNum >= 1 && userAnswerNum <= currentQuestion.options.length) {
                isValidInput = true;

                if (userAnswerNum === currentQuestion.correctAnswer) {
                    counter++;
                    alert('Верно!');
                } else {
                    alert(`Неверно, правильный ответ: ${currentQuestion.correctAnswer}`);
                }
            } else {
                alert('Пожалуйста, вводите только цифры от 1 до 3!');
            }
        } while (!isValidInput);
    }

    alert(`Вы ответили правильно на ${counter} вопросов из ${quiz.length}`);
}
