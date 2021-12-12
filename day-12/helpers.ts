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
  canVisit,
  location = "start",
  route = [],
  validRoutes = []
): Route[] => {
  if (!canVisit(location, route)) {
    return;
  }

  if (location === "end") {
    validRoutes.push([...route, location]);
    return;
  }

  let branches = paths.filter(
    (path) => path.start === location || path.end === location
  );

  branches.map((branch) => {
    const nextLocation = branch.start === location ? branch.end : branch.start;

    return findRoutes(
      paths,
      canVisit,
      nextLocation,
      [...route, location],
      validRoutes
    );
  });

  return validRoutes;
};

const Rules = {
  canVisitSameSmallCaveOnlyOnce: (location, route) => {
    const isSmallCave = location.toLocaleLowerCase() === location;
    const isLocationAlreadyInRoute = route.includes(location);

    if (isSmallCave && isLocationAlreadyInRoute) {
      return false;
    }

    return true;
  },
  canRevisitAnySmallCaveOnlyOnce: (location, route) => {
    const isSmallCave = location.toLowerCase() === location;
    const isLocationAlreadyInRoute = route.includes(location);
    const smallCaves = route.filter((loc) => loc.toLowerCase() === loc);
    const hasAlreadyVisitedSmallCaveTwice = smallCaves.some(
      (loc, index) => smallCaves.indexOf(loc) !== index
    );

    // Cannot visit start location twice
    if (route.length > 0 && location === "start") return false;

    if (
      isSmallCave &&
      isLocationAlreadyInRoute &&
      hasAlreadyVisitedSmallCaveTwice
    ) {
      return false;
    }

    return true;
  },
};

export { parsePaths, findRoutes, Rules };
