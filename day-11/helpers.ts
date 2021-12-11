type Octopus = {
  x: number;
  y: number;
  energy: number;
};

const parseOctopuses = (input: string): Octopus[] => {
  const grid = input.split("\n").map((line, y) =>
    line.split("").map((value, x) => {
      return {
        x,
        y,
        energy: parseInt(value),
      };
    })
  );

  return grid.flat();
};

const simulate = (octopuses: Octopus[], iterations: number = 1) => {
  let simulatedOctopuses: Octopus[] = [...octopuses];
  let flashCount = 0;

  for (let i = 0; i < iterations; i++) {
    // TODO: increase
    simulatedOctopuses = simulatedOctopuses.map((octopus) => {
      const newEnergy = octopus.energy + 1;

      return {
        ...octopus,
        energy: newEnergy,
      };
    });

    simulatedOctopuses = simulateFlashes(simulatedOctopuses);

    flashCount = simulatedOctopuses.reduce(
      (flashCount, octopus) =>
        octopus.energy === 0 ? flashCount + 1 : flashCount,
      flashCount
    );
  }

  return {
    octopuses: simulatedOctopuses,
    flashCount,
  };
};

const simulateUntilAllFlashes = (octopuses: Octopus[]) => {
  let simulatedOctopuses: Octopus[] = [...octopuses];
  let step = 0;
  let allFlaheshed = false;

  while (!allFlaheshed) {
    step++;
    const simulationResult = simulate(simulatedOctopuses);
    simulatedOctopuses = [...simulationResult.octopuses];

    allFlaheshed = simulatedOctopuses.every((octopus) => octopus.energy === 0);

    if (step % 100 === 0) {
      console.log(`Step: ${step}`);
    }
  }

  return {
    step,
    octopuses,
  };
};

const simulateFlashes = (octopuses: Octopus[]) => {
  let simulatedOctopuses: Octopus[] = [...octopuses];
  const flashableOctopuses = octopuses.filter((octopus) => octopus.energy > 9);

  if (flashableOctopuses.length === 0) {
    return simulatedOctopuses;
  }

  flashableOctopuses.forEach((currentOctopus) => {
    simulatedOctopuses = simulatedOctopuses.map((octopus) => {
      const distanceX = Math.abs(currentOctopus.x - octopus.x);
      const distanceY = Math.abs(currentOctopus.y - octopus.y);
      const isAdjacent =
        [0, 1].includes(distanceX) && [0, 1].includes(distanceY);
      const isCurrent = distanceX === 0 && distanceY === 0;
      const hasFlashedRecently = octopus.energy === 0;

      if (isCurrent) {
        return {
          ...octopus,
          energy: 0,
        };
      }

      return {
        ...octopus,
        energy:
          isAdjacent && !hasFlashedRecently
            ? octopus.energy + 1
            : octopus.energy,
      };
    });
  });

  return simulateFlashes(simulatedOctopuses);
};

const getOctopusMap = (octopuses: Octopus[]) => {
  let lastY = 0;

  return octopuses.reduce((map, octopus) => {
    if (octopus.y > lastY) {
      map += "\n";
      lastY = octopus.y;
    }

    return map + octopus.energy;
  }, "");
};

export { parseOctopuses, simulate, getOctopusMap, simulateUntilAllFlashes };
