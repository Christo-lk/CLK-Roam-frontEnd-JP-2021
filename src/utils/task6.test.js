import identicalFilter from './task6';

it('task 6: filter and return strings with identical characters only', () => {
    expect(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz'])).toEqual([
        'aaaaaa',
        'd',
        'eeee',
    ]);

    expect(identicalFilter(['88', '999', '22', '545', '133'])).toEqual([
        '88',
        '999',
        '22',
    ]);

    expect(identicalFilter(['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo'])).toEqual(
        []
    );
});
