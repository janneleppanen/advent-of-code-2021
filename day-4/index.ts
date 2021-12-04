import run from "../utils/run";
import {
  getNumbers,
  getGrids,
  getBingoResult,
  getBestResult,
  getWorstResult,
} from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const numbers = getNumbers(input);
  const grids = getGrids(input);
  const bingoResults = grids.map((grid) =>
    getBingoResult(grid, numbers.slice(0, grid.length), numbers)
  );

  const bestResult = getBestResult(bingoResults);
  const bestScore = bestResult.points * bestResult.currentNumbers.reverse()[0];
  resolve(bestScore);

  const worstResult = getWorstResult(bingoResults);
  const worstScore =
    worstResult.points * worstResult.currentNumbers.reverse()[0];
  resolve(worstScore);
});
