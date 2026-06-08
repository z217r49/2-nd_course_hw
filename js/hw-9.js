// Задание № 1
document.addEventListener('DOMContentLoaded', function () {
    const heading = document.querySelector('.textJs');
    const button = document.querySelector('.btnJS');

    button.addEventListener('click', function () {

        heading.classList.toggle('invisible');

        if (heading.classList.contains('invisible')) {
            button.textContent = 'Показать текст';
        } else {
            button.textContent = 'Удалить текст';
        }
    });
});

// Задание № 2
const paragrafClr = document.querySelector('.textJs_clr');
const buttonСlr = document.querySelector('.btnJs_clr');
if (paragrafClr && buttonСlr) {
    buttonСlr.addEventListener('click', function () {
        paragrafClr.classList.add('textJs_clrBlue');
    });
}

// Задание № 3
const headingTxt = document.querySelector('.textJs_txt');
const buttonTxt = document.querySelector('.btnJs_txt');
if (headingTxt && buttonTxt) {
    buttonTxt.addEventListener('click', function () {
        headingTxt.textContent = "Привет, мир!";
    });
}

// Задание № 4
const allDescriptions = document.querySelectorAll('h2.description');

allDescriptions.forEach(function (description) {
    description.textContent = 'Измененный текст';
});

// Задание № 5
const paragraphDescriptions = document.querySelectorAll('p.description');

paragraphDescriptions.forEach(function (paragraph) {
    paragraph.textContent = 'Новый текст';
});

// Задание № 6
const btnJsNewDiv = document.querySelector('.btnJs_newDiv');

if (btnJsNewDiv) {
    btnJsNewDiv.addEventListener('click', function () {
        const newDiv = document.createElement('div');
        newDiv.textContent = 'Новый абзац';
        newDiv.className = 'taskBox';
        newDiv.style.backgroundColor = 'yellow';
        newDiv.style.marginTop = '10px';

        document.body.appendChild(newDiv);
    });
}

// Задание № 7
const paragrafDel = document.querySelector('p.description');
const btnJsDel = document.querySelector('.btnJs_del');

if (paragrafDel && btnJsDel) {
    btnJsDel.addEventListener('click', function () {
        paragrafDel.remove();
    });
}