type Dot = {
  x: number;
  y: number;
};

type Fold = {
  direction: string;
  position: number;
};

const parseInput = (
  input: string
): { dots: Dot[]; foldInstructions: Fold[] } => {
  const [dotPart, foldPart] = input.split("\n\n");

  const dots = dotPart.split("\n").map((line) => {
    const [x, y] = line.split(",");

    return { x: parseInt(x), y: parseInt(y) };
  });

  const foldInstructions = foldPart.split("\n").map((line) => {
    const [, instructions] = line.split("fold along ");
    const [direction, position] = instructions.split("=");
    return {
      direction,
      position: parseInt(position),
    };
  });

  return {
    dots,
    foldInstructions,
  };
};

const getVisualMap = (dots: Dot[]) => {
  let map = "";
  const height = Math.max(...dots.map((dot) => dot.y)) + 1;
  const width = Math.max(...dots.map((dot) => dot.x)) + 1;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dot = dots.find((dot) => dot.x === x && dot.y === y);
      if (dot) {
        map += "#";
      } else {
        map += ".";
      }
    }
    if (y !== height - 1) {
      map += "\n";
    }
  }

  return map;
};

const fold = (dots: Dot[], fold: Fold) => {
  return dots.map((dot) => {
    if (dot[fold.direction] > fold.position) {
      const dist = dot[fold.direction] - fold.position;

      return {
        ...dot,
        [fold.direction]: dot[fold.direction] - dist * 2,
      };
    }
    return dot;
  });
};

const countDots = (dots: Dot[]) => {
  return dots.reduce((all, next) => {
    const coords = `${next.x},${next.y}`;
    if (all.includes(coords)) {
      return all;
    }

    return [...all, coords];
  }, []).length;
};

export { parseInput, getVisualMap, fold, countDots };
