const decimalToBinary = digit => {
  // последовательно получаем каждый разряд двоичного числа
  if (digit >= 1) {
    // если число не делится на 2 без остатка,
    // прибавляем к результату справа единицу (младший разряд)
    // если делится, прибавляем 0
    // делим число на 2 и продолжаем рекурсию

    if (digit % 2) {
      return decimalToBinary((digit - 1) / 2) + 1;
    } else {
      // Recursively return proceeding binary digits
      return decimalToBinary(digit / 2) + 0;
    }
  } else {
    // выход из рекурсии, если число меньше 1
    return '';
  }
};

console.log(decimalToBinary(3)); // 11
console.log(decimalToBinary(8)); // 1000
console.log(decimalToBinary(1000)); // 1111101000
