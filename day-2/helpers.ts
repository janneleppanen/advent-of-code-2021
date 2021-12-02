type Move = {
  x: number;
  y: number;
};

const parseMoves = (data: string): Move[] => {
  const moves = data.split("\n").map((row) => {
    const [direction, value] = row.split(" ");

    switch (direction) {
      case "forward":
        return { y: 0, x: parseInt(value) };
      case "down":
        return { y: -parseInt(value), x: 0 };
      case "up":
        return { y: parseInt(value), x: 0 };
    }
  });

  return moves;
};

const moveSubmarine = (moves: Move[]) => {
  const position = { depth: 0, horizontal: 0 };

  moves.forEach((move) => {
    position.depth -= move.y;
    position.horizontal += move.x;
  });

  return position;
};

const moveSubmarineWithManual = (moves: Move[]) => {
  let position = { depth: 0, horizontal: 0 };
  let aim = 0;

  moves.forEach((move) => {
    aim -= move.y;

    position.depth += move.x * aim;
    position.horizontal += move.x;
  });

  return position;
};

export { parseMoves, moveSubmarine, moveSubmarineWithManual };
