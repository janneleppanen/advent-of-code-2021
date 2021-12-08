import run from "../utils/run";
import {
  parseEntries,
  getPatternConverter,
  convertOutputToNumbers,
} from "./helpers";

run(__dirname, (input: string, resolve: Function) => {
  const entries = parseEntries(input);
  const numbersToFind = [1, 4, 7, 8];

  let countOf1478 = entries.reduce((sum, entry) => {
    const converter = getPatternConverter(entry.patterns);
    const numbers = convertOutputToNumbers(entry.output, converter);

    return sum + numbers.filter((n) => numbersToFind.includes(n)).length;
  }, 0);

  resolve(countOf1478);

  const sum = entries.reduce((sum, entry) => {
    const converter = getPatternConverter(entry.patterns);
    const numbers = convertOutputToNumbers(entry.output, converter);

    return sum + parseInt(numbers.join(""));
  }, 0);

  resolve(sum);
});
