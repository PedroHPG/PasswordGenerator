import { passgen } from './passgen';

describe('passgen', () => {
    it('returns "Invalid input" if length passed is 0', () => {
        expect(passgen(0)).toBe("Invalid input");
    })
})