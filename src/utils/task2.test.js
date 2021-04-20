import divisibleBy10 from './task2';

it('task 2: check if numbers are divisible by 10', () => {
    expect(divisibleBy10(100)).toBe(true);
    expect(divisibleBy10(20)).toBe(true);
    expect(divisibleBy10(1)).toBe(false);
    expect(divisibleBy10(155)).toBe(false);
    expect(divisibleBy10(220.0)).toBe(true);
    expect(divisibleBy10(240.5)).toBe(false);
});
