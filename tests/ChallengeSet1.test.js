const cs1 = require('../ChallengeSet1');

describe('Absolute', () => {
    it('should return a positive number if input is positive', () => {
        const result = cs1.absolute(15);
        expect(result).toBe(15);
    });
    it('should return a positive number if input is positive', () => {
        const result = cs1.absolute(200);
        expect(result).toBe(200);
    });
    it('should return a positive number if input is positive', () => {
        const result = cs1.absolute(43);
        expect(result).toBe(43);
    });
    
    it('should return a positive number if input is negative', () => {
        const result = cs1.absolute(-4);
        expect(result).toBe(4);
    });
    it('should return a positive number if input is negative', () => {
        const result = cs1.absolute(-20);
        expect(result).toBe(20);
    });
    it('should return a positive number if input is negative', () => {
        const result = cs1.absolute(-325);
        expect(result).toBe(325);
    });
    
    it('should return 0 if input is 0', () => {
        const result = cs1.absolute(0);
        expect(result).toBe(0);
    });

    it('should return 0 if input is null', () => {
        const result = cs1.absolute(null);
        expect(result).toBe(0);
    });
})

describe('AreTwoNumbersTheSame', () => {
    // True ----------------------------------------------------------------------------------
    it('Should return true if the two numbers are identical', () => {
        const result = cs1.areTwoNumbersTheSame(3, 3);
        expect(result).toBe(true);
    });
    it('Should return true if the two numbers are identical', () => {
        const result = cs1.areTwoNumbersTheSame(1000, 1000);
        expect(result).toBe(true);
    });
    it('Should return true if the two numbers are identical', () => {
        const result = cs1.areTwoNumbersTheSame(-54, -54);
        expect(result).toBe(true);
    });
    it('Should return true if the two numbers are identical', () => {
        const result = cs1.areTwoNumbersTheSame(92, 92);
        expect(result).toBe(true);
    });

    // False ----------------------------------------------------------------------------------
    it('Should return false if the two numbers are not identical', () => {
        const result = cs1.areTwoNumbersTheSame(1, 3);
        expect(result).toBe(false);
    });
    it('Should return false if the two numbers are not identical', () => {
        const result = cs1.areTwoNumbersTheSame(32, -32);
        expect(result).toBe(false);
    });
    it('Should return false if the two numbers are not identical', () => {
        const result = cs1.areTwoNumbersTheSame(479, 100);
        expect(result).toBe(false);
    });
    it('Should return false if the two numbers are not identical', () => {
        const result = cs1.areTwoNumbersTheSame(84, 0);
        expect(result).toBe(false);
    });
})

describe('GetSmallestNumber', () => {
    it('Should return the smallest of the two given numbers', () => {
        const result = cs1.getSmallestNumber( -100, 100);
        expect(result).toBe(-100);
    });
    it('Should return the smallest of the two given numbers', () => {
        const result = cs1.getSmallestNumber( -100, -101);
        expect(result).toBe(-101);
    });
    it('Should return the smallest of the two given numbers', () => {
        const result = cs1.getSmallestNumber( 0, 5);
        expect(result).toBe(0);
    });
    it('Should return the smallest of the two given numbers', () => {
        const result = cs1.getSmallestNumber( 900, 1000);
        expect(result).toBe(900);
    });
    it('Should return the smallest of the two given numbers', () => {
        const result = cs1.getSmallestNumber( 204, -200);
        expect(result).toBe(-200);
    });
})

describe('Subtract', () => {
    it('Should return the result of subtracting the subtrahend from the minuend', () => {
        const result = cs1.subtract(10, 4);
        expect(result).toBe(6);
    });
    it('Should return the result of subtracting the subtrahend from the minuend', () => {
        const result = cs1.subtract(100, 0);
        expect(result).toBe(0);
    });
    it('Should return the result of subtracting the subtrahend from the minuend', () => {
        const result = cs1.subtract(-432, -32);
        expect(result).toBe(-400);
    });
    it('Should return the result of subtracting the subtrahend from the minuend', () => {
        const result = cs1.subtract(-12, 4);
        expect(result).toBe(-16);
    });
    it('Should return the result of subtracting the subtrahend from the minuend', () => {
        const result = cs1.subtract(0, 5);
        expect(result).toBe(-5);
    });
    it('Should return the result of subtracting the subtrahend from the minuend', () => {
        const result = cs1.subtract(1000, 1000);
        expect(result).toBe(0);
    });
})

describe('Add', () => {
    it('Should return the sum of the two given numbers', () => {
        const result = cs1.add(100, 100);
        expect(result).toBe(200);
    });
    it('Should return the sum of the two given numbers', () => {
        const result = cs1.add(10000, 10000);
        expect(result).toBe(20000);
    });
    it('Should return the sum of the two given numbers', () => {
        const result = cs1.add(-10, -10);
        expect(result).toBe(-20);
    });
    it('Should return the sum of the two given numbers', () => {
        const result = cs1.add(-23, 0);
        expect(result).toBe(-23);
    });
    it('Should return the sum of the two given numbers', () => {
        const result = cs1.add(0, -104332);
        expect(result).toBe(-104332);
    });
    it('Should return the sum of the two given numbers', () => {
        const result = cs1.add(0, 0);
        expect(result).toBe(0);
    });
})

describe('Multiply', () => {
    it('Should return the product of multiplying the two given numbers', () => {
        const result = cs1.multiply(100, 1);
        expect(result).toBe(100);
    });
    it('Should return the product of multiplying the two given numbers', () => {
        const result = cs1.multiply(0, 8);
        expect(result).toBe(0);
    });
    it('Should return the product of multiplying the two given numbers', () => {
        const result = cs1.multiply(-100, 8);
        expect(result).toBe(-800);
    });
    it('Should return the product of multiplying the two given numbers', () => {
        const result = cs1.multiply(-12, -12);
        expect(result).toBe(-144);
    });
    it('Should return the product of multiplying the two given numbers', () => {
        const result = cs1.multiply(10000, 10000);
        expect(result).toBe(100000000);
    });
    it('Should return the product of multiplying the two given numbers', () => {
        const result = cs1.multiply(0, 0);
        expect(result).toBe(0);
    });    
})

describe('GetGreeting', () => {
    it('Should return the greeting containing the given name', () => {
        const result = cs1.getGreeting('Anakin');
        expect(result).toBe('Hello, Anakin!');
    });
    it('Should return the greeting containing the given name', () => {
        const result = cs1.getGreeting('Luke');
        expect(result).toBe('Hello, Luke!');
    });
    it('Should return the greeting containing the given name', () => {
        const result = cs1.getGreeting('Leia');
        expect(result).toBe('Hello, Leia!');
    });
    it('Should return the greeting containing the given name', () => {
        const result = cs1.getGreeting('Shmi');
        expect(result).toBe('Hello, Shmi!');
    });
    it('Should return a simple greeting if no name is given', () => {
        const result = cs1.getGreeting('');
        expect(result).toBe('Hello!');
    });  
})

describe('GetHey', () => {
    it('Should return the phrase: HEY!', () => {
        const result = cs1.getHey();
        expect(result).toBe('HEY!');
    })
})