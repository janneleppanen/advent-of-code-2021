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
  const basicLineMap = getLineMap(basicLines);
  const dangerousPoints1 = getDangerousPoints(basicLineMap, 2);

  resolve(dangerousPoints1.length);

  const lineMap = getLineMap(lines);
  const dangerousPoints2 = getDangerousPoints(lineMap, 2);

  resolve(dangerousPoints2.length);
});
