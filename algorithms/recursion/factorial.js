// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// Using Recursion - O(n)
function findFactorialRecursive(number) {

    if (number === 2) {
        return 2;
    }

    return number * findFactorialRecursive(number - 1);
}

// Using Iteration - O(n)
function findFactorialIterative(number) {
    let answer = 1;

    for (i = 2; i <= number; i++) {
        answer *= i;
    }

    return answer;
}