

const flattenArray = (nestedArray) => {

    let flatedArray = [];

    const flatArray = (array) => {
        for(let elem of array) {
            if(Array.isArray(elem)) {
                flatArray(elem);
            } else {
                flatedArray.push(elem);
            }
        }
    }

    flatArray(nestedArray);

    return flatedArray;
}

console.log(flattenArray([[1,2,3],[1,2,3],[1,2,3,[1,2,3]],[1,2,3]]));
console.log(flattenArray([[1,1,1],[2,2,2],[3,3,3]]));