var str = "hello";

var firstChar = function(arg) {
    return arg.charAt(0);
}

var firstLetter = firstChar(str);

var message = firstLetter + " is the first letter of " + str;

console.log(firstLetter);

console.log(str);

console.log(message);