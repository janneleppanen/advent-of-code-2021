import run from "../utils/run";
import {
  parseLines,
  validateLine,
  LineStatus,
  getErrorPoints,
} from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const lines = parseLines(input);
  const validatedLineReports = lines.map(validateLine);
  const corruptedLineReports = validatedLineReports.filter(
    (lineReport) => lineReport.status === LineStatus.Corrupted
  );
  const errorPoints = corruptedLineReports.reduce(
    (sum, lineReport) => sum + getErrorPoints(lineReport),
    0
  );

  resolve(errorPoints);
});
