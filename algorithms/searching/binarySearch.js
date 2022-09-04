/***
 * Binary Search using While loop
 */

function binarySearchIteration(key, arr) {
    let first = 0;
    let last = arr.length - 1;
    let mid;

    while (first <= last) {
        mid = Math.floor((first + last) / 2);
        if (key === arr[mid]) return mid;

        if (key < arr[mid]) last = mid
        else first = mid
    }

    // if the key is not found return -1
    return -1

}