'use strict';

let sum = null;
let quotient = null;
const precision = 3;

let firstNumber = parseFloat(prompt(`Введите число:`, 1));
let secondNumber = null;

if (firstNumber || firstNumber === 0) {
  secondNumber = parseFloat(prompt(`Введите число:`, 1));
  if (secondNumber || secondNumber === 0) {
    sum = Number((firstNumber + secondNumber).toFixed(precision));
    quotient = Number((firstNumber / secondNumber).toFixed(precision));
    console.log(`Ответ: ${sum}, ${quotient}`);
  } else {
    console.log('Неккоректный ввод!');
  }
} else {
  console.log('Неккоректный ввод!');
}
