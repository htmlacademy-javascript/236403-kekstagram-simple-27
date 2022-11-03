//1. Оформить функцию, выбирающую случайное число из диапозона
const randomInt = (min, max) =>
  Math.floor(Math.min(min, max) + Math.random() * (Math.max(min, max) + 1 - Math.min(min, max)));

const a = randomInt(1, 8);
console.log(a);

//2. Оформить функцию для проверки максимальной длины строки
const stringLengthChecking = (stringChecking, stringMaxLength) =>
  stringChecking.length <= stringMaxLength;

const b = stringLengthChecking('Какая-то строка', 10);
console.log(b);
