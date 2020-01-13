// BASED ON STACK, FOR ONE TYPE
const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';

const isBalanced = str => {
  const stack = [];

  if (str.length <= 0) return true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      stack.push(0);
    } else if (str[i] === '}') {
      if (!stack.length) return false;
      stack.pop();
    }
  }

  return !stack.length;
};

console.log(isBalanced(expression));
console.log(isBalanced(expressionFalse));
console.log(isBalanced(''));




/*****************************/
// BASED ON STACK, MULTI TYPES

let isMatchingBrackets = function (str) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < str.length; i++) {

    // If character is an opening brace add it to a stack
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    }
    //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
    else {
      const last = stack.pop();

      //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
      if (str[i] !== map[last]) { return false };
    }
  }
  // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
  if (stack.length !== 0) { return false };

  return true;
}

console.log(isMatchingBrackets("(){}")); // returns true
console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
console.log(isMatchingBrackets("({(()))}}"));  // returns false




/*****************************/
// BASED ON COUNTER, MULTI TYPES
const isBalancedParenthesis = (str) => {

  return !str.split('')
    .reduce(
      (uptoPrevChar, thisChar) => {
        if (thisChar === '(' || thisChar === '{' || thisChar === '[') {
          return ++uptoPrevChar;
        } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') {
          return --uptoPrevChar;
        }

        return uptoPrevChar
      },
      0
    );
}

// Test Cases
console.log(isBalancedParenthesis("[()]{}{[()()]()}"));  // returns true
console.log(isBalancedParenthesis("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"));  // returns true
console.log(isBalancedParenthesis("({(()))}}"));  // returns false
