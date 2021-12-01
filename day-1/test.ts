import { getDepthIncreases, parseDepthMeasures } from "./helpers";

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
  test.only("Part 1", () => {
    const depthMeasures = parseDepthMeasures(data, 1);

    expect(getDepthIncreases(depthMeasures)).toBe(7);
  });

  test.only("Part 2", () => {
    const depthMeasures = parseDepthMeasures(data, 3);

    expect(getDepthIncreases(depthMeasures)).toBe(5);
  });
});
