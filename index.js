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

// sum and return total value in each array

// count and return average value in each array

// init function