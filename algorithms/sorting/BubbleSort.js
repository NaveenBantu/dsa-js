// Sorting an array unsing Bubble sort 
function bubbleSort(arr){
    // Brute force
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){
            if(arr[j] < arr[j-1]){
                // We swap the numbers when left is greater than right
                let tmp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = tmp;
            }
        }
    }

    // Return sorted array
    return arr;
} 