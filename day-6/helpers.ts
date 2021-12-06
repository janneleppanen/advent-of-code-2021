const parseFishTimers = (input: string) => input.split(",").map(Number);

const simulateDays = (fishesAtStart: number[], days: number) => {
  let fishes = {};

  fishesAtStart.forEach((fish) => {
    if (!fishes[fish]) fishes[fish] = 0;

    fishes[fish]++;
  });

  for (let i = 0; i < days; i++) {
    const newFishes = {};

    Object.keys(fishes).forEach((key) => {
      const fishTimer = Number(key);

      if (fishTimer > 0) {
        if (!newFishes[fishTimer - 1]) newFishes[fishTimer - 1] = 0;

        newFishes[fishTimer - 1] += fishes[fishTimer];
      }
      if (fishTimer === 0) {
        if (!newFishes[6]) newFishes[6] = 0;
        if (!newFishes[8]) newFishes[8] = 0;

        newFishes[6] += fishes[fishTimer];
        newFishes[8] += fishes[fishTimer];
      }
    });

    fishes = newFishes;
  }

  return fishes;
};

const countFishes = (fishes: object) => {
  let total = 0;

  Object.keys(fishes).forEach((key) => {
    total += fishes[key];
  });

  return total;
};

export { parseFishTimers, simulateDays, countFishes };
