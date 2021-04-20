// Roam Frontend Level Assessment
// JP Yepez
// task2.js

// take an integer and check if it is divisible by 10
// use modulo 10 and compare to check if condition is true (equal to 0)
// validate integer using propTypes in component
// floats that end in anything other than '.0' will return false anyway

export default function divisibleBy10(num){
  // turn input into integer
  const number = Number(num);

  // return true or false if the remainder after diving by 10 = 0
  return number % 10 === 0 ?  true :  false 

};
