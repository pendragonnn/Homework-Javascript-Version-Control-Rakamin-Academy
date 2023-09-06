// getting random int between 1-50
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

// generate array with default parameter 100
function arrayGenerator(element = 100) {
  let arr = [];

  for (i = 0; i < element; i++) {
    arr.push(getRandomInt(1, 50));
  }

  return arr;
}

// check and return the minimum number in each array
function minCheck(arr) {
  let min = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// check and return the maximum number in each array
function maxCheck(arr) {
  let max = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// sum and return total value in each array
function sumArray(arr) {
  let sum = 0;

  for (let i of arr) {
    sum += i;
  }

  return sum;
}

// count and return average value in each array
function averageArray(arr) {
  return sumArray(arr) / arr.length;
}

// split the array into odd and even element
function arrayOddEven(arr) {
  let arrayOdd = [];
  let arrayEven = [];

  for (let i of arr) {
    if (i % 2 == 0) {
      arrayEven.push(i);
    } else {
      arrayOdd.push(i);
    }
  }

  return { arrayOdd, arrayEven };
}

// init function
function init() {
  const { arrayOdd, arrayEven } = arrayOddEven(arrayGenerator(50));

  console.log(`Array genap : ${arrayEven}`);
  console.log(`Array ganjil : ${arrayOdd}`);

  if (minCheck(arrayEven) > minCheck(arrayOdd)) {
    console.log("Min lebih besar array genap");
  } else {
    console.log("Min lebih besar array ganjil");
  }

  if (maxCheck(arrayEven) < maxCheck(arrayOdd)) {
    console.log("Max lebih besar array ganjil");
  } else {
    console.log("Max lebih besar array genap");
  }

  if (averageArray(arrayEven) == averageArray(arrayOdd)) {
    console.log(
      `Total memiliki nilai sama antara array genap dan ganjil, yaitu genap : ${sumArray(
        arrayEven
      )} ganjil : ${sumArray(arrayOdd)}`
    );
  } else {
    console.log(
      `Total memiliki nilai yang tidak sama antara array genap dan ganjil, yaitu genap : ${sumArray(
        arrayEven
      )} ganjil : ${sumArray(arrayOdd)}`
    );
  }

  if (averageArray(arrayEven) < averageArray(arrayOdd)) {
    console.log("Average lebih besar array ganjil");
  } else {
    console.log("Average lebih besar array genap");
  }
}

init();
