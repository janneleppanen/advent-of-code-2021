import run from "../utils/run";
import { parsePaths, findRoutes, Rules } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const paths = parsePaths(input);

  const routes = findRoutes(paths, Rules.canVisitSameSmallCaveOnlyOnce);
  resolve(routes.length);

  const routes2 = findRoutes(paths, Rules.canRevisitAnySmallCaveOnlyOnce);
  resolve(routes2.length);
});
