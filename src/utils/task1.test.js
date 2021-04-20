import lessThan1000 from './task1';

it('task 1: check if numbers are less than 1000', () => {
    expect(lessThan1000(224, 154, 344)).toBe(true);
    expect(lessThan1000(250, 250, 250)).toBe(true);
    expect(lessThan1000(500, 500, 1)).toBe(false);
    expect(lessThan1000(1000, 100, 200)).toBe(false);
});
