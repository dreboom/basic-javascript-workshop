var str = "hello";

var firstChar = function(arg) {
    return arg.charAt(0);
}

var firstLetter = firstChar(str);

var message = firstLetter + " is the first letter of " + str;

console.log(str);

console.log(firstLetter);

console.log(message);


var strlength = str.length

var lastChar = function(arg) {
    return arg.charAt(strlength -1)
}

var lastLetter = lastChar(str);

console.log(lastLetter);

var message2 = lastLetter + " is the last letter of " + str

console.log(message2);

var posStr = function(arg, pos) {
    return arg.charAt(pos);
}

console.log (posStr("hello", 4));