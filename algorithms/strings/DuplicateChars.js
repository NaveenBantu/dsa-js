// Find most repeated character in a string (case-sensitive)
// For example: AbBbbbcad - should return "b" as answer

// Brute Force method - O(n^2)
function bruteMostChar(input) {
    let highestCount = 0;
    let mostChar = '';

    // initial loop to assign the character
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let count = 0;

        // looping the rest of the characters to count duplicates
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



// Hastmap method - O(n)
// Find most repeated character in a string (case-sensitive)
// For example: AbBbbbcad - should return "b" as answer

function hashMostChar(input) {
    let map = {};
    let highestCount = 0;
    let mostChar = '';

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        // adding the count of characters to the map
        if (map[char]) {
            map[char] = map[char] + 1;
        } else {
            map[char] = 1;
        }

        // checking for the highestcount
        if (map[char] > highestCount) {
            highestCount = map[char];
            mostChar = char;
        }
    }
    // console.log('highest count', highestCount);
    // console.log('most char ', mostChar);
}

// Executing to test
hashMostChar('AbBbbbcad');
