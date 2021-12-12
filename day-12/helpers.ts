type Route = string[];

type Path = {
  start: string;
  end: string;
};

const parsePaths = (input: string): Path[] => {
  const paths = input.split("\n");

  return paths.map((path) => {
    const [start, end] = path.split("-");
    return { start, end };
  });
};

const findRoutes = (
  paths: Path[],
  currentLocation = "start",
  currentRoute = [],
  validRoutes = []
): Route[] => {
  const isSmallCave = currentLocation.toLocaleLowerCase() === currentLocation;
  const isPathAlreadyIncurrentRoute = currentRoute.some(
    (location) => location === currentLocation
  );

  if (isSmallCave && isPathAlreadyIncurrentRoute) {
    return; // Dead end
  }

  if (currentLocation === "end") {
    validRoutes.push([...currentRoute, currentLocation]);
    return;
  }

  let branches = paths.filter(
    (path) => path.start === currentLocation || path.end === currentLocation
  );

  branches.map((branch) => {
    const nextLocation =
      branch.start === currentLocation ? branch.end : branch.start;
    return findRoutes(
      paths,
      nextLocation,
      [...currentRoute, currentLocation],
      validRoutes
    );
  });

  return validRoutes;
};

export { parsePaths, findRoutes };
