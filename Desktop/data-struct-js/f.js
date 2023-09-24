//Given two arrays of numbers, write a function that returns a new array containing the unique elements from both arrays.
let arry1=[1, 2, 3, 4, 5];
let arry2=[3, 4, 5, 6, 7];

function uniqueElt(arry1,arry2){
   
   let newArray = [new Set(arry1.concat(arry2))];
   return newArray
}

console.log(uniqueElt(arry1,arry2))