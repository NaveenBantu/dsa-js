// Find most repeated character in a string (case-sensitive)
// For example: AbBbbbcad - should return "b" as answer

// Brute Force method - O(n^2)
function bruteMostChar(input) {
    let highestCount = 0;
    let mostChar = '';

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let count = 0;

        for (let j = i; j < input.length; j++) {
            if (char === input[j]) {
                count = count + 1;
            }
        }

        if (count > highestCount) {
            highestCount = count;
            mostChar = char;
        }
    }
    // console.log('highest count', highestCount);
    // console.log('most char ', mostChar);
}

// Executing to test
bruteMostChar('AbBbbbcad');
