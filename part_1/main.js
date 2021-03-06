'use strict';

const radix = 10;
const precision = 8;
let result = null;

let firstNumber = parseFloat(prompt(`Введите число:`, 1));
let secondNumber = parseInt(prompt(`Введите целое число (в ином случае дробная часть числа будет проигнорирована).
                                                    Диапазон ввода от 2 до 36:`, 2), radix);

if ((firstNumber || firstNumber === 0) && (secondNumber >= 2 && secondNumber <= 36)) {
  switch (Number.isInteger(firstNumber)) {
    case true:
      result = Number(firstNumber.toString(secondNumber));
      break;
    case false:
      result = +Number(firstNumber.toString(secondNumber)).toFixed(precision);
      break;
  }
  console.log(`Число ${firstNumber} в десятичной системе счисления равно ${result} в ${secondNumber}-й системе счисления`);
} else {
  console.log('Неккоректный ввод!');
}
