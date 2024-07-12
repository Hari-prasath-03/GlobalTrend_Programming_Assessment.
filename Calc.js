
const calc = (expression) => {

    const numbers = [];
    const operator = [];
    // Seperate numbers and operators
    let currentNum = '';
    for(let char of expression) {
        if(!isNaN(char) && char !== ' ') {
            currentNum += char;
        } else {
            if(currentNum) {
                numbers.push(Number(currentNum));
                currentNum = '';
            }
            operator.push(char);
        }
    }
    if(currentNum) numbers.push(Number(currentNum));
    // console.log(numbers,"   ",operator);

    // Evaluvation
    let result = numbers[0];
    for(let i=0; i<operator.length; i++) {
        if(operator[i] === '+') {
            result += numbers[i+1];
        } else {
            result -= numbers[i+1];
        }
    }

    return result;

}

const res = calc("1000+7390+2830+03-1");
console.log(res);





