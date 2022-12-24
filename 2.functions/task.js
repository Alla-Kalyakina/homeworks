function getArrayParams(...arr) {
  let min = arr[0], max = arr[0], avg = arr[0];
  let countElementsArr = 1;
  for(let i = 1; i < arr.length; i++) {
    countElementsArr++;
    if(arr[i] < min) {
      min = arr[i];
    }
    else if(arr[i] > max) {
      max = arr[i];
    }
    avg += arr[i];
  }
  avg = avg / countElementsArr;
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function worker(arr) {
  let sum = 0; 
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function worker2(arr) {
  let min = arr[0], max = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
    else if(arr[i] > max) {
      max = arr[i];
    }
  }
  return { difference: Math.abs(max - min) };
}

function makeWork (arrOfArr, func) {
  let max = func(arrOfArr[0]); 
   for(let i = 1; i < arrOfArr.length; i++) {
    if(max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]);
    }
  }
  return { max: max } ;
}
