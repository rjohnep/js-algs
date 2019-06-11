const expression = "{{}}{}{}"
const expressionFalse = "{}{{}";

const isBalanced = (str) => {
  const stack = [];

  if (str.length <= 0) return true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      stack.push(0);
    } else if (str[i] === '}') {
      if(!stack.length) return false;
      stack.pop();
    }
  }

  return !stack.length;
}

console.log(isBalanced(expression)); 
console.log(isBalanced(expressionFalse));
console.log(isBalanced('')); 