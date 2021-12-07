const parsePositions = (input: string) => input.split(",").map(Number);

const calculateOptimalSpot = (positions: number[]) => {
  const max = Math.max(...positions);
  const min = Math.min(...positions);
  const result = {
    fuelNeeded: null,
    spot: null,
  };

  for (let i = min; i <= max; i++) {
    const fuelNeeded = calculateNeededFuel(positions, i);

    if (result.fuelNeeded === null || fuelNeeded < result.fuelNeeded) {
      result.fuelNeeded = fuelNeeded;
      result.spot = i;
    }
  }

  return result;
};

const calculateNeededFuel = (positions: number[], spot: number) => {
  return positions.reduce((total, position) => {
    return total + Math.abs(position - spot);
  }, 0);
};

export { parsePositions, calculateOptimalSpot, calculateNeededFuel };
