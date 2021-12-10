import {
  parseLines,
  validateLine,
  LineStatus,
  getErrorPoints,
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
    const errorPoints = corruptedLineReports.reduce(
      (sum, lineReport) => sum + getErrorPoints(lineReport),
      0
    );

    expect(errorPoints).toBe(26397);
  });
});
