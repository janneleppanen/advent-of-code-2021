type Method = (positions: number[], spot: number) => number;

const parsePositions = (input: string) => input.split(",").map(Number);

const calculateOptimalSpot = (
  positions: number[],
  fuelCosumingMethod: Method
) => {
  const max = Math.max(...positions);
  const min = Math.min(...positions);
  const result = {
    fuelConsumption: null,
    spot: null,
  };

  for (let i = min; i <= max; i++) {
    const fuelConsumption = fuelCosumingMethod(positions, i);

    if (
      result.fuelConsumption === null ||
      fuelConsumption < result.fuelConsumption
    ) {
      result.fuelConsumption = fuelConsumption;
      result.spot = i;
    }
  }

  return result;
};

const withSimpleFuelConsumption = (positions: number[], spot: number) => {
  return positions.reduce((total, position) => {
    return total + Math.abs(position - spot);
  }, 0);
};

const withAccurateFuelConsumption = (positions: number[], spot: number) => {
  return positions.reduce((total, position) => {
    const distance = Math.abs(position - spot);
    const fuelConsumption = (distance * (distance + 1)) / 2;

    return total + fuelConsumption;
  }, 0);
};

export {
  parsePositions,
  calculateOptimalSpot,
  withSimpleFuelConsumption,
  withAccurateFuelConsumption,
};
