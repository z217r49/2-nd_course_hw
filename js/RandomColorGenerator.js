function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    // Находим элемент с классом .top и меняем его фон
    const topElement = document.querySelector('.top');
    if (topElement) {
        topElement.style.backgroundColor = randomColor;
    }
}
