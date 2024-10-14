let dObj = new Date();

let dStr = new Date().toString();

let days = d.getDay();

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(dayNames[d]);

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1; // Months are zero-indexed (0 = January, 1 = February, etc.)
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let milliseconds = now.getMilliseconds();
let dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

let later = new Date(2020, 11, 31);

let date1992 = new Date(1992, 1, 2);

alert(new Date(1980, 0, 1).getTime());

let date = new Date(); // Create a Date object with the current date and time
date.setFullYear(2025); // Change the year to 2025

function changeMonthToJanuary(date) {
    date.setMonth(0); // 0 represents January
}

// Example usage:
let myDate = new Date(); // Create a Date object with the current date
console.log("Original Date:", myDate); // Display the original date

changeMonthToJanuary(myDate); // Change the month to January
console.log("Updated Date:", myDate); // Display the updated date

// Function to change the day of the week
function changeDayOfWeek(date, newDayOfWeek) {
    // Get the current day of the month
    let currentDate = date.getDate();
    
    // Calculate the difference between the new day and the current day of the week
    let currentDayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    let difference = newDayOfWeek - currentDayOfWeek;

    // Set the date to the new day of the week
    date.setDate(currentDate + difference);
}

// Example usage:
let myDates = new Date('2024-10-12'); // A specific date (Friday)
console.log("Original Date:", myDate);

changeDayOfWeek(myDates, 0); // Change to Sunday (0 represents Sunday)
console.log("Updated Date:", myDates); // Displays the updated date

function changeMinutes(date) {
    // Prompt the user for the new minutes
    let newMinutes = prompt("Enter the new minutes (0-59):");

    // Convert the input to a number
    newMinutes = parseInt(newMinutes, 10);

    // Check if the input is a valid number between 0 and 59
    if (!isNaN(newMinutes) && newMinutes >= 0 && newMinutes < 60) {
        date.setMinutes(newMinutes); // Set the new minutes
        console.log("Updated Date:", date); // Display the updated date
    } else {
        console.log("Invalid input. Please enter a number between 0 and 59.");
    }
}

// Example usage:
let myDatee = new Date(); // Create a Date object with the current date and time
console.log("Original Date:", myDatee); // Display the original date
changeMinutes(myDatee); // Change the minutes

function addHours(date, hoursToAdd) {
    date.setHours(date.getHours() + hoursToAdd); // Add the specified number of hours
    return date; // Return the updated date
}

// Example usage:
let myyDate = new Date(); // Create a Date object with the current date and time
console.log("Original Date:", myyDate); // Display the original date

let hoursToAdd = 5; // Specify the number of hours to add
let updatedDate = addHours(myyDate, hoursToAdd); // Add hours
console.log("Updated Date:", updatedDate); // Display the updated date

function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Example usage:
const birthdate = prompt("Enter your birthdate (YYYY-MM-DD):");
const age = calculateAge(birthdate);

if (!isNaN(age)) {
    console.log(`You are ${age} years old.`);
} else {
    console.log("Invalid date format. Please use YYYY-MM-DD.");
}
// chap 35 - 37

function displayAlert() {
    alert("This is an alert!");
}


function askName() {
    userName = prompt("Enter name"); // Prompt the user and assign the input to userName
}


function executeFunctions() {
    askName();       // Calls askName to get the user's name
    displayAlert();  // Calls displayAlert to show an alert
}

function promptAndDisplayName() {
    // Prompt the user to enter their name
    let name = prompt("Enter name");

    // Display the entered name in an alert
    alert("Hello, " + name + "!");
}

// Call the function
promptAndDisplayName();

let variable = "XYZ"; // Variable holding a string
let str = "Hello";    // A string
let num = 42;         // A number

// Example call to the concat function
let result = concat("A", "B", "C", variable, str, num);
console.log(result); // Output the result

function concatenateAndAssign(param1, param2) {
    // Concatenate the two parameters and assign the result to an undeclared variable
    result = param1 + param2; // result becomes a global variable
}

// Call the function with two arguments
concatenateAndAssign("Hello, ", "World!");

// Display the result
console.log(result); // Output: "Hello, World!"

function calculateAverage(numbers) {
    // Check if the input is an array and not empty
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 0; // Return 0 for invalid input
    }

    // Calculate the sum of the numbers
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

    // Calculate the average
    const average = sum / numbers.length;

    return average; // Return the average
}

// Example usage
const numArray = [10, 20, 30, 40, 50]; // Example array of numbers
const average = calculateAverage(numArray); // Calculate the average
console.log("Average:", average); // Output: Average: 30

// answer 7

function multiply(a, b, c) {
    result = a * b * c;  // 'result' hasn't been declared yet
    return result;
  }
  console.log(multiply(2, 3, 4));  // Output: 24

//   aswer 8

function multiply(a, b, c) {
    result = a * b * c;  // 'result' hasn't been declared yet
    return result;
  }
  console.log(multiply(2, 3, 4));  // Output: 24

// answer 9
function sum(a, b) {
    return a + b;
  }
  console.log(sum(4, 7));  // Output: 11

//   answer 10
function average(numbers) {
    let sum = 0;
    
    // Sum all the numbers in the array
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    // Check to avoid division by zero
    return numbers.length > 0 ? sum / numbers.length : 0;
  }

  let numArrray = [5, 10, 15, 20];
console.log(average(numArrray));  // Output: 12.5

// answer11
function sum(a, b) {
    return a + b;
  }
  
  // Capture the returned value
  let reesult = sum(5, 10);
  
  // Now you can use the result
  console.log(reesult);  // Output: 15
  
//   answer 12
function letterCount(word) {
    let counts = {};  // Object to store letter counts
  
    // Loop through each letter in the word
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
  
      // Increment the count if the letter already exists in the object
      if (counts[letter]) {
        counts[letter]++;
      } else {
        // Initialize the count if the letter is encountered for the first time
        counts[letter] = 1;
      }
    }
  
    return counts;
  }
  
  let word = "hello";
  console.log(letterCount(word));  // Output: { h: 1, e: 1, l: 2, o: 1 }

//   answer13
function setYear(date, year) {
    date.setFullYear(year);  // Sets the year in the date object
    return date;
  }
  
  let mmyDate = new Date();  // Create a new date object with the current date
  console.log(mmyDate);  // Output: current date
  
  mmyDate = setYear(mmyDate, 2025);  // Set the year to 2025
  console.log(mmyDate);  // Output: updated date with the year 2025
  
//   anser 14
function calculateAge(dateOfBirth) {
    let today = new Date();  // Get the current date
    let birthDate = new Date(dateOfBirth);  // Create a date object from the input
  
    let age = today.getFullYear() - birthDate.getFullYear();  // Calculate the difference in years
    let monthDiff = today.getMonth() - birthDate.getMonth();  // Calculate the month difference
  
    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  let dateOfBirth = '1990-06-15';  // Example date of birth (format: YYYY-MM-DD)
console.log(calculateAge(dateOfBirth));  // Output: age based on the current date

// answer 15
function isWordPresent(word, array) {
    return array.includes(word);  // Check if the word is in the array
  }
  const names = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];

console.log(isWordPresent('raza', names));  // Output: true
console.log(isWordPresent('ali', names));    // Output: false

// answer 16
function repeatLetter(letter) {
    return letter.repeat(10);  // Repeat the letter 10 times
  }
  console.log(repeatLetter("a"));  // Output: "aaaaaaaaaa"
console.log(repeatLetter("b"));  // Output: "bbbbbbbbbb"
console.log(repeatLetter("abcde"));  // Output: "abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde"
// answer 17
function reverseArray(arr) {
    return arr.reverse();  // Reverse the array
  }
  const originalArray = ['a', 'b', 'c', 'd', 'e'];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray);  // Output: ['e', 'd', 'c', 'b', 'a']

// chapter 38 
function demonstrateLocalVariable() {
    let localVariable = "I am a local variable";  // This is a local variable
  
    console.log(localVariable);  // Accessing the local variable
  }
  
  // Call the function
  demonstrateLocalVariable();
  
  // Trying to access the local variable outside the function will result in an error
  console.log(localVariable);  // This will throw a ReferenceError

//   answer 2
// Declare a global variable
let globalVariable = "I am a global variable";

function accessGlobalVariable() {
  console.log(globalVariable);  // Accessing the global variable inside the function
}

// Call the function
accessGlobalVariable();  // Output: I am a global variable

// chapter 39 40
let fruit = "apple";  // Example variable

switch (fruit) {
  case "apple":
    console.log("You chose an apple.");
    break;
  case "banana":
    console.log("You chose a banana.");
    break;
  case "orange":
    console.log("You chose an orange.");
    break;
  case "grape":
    console.log("You chose a grape.");
    break;
  default:
    console.log("Unknown fruit.");
}

// answer 2
// Get the city name from the user
let cityName = prompt("Enter the name of a city:"); // This will prompt the user for input

switch (cityName) {
  case "New York":
    alert("You have selected New York!");
    break;
  case "Los Angeles":
    alert("You have selected Los Angeles!");
    break;
  case "Chicago":
    alert("You have selected Chicago!");
    break;
  case "Houston":
    alert("You have selected Houston!");
    break;
  default:
    alert("City not recognized. Please try again."); // Default message if no case matches
}
// complete 
// new 
// chapter 38- 42
function power(a, b) {
    let result = 1; // Initialize result to 1
  
    // Loop to multiply a, b times
    for (let i = 0; i < b; i++) {
      result *= a; // Multiply result by a in each iteration
    }
  
    return result; // Return the final result
  }
  console.log(power(2, 3));  // Output: 8 (2^3)
  console.log(power(5, 2));  // Output: 25 (5^2)
  console.log(power(7, 0));  // Output: 1 (any number raised to 0 is 1)

//    answer 2
function isLeapYear(year) {
    // A year is a leap year if:
    // 1. It is divisible by 4
    // 2. It is NOT divisible by 100, unless it is also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true; // The year is a leap year
    } else {
      return false; // The year is not a leap year
    }
  }
  let yeear = prompt("Enter a year:"); // Prompt user for a year
yeear = parseInt(yeear); // Convert the input to an integer

if (isLeapYear(yeear)) {
  console.log(yeear + " is a leap year."); // Output if it's a leap year
} else {
  console.log(yeear + " is not a leap year."); // Output if it's not a leap year
}
// answer 3
// Function to calculate the semi-perimeter
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2; // S = (a + b + c) / 2
  }
  
  // Function to calculate the area of the triangle
  function calculateArea(a, b, c) {
    let S = calculateSemiPerimeter(a, b, c); // Call the first function to get S
    // Calculate the area using the formula area = √[S(S − a)(S − b)(S − c)]
    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area; // Return the calculated area
  }
  
  // Example usage
  let sideA = 5; // Length of side a
  let sideB = 6; // Length of side b
  let sideC = 7; // Length of side c
  
  let area = calculateArea(sideA, sideB, sideC);
  console.log("The area of the triangle is: " + area); // Output the area

//   answer 4
// Function to calculate the average of marks
function calculateAverage(marks) {
    let total = marks.reduce((sum, mark) => sum + mark, 0); // Sum all marks
    return total / marks.length; // Calculate average
  }
  
  // Function to calculate the percentage of marks
  function calculatePercentage(marks) {
    let total = marks.reduce((sum, mark) => sum + mark, 0); // Sum all marks
    return (total / (marks.length * 100)) * 100; // Calculate percentage
  }
  
  // Main function to get user input and display results
  function mainFunction() {
    // Prompt user for marks in 3 subjects
    let marks = [];
    for (let i = 1; i <= 3; i++) {
      let mark = parseFloat(prompt(`Enter marks for subject ${i}:`));
      marks.push(mark); // Store the mark in the array
    }
  
    // Calculate average and percentage using the other functions
    let average = calculateAverage(marks);
    let percentage = calculatePercentage(marks);
  
    // Display the results
    console.log(`Average: ${average.toFixed(2)}`); // Display average with 2 decimal places
    console.log(`Percentage: ${percentage.toFixed(2)}%`); // Display percentage with 2 decimal places
  }
  
  // Call the main function to execute the program
  mainFunction();
//   answer 5
function customIndexOf(str, char) {
    // Check if the input character is a single character
    if (char.length !== 1) {
      return -1; // Return -1 if char is not a single character
    }
  
    // Loop through the string to find the character
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i; // Return the index if the character is found
      }
    }
  
    return -1; // Return -1 if the character is not found
  }
  
  // Example usage
  const myString = "Hello, world!";
  const characterToFind = 'o';
  
  const index = customIndexOf(myString, characterToFind);
  console.log(`Index of '${characterToFind}': ${index}`); // Output: Index of 'o': 4
  
//   answer 6
function removeVowels(sentence) {
    // Define a regular expression to match vowels (both uppercase and lowercase)
    const vowels = /[aeiouAEIOU]/g;
  
    // Replace all vowels with an empty string
    const result = sentence.replace(vowels, '');
  
    return result; // Return the sentence without vowels
  }
  
  // Example usage
  const inputSentence = "Hello, how are you?";
  const outputSentence = removeVowels(inputSentence);
  console.log("Original sentence:", inputSentence);

//   anser 7
function countDoubleVowels(sentence) {
    // Define the vowels
    const vowels = "aeiouAEIOU";
    let count = 0; // Initialize the count of double vowels
  
    // Loop through the sentence, checking pairs of characters
    for (let i = 0; i < sentence.length - 1; i++) {
      // Get the current character and the next character
      const currentChar = sentence[i];
      const nextChar = sentence[i + 1];
  
      // Check if both characters are vowels
      if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
        count++; // Increment the count if both are vowels
      }
    }
  
    return count; // Return the total count of double vowels
  }
  
  // Example usage
  const inpputSentence = "I see the tree in the queue";
  const doubleVowelCount = countDoubleVowels(inpputSentence);
  console.log(`Number of occurrences of two vowels in succession: ${doubleVowelCount}`);
  
  
//   answer 8
// Function to convert kilometers to meters
function kilometersToMeters(kilometers) {
    return kilometers * 1000; // 1 km = 1000 meters
  }
  
  // Function to convert kilometers to feet
  function kilometersToFeet(kilometers) {
    return kilometers * 3280.84; // 1 km = 3280.84 feet
  }
  
  // Function to convert kilometers to inches
  function kilometersToInches(kilometers) {
    return kilometers * 39370.1; // 1 km = 39370.1 inches
  }
  
  // Function to convert kilometers to centimeters
  function kilometersToCentimeters(kilometers) {
    return kilometers * 100000; // 1 km = 100,000 centimeters
  }
  
  // Main function to get user input and display results
  function mainFunction() {
    // Prompt user for distance in kilometers
    let kilometers = parseFloat(prompt("Enter the distance in kilometers:"));
  
    // Convert the distance using the conversion functions
    const meters = kilometersToMeters(kilometers);
    const feet = kilometersToFeet(kilometers);
    const inches = kilometersToInches(kilometers);
    const centimeters = kilometersToCentimeters(kilometers);
  
    // Display the results
    console.log(`${kilometers} kilometers is equivalent to:`);
    console.log(`${meters.toFixed(2)} meters`);
    console.log(`${feet.toFixed(2)} feet`);
    console.log(`${inches.toFixed(2)} inches`);
    console.log(`${centimeters.toFixed(2)} centimeters`);
  }
  
  // Call the main function to execute the program
  mainFunction();
  
//   answer 9
// Function to calculate overtime pay
function calculateOvertimePay(hoursWorked) {
    const regularHours = 40; // Regular working hours
    const overtimeRate = 12.00; // Overtime pay rate per hour
    let overtimeHours = 0; // Variable to store the number of overtime hours
  
    // Check if hours worked exceed regular hours
    if (hoursWorked > regularHours) {
      overtimeHours = hoursWorked - regularHours; // Calculate overtime hours
    }
  
    // Calculate overtime pay
    const overtimePay = overtimeHours * overtimeRate;
    return overtimePay; // Return the calculated overtime pay
  }
  
  // Main function to get user input and display results
  function mainFunction() {
    // Prompt user for the number of hours worked
    let hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
  
    // Calculate the overtime pay using the function
    const overtimePay = calculateOvertimePay(hoursWorked);
  
    // Display the result
    if (overtimePay > 0) {
      console.log(`Overtime pay for ${hoursWorked} hours worked: Rs. ${overtimePay.toFixed(2)}`);
    } else {
      console.log("No overtime pay for the hours worked.");
    }
  }
  
  // Call the main function to execute the program
  mainFunction();

//   answe10
// Function to calculate overtime pay
function calculateOvertimePay(hoursWorked) {
    const regularHours = 40; // Regular working hours
    const overtimeRate = 12.00; // Overtime pay rate per hour
    let overtimeHours = 0; // Variable to store the number of overtime hours
  
    // Check if hours worked exceed regular hours
    if (hoursWorked > regularHours) {
      overtimeHours = hoursWorked - regularHours; // Calculate overtime hours
    }
  
    // Calculate overtime pay
    const overtimePay = overtimeHours * overtimeRate;
    return overtimePay; // Return the calculated overtime pay
  }
  
  // Main function to get user input and display results
  function mainFunction() {
    // Prompt user for the number of hours worked
    let hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
  
    // Calculate the overtime pay using the function
    const overtimePay = calculateOvertimePay(hoursWorked);
  
    // Display the result
    if (overtimePay > 0) {
      console.log(`Overtime pay for ${hoursWorked} hours worked: Rs. ${overtimePay.toFixed(2)}`);
    } else {
      console.log("No overtime pay for the hours worked.");
    }
  }
  
  // Call the main function to execute the program
  mainFunction();
// compelete
//   chapter 43 48

