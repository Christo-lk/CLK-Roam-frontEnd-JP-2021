// Roam Frontend Level Assessment
// JP Yepez
// task3.js

// take a number and return true if it is odd
// use modulo 2 and compare to check if it is odd (equal to 1)

export default function isOdd(input){

  // turn input into integer
  const sum = Number(input)
  
  // if remainder of sum is one then input is odd and will return true 
  return sum % 2 === 1 ? true : false
}