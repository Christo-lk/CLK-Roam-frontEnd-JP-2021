// Roam Frontend Level Assessment
// JP Yepez
// task4.js

// take size of triangle sides and calculate area
// use Heron's formula to get area using the three sides
// remember to validate if triangle exists (NaN)
// i.e. 8, 8, 19

export default function triangleArea(sideA, sideB, sideC){

  // define each side and turn into integer
  const A = Number(sideA)
  const B = Number(sideB)
  const C = Number(sideC)

  // calculate S by dividing sum of all sides by 2
  const S = ((A + B + C) /2 )

  //s multiplied by s- each side
  return Math.sqrt(S * (S-A) * (S-B) * (S-C))

};

