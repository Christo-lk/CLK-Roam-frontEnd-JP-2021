// Roam Frontend Level Assessment
// JP Yepez
// task1.js

// take three values and check if their sum is larger than 1000
// use accumulator function and compare sum


export default function lessThan1000(num1, num2, num3){

  // put inputs into array and convert to integer
  const numbers = [num1, num2, num3].map(number => Number(number))

  // loop over each number and add to the previous using array.reduce
  const totalSum = numbers.reduce((total, currentNumber) => total + currentNumber)

  // return true if total sum is less than 1000
  return totalSum < 1000 ? true : false


}