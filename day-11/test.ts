import { parseOctopuses, simulate, getOctopusMap } from "./helpers";

const _input = `11111
19991
19191
19991
11111`;

const input = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

describe("Day 11", () => {
  test("Part 1", () => {
    const octopuses = parseOctopuses(input);
    const simulationResult = simulate(octopuses, 100);

    expect(simulationResult.flashCount).toBe(1656);
  });
});
