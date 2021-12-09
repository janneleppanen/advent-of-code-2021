import { parseHeightMap, getLowPoints, calculateRiskLevel } from "./helpers";

const input = `2199943210
3987894921
9856789892
8767896789
9899965678`;

describe("Day 9", () => {
  test("Part 1", () => {
    const heightMap = parseHeightMap(input);
    const lowPoints = getLowPoints(heightMap);
    const riskLevel = calculateRiskLevel(lowPoints);

    expect(riskLevel).toBe(15);
  });
});
