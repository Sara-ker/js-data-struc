//Implement a queue data structure in JavaScript using an array.

let queue = [];


queue.push('Luffy');
queue.push('Sanji');
queue.push('Robin');
queue.push('Nami');


let firstOut = queue.shift();
console.log(queue)


function isEmpty() {
  return queue.length == 0;
}

console.log(isEmpty()); 