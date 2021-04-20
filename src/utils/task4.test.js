import triangleArea from './task4';

it('task4: get triangle area from three sides', () => {
    expect(triangleArea(10, 10, 16)).toBeCloseTo(48);
    expect(triangleArea(12, 12, 21)).toBeCloseTo(61);
    expect(triangleArea(8.944, 5, 5)).toBeCloseTo(10);
    expect(triangleArea(10, 10, 10)).toBeCloseTo(43.301);
});
