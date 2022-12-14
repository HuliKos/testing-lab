let myFunctions = require('./functions')

// test('Return Two Test', ()=>{
//     expect(myFunctions.returnTwo()).toBe(2)
// })

// test('Greeting Test', ()=>{
//     expect(myFunctions.greeting('James')).toBe('Hello, James.')
//     expect(myFunctions.greeting('Jill')).toBe('Hello, Jill.')
// })

// test('add Test', ()=>{
//     expect(myFunctions.add(1,2)).toBe(3)
//     expect(myFunctions.add(5,9)).toBe(14)
// })

// test("Subtract", () => {
//     expect(myFunctions.subtract(11, 3)).toBe(8)
// })
// test("Multiply", () => {
//     expect(myFunctions.multiply(12, 3)).toBe(36)
// })
// test("Divide", () => {
//     expect(myFunctions.divide(15, 5)).toBe(3)
// })

describe("Math Challenge!", ()=>{
    test('add Test', ()=>{
        expect(myFunctions.add(1,2)).toBe(3)
        expect(myFunctions.add(5,9)).toBe(14)
    })
    
    test("Subtract", () => {
        expect(myFunctions.subtract(11, 3)).toBe(8)
    })
    test("Multiply", () => {
        expect(myFunctions.multiply(12, 3)).toBe(36)
    })
    test("Divide", () => {
        expect(myFunctions.divide(15, 5)).toBe(3)
    })
})