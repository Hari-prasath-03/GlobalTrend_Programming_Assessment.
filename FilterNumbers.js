
const filterNumbers = (...args) => {

    let newArr = args.filter(elem => typeof(elem) !== 'number')

    console.log(newArr);
}

filterNumbers(2,"q","hari",2,"5", "ma", {name: "Hari"}, [1,2,3]);
