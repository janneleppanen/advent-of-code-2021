import run from "../utils/run";
import { parsePaths, findRoutes } from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const paths = parsePaths(input);
  const routes = findRoutes(paths);
  resolve(routes.length);
});
