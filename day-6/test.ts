import { parseFishTimers, simulateDays } from "./helpers";

const input = `3,4,3,1,2`;

describe("Day <day>", () => {
  test("Part 1", () => {
    const fishesAtStart = parseFishTimers(input);
    const fishesLater = simulateDays(fishesAtStart, 80);

    expect(fishesLater.length).toBe(5934);
  });
});
