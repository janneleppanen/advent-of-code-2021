import run from "../utils/run";
import { parsePositions, calculateOptimalSpot } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const positions = parsePositions(input);
  const optimalSpot = calculateOptimalSpot(positions);

  resolve(optimalSpot.fuelNeeded);
});
