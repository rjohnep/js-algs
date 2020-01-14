const reverseBySeparator = (string, separator) => {
  return string
    .split(separator)
    .reverse()
    .join(separator);
};

const string = 'Welcome to this Javascript Guide!';

// развернуть все предложение целиком
// вывод: !ediuG tpircsavaJ siht ot emocleW
const reverseEntireSentence = reverseBySeparator(string, '');

// сохранить исходный порядок слов
// вывод: emocleW ot siht tpircsavaJ !ediuG
const reverseEachWord = reverseBySeparator(reverseEntireSentence, ' ');

console.log(reverseEachWord);
