import run from "../utils/run";
import { getDepthIncreases, parseDepthMeasures } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const depthMeasures1 = parseDepthMeasures(input);
  const depthIncreases1 = getDepthIncreases(depthMeasures1);

  resolve(depthIncreases1);

  const depthMeasures2 = parseDepthMeasures(input, 3);
  const depthIncreases2 = getDepthIncreases(depthMeasures2);

  resolve(depthIncreases2);
});
