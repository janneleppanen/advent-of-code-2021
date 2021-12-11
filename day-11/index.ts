import run from "../utils/run";
import { parseOctopuses, simulate } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const octopuses = parseOctopuses(input);
  const simulationResult = simulate(octopuses, 100);

  resolve(simulationResult.flashCount);
});
