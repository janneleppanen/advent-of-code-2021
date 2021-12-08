import run from "../utils/run";
import {
  parseEntries,
  getPatternConverter,
  convertOutputToNumbers,
} from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const entries = parseEntries(input);
  const numbersToFind = [1, 4, 7, 8];
  let countOfPart1Numbers = 0;

  entries.forEach((entry) => {
    const converter = getPatternConverter(entry.patterns);
    const numbers = convertOutputToNumbers(entry.output, converter);
    countOfPart1Numbers += numbers.filter((n) =>
      numbersToFind.includes(n)
    ).length;
  });

  resolve(countOfPart1Numbers);
});
