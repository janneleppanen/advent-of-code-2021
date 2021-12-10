import run from "../utils/run";
import {
  parseLines,
  validateLine,
  LineStatus,
  getErrorScore,
  getAutoCompleteScore,
} from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const lines = parseLines(input);
  const validatedLineReports = lines.map(validateLine);
  const corruptedLineReports = validatedLineReports.filter(
    (lineReport) => lineReport.status === LineStatus.Corrupted
  );
  const totalErrorScore = corruptedLineReports.reduce(
    (sum, lineReport) => sum + getErrorScore(lineReport),
    0
  );

  resolve(totalErrorScore);

  const incompleteLineReports = validatedLineReports.filter(
    (lineReport) => lineReport.status === LineStatus.Incomplete
  );

  const autoCompleteScores = incompleteLineReports
    .map(getAutoCompleteScore)
    .sort((a, b) => a - b);

  const scoreInMiddle =
    autoCompleteScores[Math.floor(autoCompleteScores.length / 2)];

  resolve(scoreInMiddle);
});
