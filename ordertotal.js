// Define the capitalize function
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string){
    // const reverseString = string => [...string].reverse().join(''); ALTERNATIVE
    return string.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a,b) => a / b,
    multiply: (a,b) => a * b
};

function caesar(str, shift) {
    return str.split('').map(char => {
        // Check if the character is a lowercase letter
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
        }
        // Check if the character is an uppercase letter
        else if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
        }
        // If it's not a letter, return it as-is
        return char;
    }).join('');
}

function convertArray(array) {
    let object = {
        average: 0,
        min: 0,
        max: 0,
        length: 0
    }
    array.sort((a, b) => a -b);
    object.average = array.reduce((sum, num) => sum + num, 0) / array.length;
    object.min = array[0];
    object.max = array[array.length-1];
    object.length = array.length;
    return object;
}
let result = convertArray([1,8,3,4,2,6]);
console.log(typeof result)

// Export the function (and any others you want to export)
module.exports = { capitalize, reverseString, calculator, caesar, convertArray};