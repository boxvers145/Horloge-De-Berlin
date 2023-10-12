import { BerlinClock } from '../src/app.js';

describe("minuteline", function(){
    //arrange
    let clock = new BerlinClock();

    it("given 0 should return 0", function() {
        let result = clock.minuteLine(0);
        expect(result).toBe("0000")
    })

    it("given 1 should return 1", function() {
        let result = clock.minuteLine(1);
        expect(result).toBe("I000")
    })

    it("given 2 should return 2", function() {
        let result = clock.minuteLine(2);
        expect(result).toBe("II00")
    })

    it("given 3 should return 3", function() {
        let result = clock.minuteLine(3);
        expect(result).toBe("III0")
    })

    it("given 4 should return 4", function() {
        let result = clock.minuteLine(4);
        expect(result).toBe("IIII")
    })

    it("given 5 should return 5", function() {
        let result = clock.minuteLine(5);
        expect(result).toBe("0000")
    })

    it("given 6 should return I000", function() {
        let result = clock.minuteLine(6);
        expect(result).toBe("I000")
    })

    it("given 7 should return II00", function() {
        let result = clock.minuteLine(7);
        expect(result).toBe("II00")
    })

    it("given 8 should return III0", function() {
        let result = clock.minuteLine(8);
        expect(result).toBe("III0")
    })

    it("given 9 should return III0", function() {
        let result = clock.minuteLine(9);
        expect(result).toBe("IIII")
    })

    it("given 10 should return 0000", function() {
        let result = clock.minuteLine(10);
        expect(result).toBe("0000")
    })
});