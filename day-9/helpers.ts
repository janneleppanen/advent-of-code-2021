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

export { parseHeightMap, getLowPoints, calculateRiskLevel };
