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
  resolve(bestResult.score);

  const worstResult = getWorstResult(bingoResults);
  resolve(worstResult.score);
});
