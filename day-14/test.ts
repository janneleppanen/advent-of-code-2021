import {
  parseInput,
  process,
  getPolymerElements,
  stringToPairMap,
} from "./helpers";

const input = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;

describe("Day 14", () => {
  test("Part 1", () => {
    let { pairMap, pairInsertions, template } = parseInput(input);

    for (let i = 0; i < 10; i++) {
      pairMap = process(pairMap, pairInsertions);
    }

    const elements = getPolymerElements(pairMap, template);

    expect(elements.B).toBe(1749);
    expect(elements.C).toBe(298);
    expect(elements.N).toBe(865);
    expect(elements.H).toBe(161);
  });

  test("Part 2", () => {
    let { template, pairMap, pairInsertions } = parseInput(input);

    for (let i = 0; i < 40; i++) {
      pairMap = process(pairMap, pairInsertions);
    }

    const elements = getPolymerElements(pairMap, template);

    const mostCommonElementCount = Math.max(...Object.values(elements));
    const leastCommonElementCount = Math.min(...Object.values(elements));

    expect(mostCommonElementCount).toBe(2192039569602);
    expect(leastCommonElementCount).toBe(3849876073);
  });
});
