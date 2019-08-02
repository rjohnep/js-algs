const isPalindrome = word => {
  // убрать все пробельные символы, привести к нижнему регистру
  const lettersOnly = word.toLowerCase().replace(/\s/g, '');

  // сравнить с перевернутой версией
  return (
    lettersOnly ===
    lettersOnly
      .split('')
      .reverse()
      .join('')
  );
};

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('race Car')); // true
