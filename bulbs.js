const fixture = [2, 3, 1, 5, 4];

const sumTo = (min, max) => (max - min + 1) * ((max+min) /2);
const chainCheck = (arr) => {    
  let controlSum = 0;
  let arrSum = 0;
  
  return arr.reduce(
    (acc, n, i) => {
      let result = acc;
      
      controlSum = sumTo(0, i+1);
      arrSum += n;

      if(controlSum === arrSum) result++;
        return result;
      },
      0
  );
};

console.log(chainCheck(fixture));
