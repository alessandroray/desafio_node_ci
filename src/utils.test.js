const { isEven, primeNumber } = require('./utils.js')
describe(" Test isEven function", () => {
    test("teste com describe", () => {
        expect(isEven(2)).toBe(true);
    });

    test("the number two should be true", () => {
        expect(isEven(2)).toBe(true);
    });

    test("the number five should be false ", () => {
        expect(isEven(5)).toBe(false);
    })

    test("the number -10 should be a error because a number is negative ", () => {
        try {
            isEven(-10)
        } catch (error) {
            expect(error).toHaveProperty('message', 'Number must be positive')
        }
    })

})


describe("Test prime number function", () => {
    test("the number 5 should be a prime number", () => {
        expect(primeNumber(5)).toBe(true)
    })
})
