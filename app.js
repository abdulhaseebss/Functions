// Q=1

// function calculateCircleArea(radius) {
//     return Math.PI * radius * radius;
// }

// // Example usage
// const radius1 = 5;
// const area1 = calculateCircleArea(radius1);
// console.log(`The area of the circle with radius ${radius1} is: ${area1}`);

// const radius2 = 7;
// const area2 = calculateCircleArea(radius2);
// console.log(`The area of the circle with radius ${radius2} is: ${area2}`);





// Q=2

// function greetUser(firstName, lastName) {
//     const fullName = `${firstName} ${lastName}`;
//     console.log(`Hello, ${fullName}! Welcome.`);
// }

// // Example usage
// const firstName = "John";
// const lastName = "Doe";
// greetUser(firstName, lastName);



// Q=3

// function addTwoNumbers() {
//     const num1 = prompt("Enter the first number:");
//     const num2 = prompt("Enter the second number:");

//     if (!Number.isInteger(+num1) || !Number.isInteger(+num2)) {
//         console.log("Invalid input. Please enter valid integers.");
//         return;
//     }

//     const sum = +num1 + +num2;
//     return sum;
// }

// // Example usage
// const result = addTwoNumbers();
// if (typeof result !== "undefined") {
//     console.log(`The sum of the two numbers is: ${result}`);
// }


// Q=4


// function performOperation(num1, num2, operator) {
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);

//     if (isNaN(num1) || isNaN(num2)) {
//         console.log("Invalid input. Please enter valid numbers.");
//         return;
//     }

//     let result;
    
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 console.log("Division by zero is not allowed.");
//                 return;
//             }
//             break;
//         default:
//             console.log("Invalid operator. Please use +, -, *, or /.");
//             return;
//     }

//     console.log("The result of " + num1 + operator  + num2  + " is: " + result);
//     return result;
// }

// // Example usage
// const num1 = prompt("Enter the first number:");
// const num2 = prompt("Enter the second number:");
// const operator = prompt("Enter the operator (+, -, *, /):");

// performOperation(num1, num2, operator);


// Q=5

// function square(number) {
//     return number ** 2;
// }

// // Example usage
// const num = 5;
// const squared = square(num);
// console.log(`The square of ${num} is: ${squared}`);


