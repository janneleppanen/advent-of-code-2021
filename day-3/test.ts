import { parseDiagnosticReport, bin2dec } from "./helpers";

const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

describe("Day 3", () => {
  test("Part 1", () => {
    const { gammaRate, epsilonRate } = parseDiagnosticReport(input);
    const powerConsumption = bin2dec(gammaRate) * bin2dec(epsilonRate);
    expect(gammaRate).toBe("10110");
    expect(epsilonRate).toBe("01001");
    expect(powerConsumption).toBe(198);
  });
});
