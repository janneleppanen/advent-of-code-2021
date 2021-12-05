type Line = {
  start: {
    x: number;
    y: number;
  };
  end: {
    x: number;
    y: number;
  };
};

const parseLines = (input: string): Line[] => {
  return input.split("\n").map((row) => {
    const points = row.split(" -> ").map((point) => point.split(","));

    return {
      start: {
        x: parseInt(points[0][0]),
        y: parseInt(points[0][1]),
      },
      end: {
        x: parseInt(points[1][0]),
        y: parseInt(points[1][1]),
      },
    };
  });
};

const getNonDiagonalLines = (lines: Line[]) => {
  return lines.filter(({ start, end }) => {
    return start.x === end.x || start.y === end.y;
  });
};

const getLineMap = (lines: Line[]) => {
  const lineMap: object = {};

  lines.forEach(({ start, end }) => {
    const width = Math.abs(start.x - end.x);
    const height = Math.abs(start.y - end.y);
    const length = Math.max(width, height);
    const dx = (end.x - start.x) / length;
    const dy = (end.y - start.y) / length;

    let tick = 0;

    while (length >= tick) {
      const x = Math.floor(start.x + dx * tick);
      const y = Math.floor(start.y + dy * tick);

      if (!lineMap[`${x}-${y}`]) {
        lineMap[`${x}-${y}`] = 0;
      }

      lineMap[`${x}-${y}`]++;
      tick++;
    }
  });

  return lineMap;
};

const getDangerousPoints = (lineMap: object, threshold: number) => {
  const dangerousPoints: object[] = [];

  Object.keys(lineMap).forEach((key: string) => {
    const value = lineMap[key];

    if (value >= threshold) {
      dangerousPoints.push({
        x: parseInt(key.toString().split("-")[0]),
        y: parseInt(key.toString().split("-")[1]),
        value,
      });
    }
  });

  return dangerousPoints;
};

const getDrawnMap = (lineMap: object, width = 10, height = 10) => {
  let map = "";

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      map += lineMap[`${x}-${y}`] ? lineMap[`${x}-${y}`] : ".";
    }

    if (y + 1 < height) map += "\n";
  }

  return map;
};

export {
  parseLines,
  getNonDiagonalLines,
  getLineMap,
  getDangerousPoints,
  getDrawnMap,
};
