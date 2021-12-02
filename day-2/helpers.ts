type Move = {
  horizontal: number;
  depth: number;
};

const parseMoves = (data: string): Move[] => {
  const moves = data.split("\n").map((row) => {
    const [direction, value] = row.split(" ");

    switch (direction) {
      case "forward":
        return { depth: 0, horizontal: parseInt(value) };
      case "down":
        return { depth: parseInt(value), horizontal: 0 };
      case "up":
        return { depth: -parseInt(value), horizontal: 0 };
    }
  });

  return moves;
};

const moveSubmarine = (moves: Move[]) => {
  const position = { depth: 0, horizontal: 0 };

  moves.forEach((move) => {
    position.depth += move.depth;
    position.horizontal += move.horizontal;
  });

  return position;
};

export { parseMoves, moveSubmarine };
