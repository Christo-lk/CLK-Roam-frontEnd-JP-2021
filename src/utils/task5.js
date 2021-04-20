// Roam Frontend Level Assessment
// JP Yepez
// task5.js

// take two point coordinates and return the distance
// round result to nearest thousandth
// point format {x, y}
// find distance using Pythagorean theorem

// Theory:
// d=√((x_2-x_1)²+(y_2-y_1)²)

export default function getDistance (pointA, pointB){


  // put pointA co Ordinates into variables
  const Xa = Number(pointA.x)
  const Ya = Number(pointA.y)

  // Put pointB co ordinates into variables
  const Xb = Number(pointB.x)
  const Yb = Number(pointB.y)

  // Pythagorean theorem
  const distance = Math.sqrt(Math.pow((Xa-Xb), 2) + Math.pow((Ya-Yb), 2))

  // return distance to third decimal point
  return Number(distance.toFixed(3))
};
