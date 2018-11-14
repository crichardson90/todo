var myNumber = 3;
var myString = "Hello";

console.log(myString + myNumber);

var myBoolean = true;

console.log(3 === "3");

// Rails Conditional Statements
if (3 === "3") {
  console.log("They're equal!");
} else if (3 =="3") {
  console.log("These ones are though!");
} else {
  console.log("Ther're not equal!")
}

var myArray = [1, 2, 3, "Hello"];
myArray.push(true);
console.log(myArray);

myArray.pop();
console.log(myArray);

// Classes
var myObject = {name: "Coty", age: 28};
console.log(myObject.name);
console.log(myObject["age"]);

myObject.hairColor = "Brown?";
myObject["height"] = "6'2\""
console.log(myObject);

// Loops
var i = 0;
while (i < 5) {
  console.log("Hello");
  i++;
}

for (var i = 0; i < 5; i++) {
  console.log("Hello");
}

var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Functions (Methods)
//sayHi("Coty");  <-- hoisted funtion (you can call your function before or after the declaration)

function sayHi(name) {  // <-- This is the "declaration"
  console.log("Hello" + " " + name);
  console.log(`Hello ${name}`) // <-- String Interpalation 
}

sayHi("Coty"); // <-- traditional way to call your declaration...similar to Ruby

var goodbye = function() {
  console.log("Bye!");
}
 goodbye();


function palindrome(string) {
  var reversed_string = string.split("").reverse().join("");
  console.log(string === reversed_string);
}

palindrome("racecar");
palindrome("hello");


for (var i = 0; i < 100; i++) {
   console.log(i);
   
  if (i % 3 === 0 && i % 5 === 0) {
   console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
   console.log("Fizz");
  }
  else if (i % 5 === 0) {
   console.log("Buzz");
  }
  else {
   console.log(i);
  }
  
}
    


 
 