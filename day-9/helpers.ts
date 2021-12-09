type Basin = Coord[];

type Coord = {
  x: number;
  y: number;
  value: number;
};

const parseHeightMap = (input: string) => {
  return input.split("\n").map((line) => line.split("").map(Number));
};

const getLowPoints = (heightMap: number[][]) => {
  const lowPoints: number[] = [];

  for (let y = 0; y < heightMap.length; y++) {
    for (let x = 0; x < heightMap[y].length; x++) {
      const currentPoint = heightMap[y][x];
      const left = x === 0 ? 9 : heightMap[y][x - 1];
      const right = x === heightMap[y].length - 1 ? 9 : heightMap[y][x + 1];
      const top = y === 0 ? 9 : heightMap[y - 1][x];
      const bottom = y === heightMap.length - 1 ? 9 : heightMap[y + 1][x];

      const isLowestPoint = [left, right, top, bottom].every(
        (point) => point > currentPoint
      );

      if (isLowestPoint) {
        lowPoints.push(currentPoint);
      }
    }
  }

  return lowPoints;
};

const calculateRiskLevel = (lowPoints: number[]) => {
  return lowPoints.reduce((acc, curr) => acc + curr + 1, 0);
};

const isPointInBasin = (point: Coord, basin: Basin) => {
  return basin.some((p) => p.x === point.x && p.y === point.y);
};

const buildBasin = (
  heightMap: number[][],
  currentPoint: Coord,
  currentBasin: Basin
) => {
  if (isPointInBasin(currentPoint, currentBasin)) {
    return currentBasin;
  }

  let newBasin = [...currentBasin, currentPoint];
  const { x, y } = currentPoint;

  const left = x === 0 ? null : { x: x - 1, y: y, value: heightMap[y][x - 1] };
  const right =
    x === heightMap[y].length - 1
      ? null
      : { x: x + 1, y: y, value: heightMap[y][x + 1] };
  const top = y === 0 ? null : { x: x, y: y - 1, value: heightMap[y - 1][x] };
  const bottom =
    y === heightMap.length - 1
      ? null
      : { x: x, y: y + 1, value: heightMap[y + 1][x] };

  if (left && left.value !== 9) {
    newBasin = [...buildBasin(heightMap, left, newBasin)];
  }

  if (right && right.value !== 9) {
    newBasin = [...buildBasin(heightMap, right, newBasin)];
  }

  if (top && top.value !== 9) {
    newBasin = [...buildBasin(heightMap, top, newBasin)];
  }

  if (bottom && bottom.value !== 9) {
    newBasin = [...buildBasin(heightMap, bottom, newBasin)];
  }

  return newBasin;
};

const getBasins = (heightMap: number[][]) => {
  const basins: Basin[] = [];

  for (let y = 0; y < heightMap.length; y++) {
    for (let x = 0; x < heightMap[y].length; x++) {
      const value = heightMap[y][x];
      const currentPoint: Coord = { x, y, value };

      const isAlreadyInBasin = basins.some((basin) =>
        isPointInBasin(currentPoint, basin)
      );
      if (isAlreadyInBasin || currentPoint.value === 9) {
        continue;
      }

      const basin = buildBasin(heightMap, currentPoint, []);

      basins.push(basin);
    }
  }

  return basins;
};

const sortBasinsBySize = (basins: Basin[]) => {
  return basins.sort((a, b) => b.length - a.length);
};

export {
  parseHeightMap,
  getLowPoints,
  calculateRiskLevel,
  getBasins,
  sortBasinsBySize,
};
