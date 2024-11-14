const { capitalize, reverseString, calculator, caesar } = require('./ordertotal.js')
//reverseString, calculator, caesarCipher, analyzeArray

test("Returns string with first character capitalized", () => {
    const string = 'lala'
    expect(capitalize(string)).toBe('Lala');
})

test("Returns string in reverse", ()=> {
    const string = "Christina";
    expect(reverseString(string)).toBe('anitsirhC');
})

describe('Calculator', () => {
    test('Adds 2 numbers', () => {
        expect(calculator.add(5, 2)).toBe(7);
    });
    test('Subtracts 2 numbers', () => {
        expect(calculator.subtract(10, 7)).toBe(3);
    });
    test('Dividing 2 numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });
    test("Multiplying 2 numbers", () => {
        expect(calculator.multiply(10, 5)).toBe(50);
    });
});

describe('Caesars Cipher', () => {
    test('Wrapping z to a', () => {
        expect(caesar('xyz', 3)).toBe('abc');
    });
    test('Case preservation', () => {
        expect(caesar('HeLLo', 3)).toBe('KhOOr');
    });
    test('Punctuation', () => {
        expect(caesar('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

})