function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
    else if(arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));
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
  return Math.abs(max - min);
}

function makeWork (arrOfArr, func) {
  let max = func(arrOfArr[0]); 
   for(let i = 1; i < arrOfArr.length; i++) {
      const funcResult = func(arrOfArr[i]);
      if (funcResult > max) {
        max = funcResult;
      }
    }
  return max;
}
