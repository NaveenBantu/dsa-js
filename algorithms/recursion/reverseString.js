/**
 * Implement a function that reverses a string using recursion!
 * @param {*} str 
 * @returns reversed string
 */
function reverseStringRecursive(str) {
    if (str === "") {
        return "";
    } else {
        // The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
        let subStr = reverseStringRecursive(str.substring(1));

        // The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
        return subStr + str.charAt(0);
    }
}


/**
 * Implement a function that reverses a string using iteration
 * @param {*} str 
 * @returns reversed string
 */
function reverseStringIteration(str) {
    let strArr = str.split("");
    let revArr = [];

    for (i = strArr.length - 1; i >= 0; i--) {
        revArr.push(strArr[i]);
    }

    return revArr.join("");
}


/**
 * Implement a function that reverses a string using closure
 * @param {*} str 
 * @returns reversed string
 */
function reverseStringClosure(str) {
    let strArr = str.split("");
    let revArr = [];

    //We are using closure here so that we don't add the above variables to the global scope.
    function addToArr(array) {
        if (array.length > 0) {
            revArr.push(array.pop());
            addToArr(array);
        }
        return;
    }

    addToArr(strArr);
    return revArr.join("");
}

// console.log(reverseStringClosure('yoyo mastery'));