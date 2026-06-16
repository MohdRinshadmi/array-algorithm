// Q: Create an array of integers and find the lowest value?

// function LowestValue(array){
// let minimumValue = array[0];

// for(i = array; i < array.length; i++){
//     if(i < minimumValue){
//         minimumValue = i
//     }
// }

// console.log('value', minimumValue);

// }

// const array = [2, 4, 5,1];
// LowestValue(array)
// console.log('Array', array);



function LowestValue(array) {
    let minimumValue = array[0]; // Initialize with the first element

    for (let i = 0; i < array.length; i++) { // Loop starts from index 1
        if (array[i] < minimumValue) { // Compare array element, not index
            minimumValue = array[i]; // Update the minimum value
        }
    }

    console.log('Lowest value:', minimumValue);
}

const array = [2, 4, 5, 1];
LowestValue(array); // Call function


