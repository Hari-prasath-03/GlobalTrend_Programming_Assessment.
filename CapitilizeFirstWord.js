

const capitilizeFirstWord = sentence => {

    const words =  sentence.split(" ");
    const CapitilizedWord = words.map((element => {
        return element.charAt(0).toUpperCase() + element.slice(1);
    }));
    
    return CapitilizedWord.join(' ');
}

console.log(capitilizeFirstWord("lorem, ipsum dolor sit amet consectetur adipisicing elit. autem, quas"));