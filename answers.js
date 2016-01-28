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


//a function that takes a string, and returns the reverse of that string.

function reverseString(str){
return str.split("").reverse().join("");
}
console.log(reverseString("hello"));


//a function that takes a number and returns the factorial of a number

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 

console.log (factorial(5));


//Write a function that takes a phrase as a string, and returns the longest word in that phrase. If the phrase contains more than one such word, return the first occurrence. 

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

console.log(longestWord("i am the king of the entire world"));

*/
/**/
// Write a function that takes a phrase, and returns the same phrase with every word capitalized

function capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log(capitalizeEachWord("hello world"));

//Write a function that takes an array and returns the largest number of the array.

function biggest(array){
   return [Math.max.apply(null, array)];
}

console.log(biggest([10, 100, 1000, 1, 4, 6]));

//Write a function that takes an array, and returns a filtered array. The filtered array should only contain the truthy values from the initial array

var arr = [5, "element", 10, "the", true];

var result = arr.filter(
    function (value) {
        return (typeof value === 'string');
    }
);

console.log(result);

// a function that takes an array of numbers, and returns the sum of all the numbers in the array

var total = 0;
function sum(input) {
for (var idx=0; idx< input.length; idx++) {
    total += input[idx];
}
return total;
}
var s=sum([1,2,3,4]);

console.log(s);

// a function that takes two arrays, and returns an array of all elements that are only in one array

function difference(arr1,arr2) {  
 var a1= flatten(arr1,true);  
 var a2= flatten(arr2,true);  
 var a=[], diff=[];  
  for(var i=0;i<a1.length;i++)  
  a[a1[i]]=false;  
  for(i=0;i<a2.length;i++)  
  if(a[a2[i]]===false)   
  { delete a[a2[i]];}  
  else a[a2[i]]=true;  
  for(var k in a)  
  diff.push(k);  
  return diff;   
  }  
  var flatten = function(a, shallow,r){  
  if(!r){ r = [];}  
  if (shallow) {  
  return r.concat.apply(r,a);  
  }   
  for(i=0; i<a.length; i++){  
  if(a[i].constructor == Array){  
  flatten(a[i],shallow,r);  
  }else{  
  r.push(a[i]);  
  }  
  }  
  return r;  
  };  
  console.log(difference([1, 2, 3], [1, 2, 4, 5]));   

// adding last bit as GitHub was down yesterday
