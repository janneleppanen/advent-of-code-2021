import { parsePositions, calculateOptimalSpot } from "./helpers";

const input = `16,1,2,0,4,2,7,1,2,14`;

describe("Day 7", () => {
  test("Part 1", () => {
    const positions = parsePositions(input);
    const optimalSpot = calculateOptimalSpot(positions);

    expect(optimalSpot.fuelNeeded).toBe(37);
  });
});
