import {
  parseHeightMap,
  getLowPoints,
  calculateRiskLevel,
  getBasins,
  sortBasinsBySize,
} from "./helpers";

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

  test("Part 2", () => {
    const heightMap = parseHeightMap(input);
    const basins = getBasins(heightMap);
    const sortedBasins = sortBasinsBySize(basins);
    const [basin1, basin2, basin3] = sortedBasins;

    expect(basin1.length * basin2.length * basin3.length).toBe(1134);
  });
});
