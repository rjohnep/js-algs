const isAnagram = (first, second) => {
  // сначала приводим обе строки к нижнему регистру
  let a = first.toLowerCase();
  let b = second.toLowerCase();

  // разбиваем строку по символам, сортируем их и снова объединяем в строку
  // результаты сравниваем
  a = a
    .split('')
    .sort()
    .join('');
  b = b
    .split('')
    .sort()
    .join('');

  return a === b;
};

const firstWord = 'Mary';
const secondWord = 'Army';

console.log(isAnagram(firstWord, secondWord)); // true
