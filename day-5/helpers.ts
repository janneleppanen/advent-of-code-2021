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
    let x = Math.min(start.x, end.x);
    let y = Math.min(start.y, end.y);
    let width = Math.abs(start.x - end.x);
    let height = Math.abs(start.y - end.y);
    let length = Math.max(width, height);

    while (length >= 0) {
      if (!lineMap[`${x}-${y}`]) {
        lineMap[`${x}-${y}`] = 0;
      }

      lineMap[`${x}-${y}`]++;

      if (width > 0) x++;
      if (height > 0) y++;
      length--;
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

const drawMap = (lineMap: object, width = 10, height = 10) => {
  let map = "";

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      map += lineMap[`${x}-${y}`] ? lineMap[`${x}-${y}`] : ".";
      map += " ";
    }
    map += "\n";
  }
};

export {
  parseLines,
  getNonDiagonalLines,
  getLineMap,
  getDangerousPoints,
  drawMap,
};
