// Using Recursion
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productArr(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    let elem = array.pop();
    return elem * productArr(array);
  }
}

// Example execution
console.log(productArr([1, 4, 6]));
