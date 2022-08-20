// Sorting an array unsing Bubble sort 
function bubbleSort(arr){
    // Brute force
    // Passing the array
    for(let i=0; i<arr.length; i++){
        // Optimising the iterations
        // if the array is already sorted - we do not need to do the remaining iterations
        // for this we declare a boolean variable
        let isSorted = true;

        // Second iteration where we compare and swap
        for(let j=1; j<arr.length; j++){
            if(arr[j] < arr[j-1]){
                // We swap the numbers when left is greater than right
                let tmp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = tmp;

                // set the boolean to false - as the array is not sorted
                isSorted = false;
            }
        }

        // if the array is sorted, then we dont have to pass the array again
        if(isSorted) return;
    }

    // Return sorted array
    return arr;
} 