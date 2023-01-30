"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2)-4*a*c;
  if (d === 0) {
    arr = -b/(2*a);
  }
  else if (d > 0) {
      arr[0] = (-b + Math.sqrt(d) )/(2*a);
      arr[1] = (-b - Math.sqrt(d) )/(2*a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(isNaN(percent)) {
    Number(percent);
  }
  if(isNaN(contribution)) {
    Number(contribution);
  }
  if(isNaN(amount)) {
    Number(amount);
  }
  if(isNaN(countMonths)) {
    Number(countMonths);
  }
  if(!isNaN(percent) && !isNaN(contribution) && !isNaN(amount) && !isNaN(countMonths)) {
    percent *= 0.01/12;
    let loanBody = amount - contribution;
    let monthlyPayment = loanBody * (percent + (percent / (Math.pow((1 + percent), countMonths) - 1)));
    return (monthlyPayment*countMonths).toFixed(2);
  }
  return false;
}