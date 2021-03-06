import { parseMoves, moveSubmarine, moveSubmarineWithManual } from "./helpers";

const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

describe("Day 2", () => {
  test("Part 1", () => {
    const moves = parseMoves(input);
    const { depth, horizontal } = moveSubmarine(moves);

    expect(depth * horizontal).toBe(150);
  });

  test("Part 2", () => {
    const moves = parseMoves(input);
    const { depth, horizontal } = moveSubmarineWithManual(moves);

    expect(depth * horizontal).toBe(900);
  });
});
