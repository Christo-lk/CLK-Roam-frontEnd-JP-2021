import getDistance from './task5';

it('task 5: get cartesian distance between two points', () => {
    expect(getDistance({ x: -2, y: 1 }, { x: 4, y: 3 })).toEqual(6.325);
    expect(getDistance({ x: 0, y: 0 }, { x: 1, y: 1 })).toEqual(1.414);
    expect(getDistance({ x: 10, y: -5 }, { x: 8, y: 16 })).toEqual(21.095);
});
