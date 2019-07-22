const isIsomorphic = (firstString, secondString) => {

  // проверка длины строк
  if (firstString.length !== secondString.length) return false

  const letterMap = {};

  for (let i = 0; i < firstString.length; i++) {
    let letterA = firstString[i],
      letterB = secondString[i];

    // если такой буквы еще не было, сохранить ее в объекте
    // и поставить в соответствие с соответствующей буквой второго слова
    if (letterMap[letterA] === undefined) {
      letterMap[letterA] = letterB;
    } else if (letterMap[letterA] !== letterB) {
      // если соответствие для буквы уже установлено
      // и буква второго слова не соответствует
      // то строки не изоморфны
      return false;
    }
  }

  return true;
}

console.log(isIsomorphic("egg", 'add')); // true
console.log(isIsomorphic("paper", 'title')); // true
console.log(isIsomorphic("kick", 'side')); // false