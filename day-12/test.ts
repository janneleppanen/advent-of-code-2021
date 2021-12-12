import { parsePaths, findRoutes, Rules } from "./helpers";

const input1 = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

const input2 = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`;

const input3 = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`;

describe("Day 12", () => {
  test("Part 1", () => {
    const paths1 = parsePaths(input1);
    const routes1 = findRoutes(paths1, Rules.canVisitSameSmallCaveOnlyOnce);
    expect(routes1.length).toBe(10);

    const paths2 = parsePaths(input2);
    const routes2 = findRoutes(paths2, Rules.canVisitSameSmallCaveOnlyOnce);
    expect(routes2.length).toBe(19);

    const paths3 = parsePaths(input3);
    const routes3 = findRoutes(paths3, Rules.canVisitSameSmallCaveOnlyOnce);
    expect(routes3.length).toBe(226);
  });

  test("Part 2", () => {
    const paths1 = parsePaths(input1);
    const routes1 = findRoutes(paths1, Rules.canRevisitAnySmallCaveOnlyOnce);
    expect(routes1.length).toBe(36);

    const paths2 = parsePaths(input2);
    const routes2 = findRoutes(paths2, Rules.canRevisitAnySmallCaveOnlyOnce);
    expect(routes2.length).toBe(103);

    const paths3 = parsePaths(input3);
    const routes3 = findRoutes(paths3, Rules.canRevisitAnySmallCaveOnlyOnce);
    expect(routes3.length).toBe(3509);
  });
});
