// Getting references to the buttons and count display
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const count = document.getElementById("count");

count.innerText = 0;

increase.addEventListener("click", function () {
  let currentCount = parseInt(count.innerText);
  currentCount += 1;
  count.innerText = currentCount;
});

decrease.addEventListener("click", function () {
  let currentCount = parseInt(count.innerText);
  currentCount -= 1;
  count.innerText = currentCount;
});

let a = 2;
let b = 3; // This is a single-line comment

console.log(a + b);

/*
    This is a multi-line comment
    It spans multiple lines
*/

// Variables and Values
let myName = "Faithfulness";
let myAge = 5;
let myTribe = "Yoruba";

console.log(myTribe);

/* 
    Variable Declaration methods:
    1. var
    2. let
    3. const
*/
// var
var city = "Lagos";
var city = "Abuja";

console.log(city);

// let
let country; // Declaration
country = "Nigeria"; // Initialization
country = "USA"; // Re-assignment
// let country = "Ghana"; // This will cause an error

console.log(country);

// const
const pi = 22 / 7;

// pi = 3.14; // This will cause an error

console.log(pi);

/*
    Rules for naming variables:
    1. Variable names cannot start with a number and special characters except _ and $
    2. Variable names cannot be the same as reserved keywords in JavaScript
    3. Variable names are case-sensitive
    4. Use meaningful names for better readability and make them descriptive and relatable to the value they hold
    5. Don't use a single character for variable names except in specific cases like loop counters
    6. When using multiple words in a variable name, use camelCase, PascalCase, or snake_case for better readability. Never use spaces or - to separate words!
*/

// camelCase
let myFavouriteColour = "Purple";
let amIMarried = false;

// PascalCase
let MyFavouriteFood = "Rice";
let IsSheMarried = false;

// snake_case
let my_favourite_movie = "Inception";
let is_he_single = true;

/*
    Values and Data Types in JavaScript:
        1. Primitive Datatypes
            a. Number
            b. String
            c. Boolean
            d. Undefined
            e. Null
            f. Symbol
            g. BigInt
        2. Non-Primitive, Complex, or Reference-type Datatypes
            a. Array
            b. Object
            c. Date
            d. Function
            e. RegExp
*/

// Number
let number1 = 15;
let number2 = 35.46;
let number3 = -23;

console.log(typeof number3);

// String
let string1 = "Faithfulness";
let string2 = "JavaScript is fun!";
let string3 = `The sum of 5 and 10 is 15`;
let string4 = "1";

console.log(typeof string4);

// Boolean
console.log(typeof is_he_single);

// Undefined
let username;
console.log(typeof username);

let password = null;
console.log(typeof password);

// Array
const learners = ["Faithfulness", "Abiola", "Oluwatimilehin", "Olamide"];
console.log(learners);

// Object
const person1 = {
  name: "Faithfulness", // name is a key, "Faithfulness" is the value
  age: 5,
  tribe: "Yoruba",
  favouriteColour: "Purple",
  hobbies: ["Singing", "Solving Math problems", "Dancing"],
  isLearner: true,
};

console.log(person1);

// Date
const today = new Date();
console.log(today);

/**
    Datatypes and Methods
        1.Number Methods
            a. toString()
            b. toFixed()
            c. Math.random()
            d. Math.floor()
            e. Math.round()
            f. parseInt()
            g. parseFloat()
        2. String Methods
            a. length
            b. [] notation
            c. toUpperCase()
            d. toLowerCase()
            e. indexOf()
            f. slice()
            g. replace() and replaceAll()
            h. includes()
            i. trim()
            j. split()
            k. charAt()
*/

let number4 = 100.478924;
console.log(typeof number4.toString());

console.log(number4.toFixed(2));

console.log(number4.valueOf());

const randomNumber = Math.random() * 10; // Generates a random number between 0 and 1

console.log("Random number:", randomNumber);

const flooredNumber = Math.floor(randomNumber); // Rounds down to the nearest integer

console.log("Floored number:", flooredNumber);

const roundedNumber = Math.round(randomNumber); // Rounds to the nearest integer

console.log("Rounded number:", roundedNumber);

let stringNumber = "150.75";

let intNumber = parseInt(stringNumber); // Converts string to integer
console.log("Integer number:", intNumber);

let floatNumber = parseFloat(stringNumber); // Converts string to float
console.log("Float number:", floatNumber);

// length
let string5 = "JavaScript is so awesome! Even Faithfulness dey feel am";
console.log("Length of string5:", string5.length);

console.log("Last character of string5:", string5[string5.length - 1]);

console.log(string5.indexOf("j"));

console.log(string5.slice(0, 10));

console.log(string5.replaceAll("s", "z"));

let fullname = "John Smith Doe";

let splittedName = fullname.split(" ");
console.log(splittedName);

console.log("Character at index 5:", string5.charAt(5));

let myStreet = "Similoluwa";
let myCity = "Ado";
let myState = "Ekiti";
let myCountry = "Nigeria";

// Concatenation
let myAddress = myStreet + " " + myCity + " " + myState + " " + myCountry;
console.log("My Address (Concatenation):", myAddress);

let probString = "  oLaDokuNBo ajaYi  ";
// Oladokunbo Ajayi

let properString = probString.trim(); // Removing extra spaces
console.log(properString); // Logging the result
let splittedString = properString.split(" "); // Creating an array with the string
let firstSplittedString =
  splittedString[0].charAt(0).toUpperCase() +
  splittedString[0].slice(1).toLowerCase(); // Getting the first element in the array and converting the first letter to uppercase and subsequent letters to lowercase
let secondSplittedString =
  splittedString[1].charAt(0).toUpperCase() +
  splittedString[1].slice(1).toLowerCase(); // Getting the second element in the array and converting the first letter to uppercase and subsequent letters to lowercase

let correctedString = firstSplittedString + " " + secondSplittedString;
console.log(correctedString);

/* 
    Operators
        1. Arithmetic Operators
            a. Addition Operator +
            b. Subtraction Operator -
            c. Multiplication Operator *
            d. Division Operator /
            e. Exponential Operator **
            f. Modulus Operator %
            g. Increment Operator ++
            h. Decrement Operator --
        2. Assignment Operators
            a. Simple Assignment Operator =
            b. Add and Assign Operator +=
            c. Subtract and Assign Operator -=
            d. Multiply and Assign Operator *=
            e. Divide and Assign Operator /=
        3. Comparison Operators
            a. Equality Operator ==
            b. Strictly Equality Operator ===
            c. Not Equality Operator !=
            d. Strictly Not Equality Operator !==
            e. Greater than Operator >
            f. Less than Operator <
            g. Greater than or Equal to Operator >=
            h. Less than or Equal to Operator <=
        4. Logical Operators
            a. AND Operator &&
            b. OR Operator ||
            c. NOT Operator !
        5. Ternary or Conditional Operator ?
         
*/

console.log(6 % 4); // This will return 2 (Remainder)

let number5 = 2;

console.log(++number5); // This will return 3 (Increment)
console.log(--number5); // This will return 2 (Decrement)

// Equality Operator
console.log(4 == 5); // returns false
console.log(4 == "4"); // returns true
console.log("Faithfullness" == "faithfulness"); // returns false

// Strictly Equality Operator
console.log(4 === 4); // returns true
console.log(4 === "4"); // returns false

// Not Equality Operator
console.log(7 != 5); // returns true
console.log(9 != "9"); // returns false

// Strictly Not Equality Operator
console.log(4 !== 4); // returns false
console.log(181 !== "181"); // returns true

// Greater than Operator
console.log("a" > "b"); // returns false
console.log("w" > "p"); // returns true

// Greater than or Equal to Operator
console.log("z" >= "r"); // returns true
console.log(12 / 6 >= 2); // returns true

// AND Operator
console.log("z" >= "r" && 2 < 1); // returns false
console.log(12 / 6 >= 2 && 2 == "2" && "z" <= "a"); // returns false

// OR Operator
console.log("z" >= "r" || 2 < 1); // returns true

// NOT Operator
console.log(!("z" >= "r" || 2 < 1)); // returns false (reverses the boolean value)

// isNaN() = is Not a Number

// Ternary Operator
let var1 = 15;

!isNaN(var1)
  ? console.log("This is not a number")
  : console.log(`${var1} is a number`);
"Ade".length < 8
  ? console.log("This is too short")
  : console.log("This is okay!");

let number6 = 12;

number6 === 12
  ? console.log("You have reached puberty")
  : number6 > 12 && number6 < 20
    ? console.log("You are a teenager!")
    : console.log("You have not reached puberty");

number6 === 12 && console.log("You are 12 years old!");

/*
    Conditional Statements
        1. If/else Statement
        2. Switch Statement

*/

// If/else Statement
let loggedIn = true;
let myUsername = "FayFay";

if (
  loggedIn &&
  myUsername !== null &&
  myUsername !== undefined &&
  myUsername.trim().length > 3
) {
  console.log(`Welcome back, ${myUsername}!`);
} else {
  console.log("You are not logged in! Sign in here.");
}

let age = 19;

if (age <= 12) {
  console.log(
    `You are not a teen, you have ${13 - age} years to become a teen.`,
  );
} else if (age < 20) {
  console.log("You are a teenager.");
} else {
  console.log("Enter a valid age.");
}



// Switch Statement
let day = "Monday".toUpperCase();


switch (day) {
    case 'monday'.toUpperCase():
        console.log("Today is Monday!");
    break; 
    default:
        console.log("Enter a valid day!!!");
    break;
}

/* 
    Array and Array Methods
        1. length
        2. Square braces notation
        3. join()
        4. pop()
        5. push()
        6. shift()
        7. unshift()
        8. slice()
        9. splice()
        10. sort()

*/

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(arr1.length);

console.log(arr1[4]);
console.log(arr1[arr1.length - 1]);

console.log(arr1.join(", "));
console.log(arr1);

arr1.pop();

console.log(arr1);

arr1.push(20)

console.log(arr1);

arr1.slice(0, 2);
arr1.splice(10, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19);

console.log(arr1);

// Destructuring an array

const arr2 = ["Joeboy", "FayFay", "AB", "Lammy"];

const [css, js, ...node] = arr2;

console.log(node);

// Nested & Multi-dimensional Array
const arr3 = [
  "Football",
  ["Amateur Wrestling", "Professional Wrestling"],
  "Golf",
  "Basketball",
  [["Kickboxing", "Muay Thai", "Sambo"], ["Judo", "Jujutsu", "Brazilian Ji-jutsu", "Haikaido"], ["Taekwondo", "Karate"]],
];

console.log(arr3[1][1]);
console.log(arr3[4][1][2]);

/*
  Object and Object methods
    1. Dot or square braces notation
    2.  delete
    3. Object.seal()
    4. Object.freeze()
    5. Object.keys()
    6. Object.values()
    7. Object.entries()
    8. this
*/ 

const object1 = {
  name: "Julius Caeser",
  nationality: "Italian",
  ethnicity: "Roman",
  language: "Latin",
  profession: ["Soldier", "Statesman", "Conspirator", "Dictator"],
  isAlive: false,
  note: function () {
    return `${this.name} is a ${this.ethnicity}`
  } 
}

console.log(object1.name);
console.log(object1["profession"]);

object1.language = "Greek";

console.log(object1);

object1.family = {
  mother: "Aurelia Cotta",
  wives: ["Coscenia", "Pompeia", "Calpurnia"],
  daughter: "Julia Caesaris",
  adoptedSon: "Augustus",
}
console.log(object1.family.wives);

object1.tod = "Stabbed to death"

object1.hobbies = ["Fighting", "Warmongering", "Singing", "Sleeping"];
delete object1.hobbies;
console.log(object1);

Object.seal(object1);

object1.hobbies = ["Fighting", "Warmongering", "Singing", "Sleeping"];

object1.language = "Latin";

console.log(object1);

Object.freeze(object1);

object1.language = "Yoruba";
object1.isMyFriend = false;

console.log(object1);


console.log("Keys in Object 1", Object.keys(object1));
console.log("Values in Object 1", Object.values(object1));
console.log("Entries in Object 1", Object.entries(object1));

console.log(object1.note());

/*
  Loops
    1. for loop = for (initialization; condition; increment or decrement) {
      A block of code
    }
      a. for...of loop
      b. for...in loop 
    2. while loop = while(condition){
      A block of code
    }
    3. do...while loop = do {
      A block of code
    } while (condition)
    
    *** continue and break keywords
*/ 

// for loop
for (let i = 0; i < 10; i++){
  console.log(i);
  
}

const animals = ["Antelope", "Bee", "Cat", "Dog", "Elephant", "Fish", "Goat"];

for (let i = 0; i < animals.length; i++){
  console.log(`${animals[i].substring(0, 1)} is for ${animals[i]}`);
  
}

// while loop
let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter++;  
}

// do...while loop
do {
  console.log(`Looped counter is at ${counter}`);
  counter++
  
} while (counter < 0);
 

// for..of loop
const arr4 = [4, 8, 12, 16, 20, 24, 28, 32];

for(let arr of arr4){
  console.log(arr * 2);
  
}
for (let [key, value] of Object.entries(object1)) {
  console.log(`${key} : ${value}`);

}

// for...in loop
for (let key in object1){
  console.log(`${key}`);
  
}

// continue
for (let [key, value] of Object.entries(object1)) {
  if (key === "note" || key === "family") {
    // continue;
    break;
  } else {
    console.log(`${key} : ${value}`);
  }

} 

/*
  Array Iteration methods
  1. forEach()
  2. map()
  3. filter()
  
*/ 

const arr5 = ["head", "hand", "leg", "face", "skin", "toes",];

// forEach()
arr5.forEach((el) => console.log(el));

// map()
const mappedArr5 = arr5.map((el) => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase());

console.log(mappedArr5);

// filter()
const filteredArr5 = mappedArr5.filter((el) => el.includes("e"));
console.log(filteredArr5);


// Function
function add (a, b) {
  const c = a + b;
  // return c;
}

console.log(add(10, 5));


/* 
  Types of Functions
  1. Function Declaration
  2. Function Expression 
  3. Arrow Function
  4. Higher-order Function
  5. Anonymous Function
  6. Callback Function
  7. Immediately Invoked Function Expression (IIFE) 
*/ 
console.log(subtract(9, 2)); // Execute the task


// Function Declaration
function subtract(a, b) {
  return `The value of ${a} - ${b} = ${a - b}`;
}

console.log(subtract(3, 12));

// console.log(greeting("Ayodeji")); // Returns a referenceError


// Function Expression
const greeting = function (name){
  return `Hello ${name}`;
}

console.log(greeting("FayFay"));

// Arrow Function
const divide = (a, b) => `The value of ${a} / ${b} = ${a / b}`;

console.log(divide(10, 2));

// Callback Function
function stringValidator (sentence) {
  if (typeof sentence !== "string") return;
  
}

// Higher-order Function
function capitalizer(sentence, validator) {
  if (!validator(sentence)) {
    return `${sentence} is not a valid string!`;
  } else {
    const capitalizedSentence = sentence
      .split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
      );
    return `This is your original string: ${sentence}\nThis is your capitalized string: ${capitalizedSentence.join(" ")}`;
  }
}

const capitalizedStr = capitalizer(1, stringValidator);

console.log(capitalizedStr);


// setTimeout(
//   // Anonymous function
//   () => {
//     console.log("It's 5 seconds already!");
//   },
//   5000,
// );

(() =>{
  console.log("This happened immediately!");
} )();

/*
  Scope
  1. Global Scope
  2. Local Scope
  3. Lexical Scope
*/ 

// Global Scope
const tools = [
  {browser: "Chrome"},
  {editor: "VS Code"},
  {simulator: "Mobile Simulator"}
];


function show() {
  // Local Scope
  const tools = [
    { browser: "MS Edge" },
    { editor: "Cursor" },
    { simulator: "Mobile Simulator" },
  ];
  return tools;
}

console.log(show());

console.log(tools);

const essentials = ["Programming languages", "soft skills", tools]

console.log(essentials);

console.log('Task 1');
setTimeout(() => {
  console.log('Task 2');
}, 5000);
console.log('Task 3');

// setInterval(()=> {
//   window.alert("It's already 10 seconds!");
// }, 10000);



// Async function
const fetchPosts = async () => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');


    const posts = await data.json();

    console.log(posts.slice(0, 10));

    
    
  } catch(err){
    console.error("Error", err)    
  }


}

// fetchPosts();
console.log(fetchPosts());
