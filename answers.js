/*

var str = "hello";

//returns the first character of a string

var firstChar = function(arg) {
    return arg.charAt(0);
}

var firstLetter = firstChar(str);

var message = firstLetter + " is the first letter of " + str;

console.log(str);

console.log(firstLetter);

console.log(message);


var strlength = str.length

//returns the last character of a string

var lastChar = function(arg) {
    return arg.charAt(strlength -1)
}

var lastLetter = lastChar(str);

console.log(lastLetter);

var message2 = lastLetter + " is the last letter of " + str

console.log(message2);

//returns the character at a specified position

var posStr = function(arg, pos) {
    return arg.charAt(pos);
}

console.log (posStr("hello", 4));

// adds two numbers together - if the inputs are not numbers, but strings, it adds the letter/words together

var addItUp = function(numOne, numTwo) {
    return numOne + numTwo;
}

console.log(addItUp(5, 10));


// multiplies two numbers together - if the inputs are not numbers then you receive error message NaN

var multiplyItUp = function(numOne, numTwo) {
    return numOne * numTwo;
}

console.log(multiplyItUp(5, 10));

//Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers. If the string is ‘subtract’, return the difference. If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. Otherwise return 0.

var twoNum = function(numOne, numTwo) {

var operator = prompt ("please select add, subtract, mult, div");

switch (operator) {
    case 'add':
        alert(parseInt(numOne) + parseInt(numTwo));
        break;
        
    case 'subtract':
        alert(parseInt(numOne) - parseInt(numTwo));
        break;
    
    case 'mult':
        alert(parseInt(numOne) * parseInt(numTwo));
        break;
        
    case 'div':
        alert(parseInt(numOne) / parseInt(numTwo));
    break;
    
    default:
        alert(0);
    break;
}
}


twoNum(10, 5)



//Write a function that takes a string and a number, and returns the string repeated that many number of times. Test your function with various inputs.

var repeatStr = function(str, num) {
  return(str.repeat(num));
};

console.log(repeatStr("hello ", 3));

*/

//a function that takes a string, and returns the reverse of that string.

function reverseString(str){
return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

