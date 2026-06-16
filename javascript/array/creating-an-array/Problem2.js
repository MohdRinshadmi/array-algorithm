// Q: Given an array of integers, return a new array containing only the unique elements (i.e., remove duplicates) while maintaining the original order. Additionally, return the indices of the first occurrences of these unique elements in the original array.

function removeDuplicateNumberWithIndices(arr) {
  let findUniqueNumber = new Set();
  let result = [];
  let indices = [];

  arr.forEach((num, idx) => {
    console.log("num, idx", num, idx);

    if (!findUniqueNumber.has(num)) {
      findUniqueNumber.add(num);
      result.push(num);
      indices.push(idx);
    }
  });
  return { result, indices };
}

const array = [1, 2, 3, 3, 4, 2, 5, 4, 2, 6];
const answer = removeDuplicateNumberWithIndices(array)

console.log('answer', answer);

