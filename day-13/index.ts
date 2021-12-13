import run from "../utils/run";
import { parseInput, fold, countDots, getVisualMap } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const { dots, foldInstructions } = parseInput(input);
  const afterFirstFold = fold(dots, foldInstructions[0]);
  const dotCount = countDots(afterFirstFold);

  resolve(dotCount);
});
