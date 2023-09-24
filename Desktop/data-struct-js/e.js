//Write a function that takes a string as input and returns a new string with all the vowels removed


let string = "blabla jiji gogo ";

function antiVowels (string) {
    let newString="";
    newString = string.replace(/[aeiouAEIOU]/g, "");
    return newString;
    
}

console.log(antiVowels(string))