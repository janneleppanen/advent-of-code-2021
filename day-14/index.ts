import run from "../utils/run";
import { parseInput, process, getPolymerElements } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  let { template: polymer, pairInsertions } = parseInput(input);

  for (let i = 0; i < 10; i++) {
    polymer = process(polymer, pairInsertions);
  }

  const elements = getPolymerElements(polymer);
  const mostCommonElementCount = Math.max(...Object.values(elements));
  const leastCommonElementCount = Math.min(...Object.values(elements));

  resolve(mostCommonElementCount - leastCommonElementCount);
});
