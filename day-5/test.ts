import {
  parseLines,
  getNonDiagonalLines,
  getLineMap,
  getDangerousPoints,
  getDrawnMap,
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

const drawnMap1 = `.......1..
..1....1..
..1....1..
.......1..
.112111211
..........
..........
..........
..........
222111....`;

const drawnMap2 = `1.1....11.
.111...2..
..2.1.111.
...1.2.2..
.112313211
...1.2....
..1...1...
.1.....1..
1.......1.
222111....`;

describe("Day 5", () => {
  test("Part 1", () => {
    const lines = parseLines(input);
    const basicLines = getNonDiagonalLines(lines);
    const lineMap = getLineMap(basicLines);
    const dangerousPoints = getDangerousPoints(lineMap, 2);

    expect(getDrawnMap(lineMap)).toBe(drawnMap1);
    expect(dangerousPoints.length).toBe(5);
  });

  test("Part 2", () => {
    const lines = parseLines(input);
    const lineMap = getLineMap(lines);
    const dangerousPoints = getDangerousPoints(lineMap, 2);

    expect(getDrawnMap(lineMap)).toBe(drawnMap2);
    expect(dangerousPoints.length).toBe(12);
  });
});
