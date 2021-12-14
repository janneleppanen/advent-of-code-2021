import run from "../utils/run";
import { parseInput, process, getPolymerElements } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  let { template, pairMap, pairInsertions } = parseInput(input);

  for (let i = 0; i < 10; i++) {
    pairMap = process(pairMap, pairInsertions);
  }

  const elements1 = getPolymerElements(pairMap, template);
  const mostCommonElementCount1 = Math.max(...Object.values(elements1));
  const leastCommonElementCount1 = Math.min(...Object.values(elements1));

  resolve(mostCommonElementCount1 - leastCommonElementCount1);

  for (let i = 0; i < 30; i++) {
    pairMap = process(pairMap, pairInsertions);
  }

  const elements2 = getPolymerElements(pairMap, template);
  const mostCommonElementCount2 = Math.max(...Object.values(elements2));
  const leastCommonElementCount2 = Math.min(...Object.values(elements2));

  resolve(mostCommonElementCount2 - leastCommonElementCount2);
});
