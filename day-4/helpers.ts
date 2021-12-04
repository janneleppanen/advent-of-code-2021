type BingoResult = {
  isBingo: boolean;
  score: number;
  currentNumbers: number[];
  grid: number[][];
};

const getNumbers = (input: string) => {
  const firstRow = input.split("\n")[0];
  return firstRow.split(",").map(Number);
};

const getGrids = (input: string) => {
  const [, ...gridStrings] = input.split("\n\n");

  const grids = gridStrings.map((grid) => {
    return grid.split("\n").map((row) => {
      return row.trim().split(/\s+/).map(Number);
    });
  });

  return grids;
};

const getBingoResult = (
  grid: number[][],
  currentNumbers: number[],
  numbers: number[]
): BingoResult => {
  let isBingo = false;

  // horizontal
  grid.forEach((rowNumbers) => {
    if (isBingoLine(rowNumbers, currentNumbers)) {
      isBingo = true;
    }
  });

  // vertical
  for (var column = 0; column < grid[0].length; column++) {
    const columnNumbers = grid.map((row) => row[column]);

    if (isBingoLine(columnNumbers, currentNumbers)) {
      isBingo = true;
    }
  }

  if (currentNumbers.length === numbers.length || isBingo) {
    return {
      isBingo,
      score: getScore(grid, currentNumbers),
      currentNumbers,
      grid,
    };
  }

  return getBingoResult(
    grid,
    numbers.slice(0, currentNumbers.length + 1),
    numbers
  );
};

const isBingoLine = (lineNumbers: number[], bingoNumbers: number[]) => {
  return lineNumbers.every((number) => bingoNumbers.includes(number));
};

const getScore = (grid: number[][], currentNumbers: number[]) => {
  return (
    grid
      .reduce((acc, row) => [...acc, ...row], [])
      .filter((number) => !currentNumbers.includes(number))
      .reduce((points, number) => points + number, 0) *
    currentNumbers.reverse()[0]
  );
};

const getBestResult = (results: BingoResult[]) => {
  const leastCurrentNumbersCount = results.reduce(
    (numberCount, result) =>
      Math.min(result.currentNumbers.length, numberCount),
    10000
  );

  const drawResults = results.filter(
    (result) => result.currentNumbers.length === leastCurrentNumbersCount
  );

  const bestScore = drawResults.reduce(
    (score, result) => Math.max(score, result.score),
    0
  );

  return drawResults.find((result) => result.score === bestScore);
};

const getWorstResult = (results: BingoResult[]) => {
  const mostCurrentNumbersCount = results.reduce(
    (numberCount, result) =>
      Math.max(result.currentNumbers.length, numberCount),
    0
  );

  const drawResults = results.filter(
    (result) => result.currentNumbers.length === mostCurrentNumbersCount
  );

  const worstScore = drawResults.reduce(
    (score, result) => Math.min(score, result.score),
    100000000
  );

  return drawResults.find((result) => result.score === worstScore);
};

export { getNumbers, getGrids, getBingoResult, getBestResult, getWorstResult };
