import run from "../utils/run";
import { parseFishTimers, simulateDays, countFishes } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const fishesAtStart = parseFishTimers(input);

  const fishMapAtDay80 = simulateDays(fishesAtStart, 80);
  const fishCountAtDay80 = countFishes(fishMapAtDay80);
  resolve(fishCountAtDay80);

  const fishMapAtDay256 = simulateDays(fishesAtStart, 256);
  const fishCountAtDay256 = countFishes(fishMapAtDay256);
  resolve(fishCountAtDay256);
});
