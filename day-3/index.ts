import run from "../utils/run";
import {
  parseDiagnosticReport,
  bin2dec,
  getGammaRate,
  getEpsilonRate,
  getOxygenGeneratorRating,
  getCo2ScrubberRating,
} from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const parsedReport = parseDiagnosticReport(input);
  const gammaRate = getGammaRate(parsedReport);
  const epsilonRate = getEpsilonRate(parsedReport);
  const powerConsumption = bin2dec(gammaRate) * bin2dec(epsilonRate);

  resolve(powerConsumption);

  const oxygenGeneratorRating = getOxygenGeneratorRating(
    0,
    parsedReport,
    input
  );
  const co2ScrubberRating = getCo2ScrubberRating(0, parsedReport, input);
  const lifeSupportRating =
    bin2dec(oxygenGeneratorRating) * bin2dec(co2ScrubberRating);

  resolve(lifeSupportRating);
});
