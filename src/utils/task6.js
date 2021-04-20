// Roam Frontend Level Assessment
// JP Yepez
// task6.js

// take a set of strings and only keep the ones with identical repeating characters
// use regex to verify if each string meets criteria
// match all single characters (.) and use {m,} quantifier
// should keep single character strings (i.e. 'a', 'c')
// filter array of strings

const identicalFilter = (stringsSet) => {

// I havent used regex expressions before so I couldnt come up with the exact solution
// but I've included and commented out each different regex test that I managed to teach myself.

// accepts string that === 'Roam'
// return stringsSet.filter(input => /Roam/.test(input))

// returns string that starts with 'Roam' and ends with great
// return stringsSet.filter(input => /^Roam.*great$/.test(input))

// accepts string that has Roam OR is OR pretty OR great
// return stringsSet.filter(input => /Roam|is|pretty|great/.test(input))

// accepts any combination of strings and numbers
// return stringsSet.filter(input => /[A-Za-z0-9]/.test(input))

// accepts a combination of 3 numbers
// return stringsSet.filter(input => /^\d{3}$/.test(input))

// // accepts a combination of 3 alphanumeric characters
// return stringsSet.filter(input => /^\w{3}$/.test(input))

// accepts a combination of 3-5 alphanumeric characters
// return stringsSet.filter(input => /^\w{3,5}$/.test(input))git s

// accepts a combination of 3 or MORE alphanumeric characters
return stringsSet.filter(input => /^\w{3,}$/.test(input))

};

export default identicalFilter;






















