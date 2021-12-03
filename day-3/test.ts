import {
  parseDiagnosticReport,
  getGammaRate,
  getEpsilonRate,
  getOxygenGeneratorRating,
  getCo2ScrubberRating,
  bin2dec,
} from "./helpers";

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
    const parsedReport = parseDiagnosticReport(input);
    const gammaRate = getGammaRate(parsedReport);
    const epsilonRate = getEpsilonRate(parsedReport);
    const powerConsumption = bin2dec(gammaRate) * bin2dec(epsilonRate);

    expect(gammaRate).toBe("10110");
    expect(epsilonRate).toBe("01001");
    expect(powerConsumption).toBe(198);
  });

  test("Part 2", () => {
    const parsedReport = parseDiagnosticReport(input);
    const oxygenGeneratorRating = getOxygenGeneratorRating(
      0,
      parsedReport,
      input
    );
    const co2ScrubberRating = getCo2ScrubberRating(0, parsedReport, input);
    const lifeSupportRating =
      bin2dec(oxygenGeneratorRating) * bin2dec(co2ScrubberRating);

    expect(oxygenGeneratorRating).toBe("10111");
    expect(co2ScrubberRating).toBe("01010");
    expect(lifeSupportRating).toBe(230);
  });
});
