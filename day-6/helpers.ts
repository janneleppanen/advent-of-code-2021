const parseFishTimers = (input: string) => input.split(",").map(Number);

const simulateDays = (fishesAtStart: number[], days: number) => {
  let fishes: number[] = Array(9).fill(0);

  fishesAtStart.forEach((fish) => {
    fishes[fish]++;
  });

  for (let i = 0; i < days; i++) {
    const newFishes: number[] = Array(9).fill(0);

    Object.keys(fishes).forEach((key) => {
      const fishTimer = Number(key);

      if (fishTimer > 0) {
        newFishes[fishTimer - 1] += fishes[fishTimer];
      }
      if (fishTimer === 0) {
        newFishes[6] += fishes[fishTimer];
        newFishes[8] += fishes[fishTimer];
      }
    });

    fishes = newFishes;
  }

  return fishes;
};

const countFishes = (fishes: number[]) => {
  let total = 0;

  fishes.forEach((fishesAtTime) => {
    total += fishesAtTime;
  });

  return total;
};

export { parseFishTimers, simulateDays, countFishes };
