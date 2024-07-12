

const isAnagram = (str1, str2) => {

    const sorted = str => str.split('').sort().join();

    return sorted(str1) === sorted(str2);
}

console.log(isAnagram("Anagram", "marganA")); 
console.log(isAnagram("car", "deer")); 