import run from "../utils/run";
import { parseHeightMap, getLowPoints, calculateRiskLevel } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const heightMap = parseHeightMap(input);
  const lowPoints = getLowPoints(heightMap);
  const riskLevel = calculateRiskLevel(lowPoints);

  resolve(riskLevel);
});
