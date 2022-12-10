"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2)-4*a*c;
  switch(d > 0? 1 : (d < 0 ? -1 : 0) ) {
    case -1:
      break;
    case 0:
      arr = -b/(2*a);
      break;
    case 1:
      arr[0] = (-b + Math.sqrt(d) )/(2*a);
      arr[1] = (-b - Math.sqrt(d) )/(2*a);
      break;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}