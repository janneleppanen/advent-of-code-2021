import { getDepthIncreases } from "./helpers";

const data = `199
200
208
210
200
207
240
269
260
263
`;

describe("Day 1", () => {
  test("Part 1", () => {
    const depthMeasures = data.split("\n").map(Number);
    expect(getDepthIncreases(depthMeasures)).toBe(7);
  });
});
