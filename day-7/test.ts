import {
  parsePositions,
  calculateOptimalSpot,
  withSimpleFuelConsumption,
  withAccurateFuelConsumption,
} from "./helpers";

const input = `16,1,2,0,4,2,7,1,2,14`;

describe("Day 7", () => {
  test("Part 1", () => {
    const positions = parsePositions(input);
    const optimalSpot = calculateOptimalSpot(
      positions,
      withSimpleFuelConsumption
    );

    expect(optimalSpot.fuelConsumption).toBe(37);
  });

  test("Part 2", () => {
    const positions = parsePositions(input);
    const optimalSpot = calculateOptimalSpot(
      positions,
      withAccurateFuelConsumption
    );

    expect(optimalSpot.fuelConsumption).toBe(168);
  });
});
