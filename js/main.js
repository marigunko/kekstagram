// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomPositiveInteger (a, b = 1) {
    if (a === undefined) {
        throw new Error("Первый параметр должен быть число")
    }
  
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
}

getRandomPositiveInteger(1, 0);



// Функция для проверки максимальной длины строки

function checkStringLength (string, length) {
    return string.length <= length;
}

checkStringLength('', 140);