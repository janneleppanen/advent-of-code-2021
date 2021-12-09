import run from "../utils/run";
import {
  parseHeightMap,
  getLowPoints,
  calculateRiskLevel,
  getBasins,
  sortBasinsBySize,
} from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const heightMap = parseHeightMap(input);
  const lowPoints = getLowPoints(heightMap);
  const riskLevel = calculateRiskLevel(lowPoints);

  resolve(riskLevel);

  const basins = getBasins(heightMap);
  const sortedBasins = sortBasinsBySize(basins);
  const [basin1, basin2, basin3] = sortedBasins;

  resolve(basin1.length * basin2.length * basin3.length);
});
