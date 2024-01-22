// UNIT 4: JavaScript Coding Practical Questions with Jest

const { tsParameterProperty } = require("@babel/types")

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

test('fibonacci sequence for fibonacciLength1', () => {
    const result = generateFibonacci(fibonacciLength1)
    expect(result).toEqual([1, 1, 2, 3, 5, 8])
})

test('fibonacci sequence for fibonacciLength2', () => {
    const result = generateFibonacci(fibonacciLength2)
    expect(result).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
})



// b) Create the function that makes the test pass.
const generateFibonacci = (length) => {
    if (length <= 0) {
        return []
    } else if (length === 1) {
        return [1]
    } else if (length === 2) {
        return [1, 1]
    }


const fibonacciArray = [1, 1]
for (let i = 2; i < length; i++) {
    const nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2]
    fibonacciArray.push(nextFibonacci)
}

return fibonacciArray
}

const result1 = generateFibonacci(fibonacciLength1)
const result2 = generateFibonacci(fibonacciLength2)

console.log(result1)
console.log(result2)

// Pseudo code:  
// 1. Define function generateFibonacci with a parameter named length. 
// 2. Inside the function:
//  a. Check if length is less than or equal to 0:
//      - if true, return an empty array.
//  b. Check if length is equal to 1:
//      - if true, return an array containing only 1.
//  c. Check is length is equal to 2:
//      - if true, return an array containing [1, 1]
// 3. Initialize array called fibonacciArray with first two elements [1, 1]
// 4. Use "for loop" starting from index 2 up to length.
//  a. Inside loop, calculate next Fibonacci number:
//     - nextFibonacci = fibonacciArray[i -1] + fibonacciArray[i-2]
//  b. Push nextFibonacci to fibonacciArray
// 5. Return fibonacciArray
// 6. declare variables outside the function - fibonacciLength1 and fibonacciLength2 with values 6 and 10
// 7. Write test cases 
// 8. Run tests to verify function works correctly. 

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

test('calculateTally - votes1', () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    expect(calculateTally(votes1)).toBe(11)
})

test('calculateTally -votes2', () => {
    const votes2 = { upVotes: 2, downVotes: 33}
    expect(calculateTally(votes2)).toBe(-31)
})

// b) Create the function that makes the test pass.
function calculateTally(votes) {
    return votes.upVotes - votes.downVotes
}

const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
console.log(calculateTally(votes1))

const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31
console.log(calculateTally(votes2))

// Pseudo code:
// 1. Define function called calculateTally that takes "votes" as a parameter.
// 2. Inside the function, subtract downVotes from upVotes.
// 3. Return the result of the subtraction as the end tally.