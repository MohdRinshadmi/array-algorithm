// Q: Given an array of integers, return a new array containing only the unique elements while maintaining the original order. Additionally, return the indices of their last occurrences in the original array.

function removeDuplicatesWithLastIndices(arr) {
    let seen = new Set();
    let uniqueArray = [];  // return a new array containing unique elements
    let indicesMap = new Map(); // Stores the last occurrence index

    // Traverse the array and update the last index for each number
    arr.forEach((num, index) => {
        indicesMap.set(num, index);
    });

    // Collect unique elements in order
    arr.forEach((num) => {
        if (!seen.has(num)) {
            seen.add(num);
            uniqueArray.push(num);
        }
    });

    // Retrieve the last occurrence indices
    let indices = uniqueArray.map(num => indicesMap.get(num));

    return { uniqueArray, indices };
}

// Example usage
const inputArray = [4, 2, 5, 2, 3, 4, 5, 6, 2]; // array of integers.
const result = removeDuplicatesWithLastIndices(inputArray);

console.log("Output:", result);
