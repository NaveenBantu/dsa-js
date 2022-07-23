// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// Using Recursion
function findFactorialRecursive(number) {

    if (number === 1) {
        return 1;
    }

    const answer = number * findFactorialRecursive(number - 1);

    return answer;
}

// Using Iteration
function findFactorialIterative(number) {
    let answer = 1;
    for (i = 2; i <= number; i++) {
        answer *= i;
    }

    return answer;
}