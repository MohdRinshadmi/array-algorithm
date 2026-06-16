// Q : Given an array of integers, return an array containing only the unique elements (i.e., remove duplicates) while maintaining the original order.

function removeDuplicate(){
    let getUniqueNumber = new Set();
    let result = [];
    
    for(let num of arr){
        if(!getUniqueNumber.has(num)){
            getUniqueNumber.add(num);
            result.push(num)
        }
    }
    return result;
}

let arr = [1, 3, 2, 4, 2, 5, 4]
removeDuplicate(arr)
console.log(removeDuplicate(arr))