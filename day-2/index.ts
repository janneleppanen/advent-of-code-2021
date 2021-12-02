import run from "../utils/run";
import { parseMoves, moveSubmarine, moveSubmarineWithManual } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const moves = parseMoves(input);
  const position1 = moveSubmarine(moves);

  resolve(position1.depth * position1.horizontal);

  const position2 = moveSubmarineWithManual(moves);

  resolve(position2.depth * position2.horizontal);
});
