const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

heroes.sort(function (item1, item2) {
    if (item1.health < item2.health) {
      return 1;
    } else if (item1.health > item2.health) {
            return -1;
        } else {
            return 0;
        }
  });

export default heroes