const correctPattern = {
  abcefg: 0,
  cf: 1,
  acdeg: 2,
  acdfg: 3,
  bcdf: 4,
  abdfg: 5,
  abdefg: 6,
  acf: 7,
  abcdefg: 8,
  abcdfg: 9,
};

const parseEntries = (input: string) => {
  return input.split("\n").map(parseEntry);
};

const parseEntry = (input: string) => {
  const [patternString, outputString] = input.split(" | ");
  const parseNumbers = (str: string) =>
    str.split(" ").map((str) => {
      return str
        .split("")
        .sort((a, b) => (a > b ? 1 : -1))
        .join("");
    });

  return {
    patterns: parseNumbers(patternString),
    output: parseNumbers(outputString),
  };
};

const getPatternConverter = (patterns: string[]) => {
  const charMap = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
  };
  const charCounts = patterns
    .join("")
    .split("")
    .reduce((acc, char) => {
      return {
        ...acc,
        [char]: acc[char] ? acc[char] + 1 : 1,
      };
    }, {});

  const numberPatterns = [];
  numberPatterns[1] = patterns.find((pattern) => pattern.length === 2);
  numberPatterns[4] = patterns.find((pattern) => pattern.length === 4);
  numberPatterns[7] = patterns.find((pattern) => pattern.length === 3);

  charMap.a = numberPatterns[7]
    .split("")
    .find((char) => !numberPatterns[1].includes(char));
  charMap.b = Object.keys(charCounts).find((char) => charCounts[char] === 6);
  charMap.c = Object.keys(charCounts).find(
    (char) => charCounts[char] === 8 && char !== charMap.a
  );
  charMap.d = Object.keys(charCounts).find(
    (char) => charCounts[char] === 7 && numberPatterns[4].includes(char)
  );
  charMap.e = Object.keys(charCounts).find((char) => charCounts[char] === 4);
  charMap.f = Object.keys(charCounts).find((char) => charCounts[char] === 9);
  charMap.g = Object.keys(charCounts).find(
    (char) => charCounts[char] === 7 && char !== charMap.d
  );

  const coverter = swapObjectKeysAndValues(charMap);

  return coverter;
};

const convertOutputToNumbers = (output: string[], converter: object) => {
  return output.map((outputNumber) => {
    const convertedOutput = outputNumber
      .split("")
      .map((char) => converter[char])
      .sort((a, b) => (a > b ? 1 : -1))
      .join("");

    return correctPattern[convertedOutput];
  });
};

const swapObjectKeysAndValues = (obj: object) => {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => ({ ...acc, [value]: key }),
    {}
  );
};

export { parseEntries, getPatternConverter, convertOutputToNumbers };
