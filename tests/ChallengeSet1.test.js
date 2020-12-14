const cs1 = require('../ChallengeSet1');

describe('absolute', () => {
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
