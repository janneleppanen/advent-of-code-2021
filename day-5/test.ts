import {
  parseLines,
  getNonDiagonalLines,
  getLineMap,
  getDangerousPoints,
} from "./helpers";

const input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

describe("Day 5", () => {
  test("Part 1", () => {
    const lines = parseLines(input);
    const basicLines = getNonDiagonalLines(lines);
    const lineMap = getLineMap(basicLines);
    const dangerousPoints = getDangerousPoints(lineMap, 2);

    expect(dangerousPoints.length).toBe(5);
  });
});
