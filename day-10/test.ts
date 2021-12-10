import {
  parseLines,
  validateLine,
  LineStatus,
  getErrorScore,
  getAutoCompleteScore,
} from "./helpers";

const input = `[({(<(())[]>[[{[]{<()<>>
  [(()[<>])]({[<{<<[]>>(
  {([(<{}[<>[]}>{[]{[(<()>
  (((({<>}<{<{<>}{[]{[]{}
  [[<[([]))<([[{}[[()]]]
  [{[{({}]{}}([{[{{{}}([]
  {<[[]]>}<{[{[{[]{()[[[]
  [<(<(<(<{}))><([]([]()
  <{([([[(<>()){}]>(<<{{
  <{([{{}}[<[[[<>{}]]]>[]]`;

describe("Day 10", () => {
  test("Part 1", () => {
    const lines = parseLines(input);
    const validatedLineReports = lines.map(validateLine);
    const corruptedLineReports = validatedLineReports.filter(
      (lineReport) => lineReport.status === LineStatus.Corrupted
    );
    const totalErrorScore = corruptedLineReports.reduce(
      (sum, lineReport) => sum + getErrorScore(lineReport),
      0
    );

    expect(totalErrorScore).toBe(26397);
  });

  test("Part 2", () => {
    const lines = parseLines(input);
    const validatedLineReports = lines.map(validateLine);
    const incompleteLineReports = validatedLineReports.filter(
      (lineReport) => lineReport.status === LineStatus.Incomplete
    );

    const autoCompleteScores = incompleteLineReports
      .map(getAutoCompleteScore)
      .sort((a, b) => a - b);

    const scoreInMiddle =
      autoCompleteScores[Math.floor(autoCompleteScores.length / 2)];

    expect(scoreInMiddle).toBe(288957);
  });
});
