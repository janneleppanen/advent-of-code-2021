import run from "../utils/run";
import { getDepthIncreases } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const depthMeasures = input.split("\n").map(Number);
  const depthIncreases = getDepthIncreases(depthMeasures);

  resolve(depthIncreases);
});
