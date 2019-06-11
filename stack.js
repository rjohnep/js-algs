// Реализуйте добавление в очередь и удаление из очереди с помощью двух стеков
var inputStack = [];
var outputStack = [];

// добавление в очередь
// просто добавляем элемент в первый стек
function enqueue(stackInput, item) {
  return stackInput.push(item);
}

// удаление из очереди
function dequeue(stackInput, stackOutput) {

  // развернем стек входящих элементов (input)
  // в output-стеке все элементы окажутся в обратном порядке
  // первый элемент в input-стеке (первый пришедший) станет последним в output-стеке
  // так его проще будет получить, не нарушая нумерацию элементов 

  if (stackOutput.length <= 0) {
    while(stackInput.length > 0) {
      let elementToOutput = stackInput.pop(); // последний из входящих
      stackOutput.push(elementToOutput);
    }
  }

  return stackOutput.pop(); // вернуть последний элемент из output-стека
}

enqueue(inputStack, 1);
enqueue(inputStack, 2);
enqueue(inputStack, 3);
console.log(dequeue(inputStack, outputStack));
console.log(dequeue(inputStack, outputStack));
console.log(dequeue(inputStack, outputStack));