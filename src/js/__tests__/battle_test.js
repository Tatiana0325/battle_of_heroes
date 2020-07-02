import heroes from '../battle';

test('sorted array heroes', () => {
    expect(heroes).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]);
});