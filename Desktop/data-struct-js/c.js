//Implement a stack data structure in JavaScript using an array.


let stack = [];

stack.push("Luffy")
stack.push("Sanji")
stack.push("Zoro")

let name = stack.pop()

function peek(stack){
  let positionLastElement = stack.length-1
  return stack[positionLastElement]
}
console.log(peek(stack))

function isEmpty(stack){
  return stack.length == 0
}
console.log(isEmpty(stack))
  