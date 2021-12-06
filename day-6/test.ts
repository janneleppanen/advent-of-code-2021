import { parseFishTimers, simulateDays, countFishes } from "./helpers";

const input = `3,4,3,1,2`;

describe("Day 6", () => {
  test("Part 1", () => {
    const fishesAtStart = parseFishTimers(input);
    const fishMap = simulateDays(fishesAtStart, 80);
    const fishCount = countFishes(fishMap);

    expect(fishCount).toBe(5934);
  });

  test("Part 1", () => {
    const fishesAtStart = parseFishTimers(input);
    const fishMap = simulateDays(fishesAtStart, 256);
    const fishCount = countFishes(fishMap);

    expect(fishCount).toBe(26984457539);
  });
});
