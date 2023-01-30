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

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0, sumOddElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]%2 === 0) {
    sumEvenElement += arr[i];
    }
    else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0, countEvenElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]%2 === 0) {
    sumEvenElement += arr[i];
    countEvenElement++;
    }
  }
  return sumEvenElement/countEvenElement;
}

function summElementsWorker(...arr) {
  let sum = 0; 
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
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
  let maxWorkerResult = func(...arrOfArr[0]); 
   for(let i = 1; i < arrOfArr.length; i++) {
      const funcResult = func(...arrOfArr[i]);
      if (funcResult > maxWorkerResult) {
        maxWorkerResult = funcResult;
      }
    }
  return maxWorkerResult;
}
