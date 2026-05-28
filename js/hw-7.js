let currentDate = new Date();
let options = {hour: '2-digit', minute:'2-digit', second:'2-digit'};
console.log(currentDate.toLocaleTimeString('ru-RU', options));