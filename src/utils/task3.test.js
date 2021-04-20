import isOdd from './task3';

it('task 3: check if number is odd', () => {
    expect(isOdd(123)).toBe(true);
    expect(isOdd(1)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(43298)).toBe(false);
});
