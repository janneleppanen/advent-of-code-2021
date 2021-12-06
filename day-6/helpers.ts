const parseFishTimers = (input: string) => input.split(",").map(Number);

const simulateDays = (fishesAtStart: number[], days: number) => {
  let fishes = [...fishesAtStart];

  for (let i = 0; i < days; i++) {
    let fishesToAdd = 0;

    fishes = fishes.map((fish) => {
      fish--;
      if (fish === -1) {
        fish = 6;
        fishesToAdd++;
      }

      return fish;
    });

    for (let j = 0; j < fishesToAdd; j++) {
      fishes.push(8);
    }
  }

  return fishes;
};

export { parseFishTimers, simulateDays };
