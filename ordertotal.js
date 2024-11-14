
// reverseString, calculator, caesarCipher, analyzeArray

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

const hey = caesar('xyzYX', 3);
hey

// Export the function (and any others you want to export)
module.exports = { capitalize, reverseString, calculator, caesar};