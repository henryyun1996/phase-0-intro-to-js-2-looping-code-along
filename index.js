// Code your solutions in this file
function writeCards(array, event) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`
        newArray.push(message);
    }
    return newArray
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number) {
    let start = number + 1;
      while (start > 0) {
          start--;
          console.log(start);
      }
  }
  countDown(10);