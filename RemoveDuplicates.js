

const removeDuplicates = (array) => {

    // return [... new Set(array)];
    let newArr = [];

    for(let i=0; i<array.length; i++) {
        if(!newArr.includes(array[i])) newArr.push(array[i]);
    }

    return newArr;
    
}

console.log(removeDuplicates([1,2,3,4,5,2,3,5,6]));
console.log(removeDuplicates([1,2,3,1,2,3,4,5,6,6,6,7,7,8]));