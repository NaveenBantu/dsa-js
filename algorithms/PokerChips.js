// Find min. number of chips a Cashier can use to match the Customer requests in a Casino
// Cashier has only 100, 50, 25, 10, 5, 1 chips at his disposal
// For example: If a customer asks for $126 - Cashier should give 3 chips (100, 25, 1)
// Write a function to find the minimum number of chips the cashier can use to match the customer requests.

function pokerChips(value){
  // Array to store the available chips
  const chips = [100, 50, 25, 10, 1];

  // Variable to sore the min. count of chips
  let chipCount = 0;

  // Loop through the available chips and get the chip count - but its a fixed array - O(1)
  for (chip in chips){
    let num = Math.floor(value/chip);
    value -= chip * num;
    chipCount += num; 
  }
  return chipCount;
}

// Testing the function using the following example:
pokerChips(273)   //8 Chips (100, 100, 50, 10, 10, 1, 1, 1)
