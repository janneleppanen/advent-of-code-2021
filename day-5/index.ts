import run from "../utils/run";
import {
  parseLines,
  getNonDiagonalLines,
  getLineMap,
  getDangerousPoints,
} from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const lines = parseLines(input);
  const basicLines = getNonDiagonalLines(lines);
  const lineMap = getLineMap(basicLines);
  const dangerousPoints = getDangerousPoints(lineMap, 2);

  resolve(dangerousPoints.length);
});
