// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// Using Iteration
function fibonacciIterative(n) {

    let first = 0;
    let second = 1;

    for (i = 1; i < n; i++) {
        let tmp = second;
        second = second + first;
        first = tmp;
    }

    return second;
}

// console.log("iterative ", fibonacciIterative(6));

// Using Recursion
function fibonacciRecursive(n) {

    if (n <= 2) {
        return 1;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursive(8));