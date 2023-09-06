// getting random int between 1-50
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min) + min)
}

// generate array with default parameter 100
function arrayGenerator(element = 100) {
  let arr = []

  for(i = 0; i < element; i++) {
    arr.push(getRandomInt(1, 50))
  }

  return arr
}

// check and return the minimum number in each array
function minCheck(arr) {
  let min = arr[0];

  for (i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i]
    } 
  }

  return min
}

// check and return the maximum number in each array
function maxCheck(arr) {
  let max = arr[0]

  for(i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i]
    }
  }

  return max
}

// sum and return total value in each array
function sumArray(arr) {
  let sum = 0;

  for(let i of arr) {
    sum += 1;
  }

  return sum;
}

// count and return average value in each array
function averageArray(arr) {
  return sumArray(arr) / arr.length
}

// split the array into odd and even element
function arrayOddEven(arr) {
  let arrayOdd = []
  let arrayEven = []

  for(let i of arr) {
    if(i % 2 == 0) {
      arrayEven.push(i)
    } else {
      arrayOdd.push(i)
    }
  }

  return { arrayOdd, arrayEven }
}

// init function