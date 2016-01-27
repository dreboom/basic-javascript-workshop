

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

