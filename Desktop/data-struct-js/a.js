//Write a function that takes an array of numbers and returns a new array containing only the even numbers.//

let numbersArray = [1,2,3,4,5,0,8]

function evenNumbers(numberArray){
    let newArray= numbersArray.filter(number => number%2 == 0)
    return newArray
}
console.log(evenNumbers(numbersArray));




