import run from "../utils/run";
import {
  parsePositions,
  calculateOptimalSpot,
  withSimpleFuelConsumption,
  withAccurateFuelConsumption,
} from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const positions = parsePositions(input);

  const optimalSpot1 = calculateOptimalSpot(
    positions,
    withSimpleFuelConsumption
  );
  resolve(optimalSpot1.fuelConsumption);

  const optimalSpot2 = calculateOptimalSpot(
    positions,
    withAccurateFuelConsumption
  );
  resolve(optimalSpot2.fuelConsumption);
});
