const reverseBySeparator = (string, separator) => {
  return string
    .split(separator)
    .reverse()
    .join(separator);
};

let string = 'Welcome to this Javascript Guide!';

// развернуть все предложение целиком
// вывод: !ediuG tpircsavaJ siht ot emocleW
let reverseEntireSentence = reverseBySeparator(string, '');

// сохранить исходный порядок слов
// вывод: emocleW ot siht tpircsavaJ !ediuG
let reverseEachWord = reverseBySeparator(reverseEntireSentence, ' ');

console.log(reverseEachWord);
