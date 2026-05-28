function turnTheTextOver(params) {
    let userText = prompt('Введите текст, который хотите перевернуть');

    if (userText === null) {
        alert('Жаль, поиграем в другой раз!');
        return;
    }

    userText = String(userText).trim();

    if (userText.length === 0) {
        alert('Вы не ввели текст! Попробуйте ещё раз.');
        return;
    }

    if (!/[a-zA-Zа-яА-Я0-9]/.test(userText)) {
        alert('Текст должен содержать хотя бы одну букву или цифру. Введите осмысленный текст.');
        return;
    }

    const reversedText = userText.split('').reverse().join('');

    alert(`Исходный текст: "${userText}"\nПеревёрнутый: "${reversedText}"`);
    return reversedText;
}
