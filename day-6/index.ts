import run from "../utils/run";
import { parseFishTimers, simulateDays } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const fishesAtStart = parseFishTimers(input);
  const fishesLater = simulateDays(fishesAtStart, 80);

  resolve(fishesLater.length);
});
