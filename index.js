// getting random int between 1-50
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

// generate array with default parameter 200
function arrayGenerator(element = 200) {
  let arr = [];
  let limitOdd = 0;
  let limitEven = 0;

  for (i = 0; i < element; i++) {
    let temp = getRandomInt(1, 50);
    if (temp % 2 == 0 && limitEven < 50) {
      arr.push(temp);
      limitEven++;
    }

    if (temp % 2 == 1 && limitOdd < 50) {
      arr.push(temp);
      limitOdd++;
    }
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
  const array = arr

  for (let i of arr) {
    if (i % 2 == 0) {
      arrayEven.push(i);
    } else {
      arrayOdd.push(i);
    }
  }

  return { array, arrayOdd, arrayEven };
}

// init function
function init() {
  const { array, arrayOdd, arrayEven } = arrayOddEven(arrayGenerator());

  console.log(`Array : ${array}`);
  console.log(`Array genap berjumlah ${arrayEven.length} : ${arrayEven}`);
  console.log(`Array ganjil berjumlah ${arrayOdd.length} : ${arrayOdd}`);

  console.log(`Nilai minimum dari array genap adalah ${minCheck(arrayEven)}`);
  console.log(`Nilai minimum dari array ganjil adalah ${minCheck(arrayOdd)}`);
  if (minCheck(arrayEven) > minCheck(arrayOdd)) {
    console.log("Min lebih besar array genap");
  } else {
    console.log("Min lebih besar array ganjil");
  }

  console.log(`Nilai maximum dari array genap adalah ${maxCheck(arrayEven)}`);
  console.log(`Nilai maximum dari array ganjil adalah ${maxCheck(arrayOdd)}`);

  if (maxCheck(arrayEven) < maxCheck(arrayOdd)) {
    console.log("Max lebih besar array ganjil");
  } else {
    console.log("Max lebih besar array genap");
  }

  console.log(`Nilai total dari array genap adalah ${sumArray(arrayEven)}`);
  console.log(`Nilai total dari array ganjil adalah ${sumArray(arrayOdd)}`);
  if (averageArray(arrayEven) == averageArray(arrayOdd)) {
    console.log(`Total memiliki nilai sama antara array genap dan ganjil`);
  } else {
    console.log(
      `Total memiliki nilai yang tidak sama antara array genap dan ganjil`
    );
  }

  console.log(
    `Nilai rata-rata dari array genap adalah ${averageArray(arrayEven)}`
  );
  console.log(
    `Nilai rata-rata dari array ganjil adalah ${averageArray(arrayOdd)}`
  );

  if (averageArray(arrayEven) < averageArray(arrayOdd)) {
    console.log("Average lebih besar array ganjil");
  } else {
    console.log("Average lebih besar array genap");
  }
}

init();
