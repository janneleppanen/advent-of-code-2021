import run from "../utils/run";
import { parseOctopuses, simulate, simulateUntilAllFlashes } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const octopuses = parseOctopuses(input);

  const simulationResult1 = simulate(octopuses, 100);
  resolve(simulationResult1.flashCount);

  const simulationResult2 = simulateUntilAllFlashes(octopuses);
  resolve(simulationResult2.step);
});
