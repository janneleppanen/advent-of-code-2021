import { parseInput, process, getPolymerElements } from "./helpers";

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
    let { template: polymer, pairInsertions } = parseInput(input);

    polymer = process(polymer, pairInsertions);
    expect(polymer).toBe("NCNBCHB");

    polymer = process(polymer, pairInsertions);
    expect(polymer).toBe("NBCCNBBBCBHCB");

    polymer = process(polymer, pairInsertions);
    expect(polymer).toBe("NBBBCNCCNBBNBNBBCHBHHBCHB");

    polymer = process(polymer, pairInsertions);
    expect(polymer).toBe("NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB");

    for (let i = 0; i < 6; i++) {
      polymer = process(polymer, pairInsertions);
    }

    const elements = getPolymerElements(polymer);
    const mostCommonElementCount = Math.max(...Object.values(elements));
    const leastCommonElementCount = Math.min(...Object.values(elements));

    expect(mostCommonElementCount).toBe(1749);
    expect(leastCommonElementCount).toBe(161);
  });
});
