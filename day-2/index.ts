import run from "../utils/run";
import { parseMoves, moveSubmarine } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const moves = parseMoves(input);
  const { depth, horizontal } = moveSubmarine(moves);

  resolve(depth * horizontal);
});
