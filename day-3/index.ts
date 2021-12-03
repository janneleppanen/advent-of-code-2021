import run from "../utils/run";
import { parseDiagnosticReport, bin2dec } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const { gammaRate, epsilonRate } = parseDiagnosticReport(input);
  const powerConsumption = bin2dec(gammaRate) * bin2dec(epsilonRate);

  resolve(powerConsumption);
});
