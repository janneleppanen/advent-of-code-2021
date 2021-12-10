const bracketPoits = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

const parseLines = (input: string) => {
  return input.split("\n").map((line) => line.split(""));
};

const openingBrackets = ["{", "[", "(", "<"];
const closingBrackets = ["}", "]", ")", ">"];

export enum LineStatus {
  Complete = "complete",
  Incomplete = "incomplete",
  Corrupted = "corrupted",
}

type LineValidityReport = {
  status: LineStatus;
  line: string[];
  lastBracket?: string;
};

const validateLine = (line: string[]): LineValidityReport => {
  const buffer: string[] = [];

  for (let i = 0; i < line.length; i++) {
    const bracket = line[i];

    if (openingBrackets.includes(bracket)) {
      buffer.push(bracket);
    } else if (closingBrackets.includes(bracket)) {
      if (isMatchingBrackets(buffer[buffer.length - 1], bracket)) {
        buffer.pop();
      } else {
        return {
          status: LineStatus.Corrupted,
          lastBracket: bracket,
          line,
        };
      }
    }
  }

  if (buffer.length > 0) {
    return {
      status: LineStatus.Incomplete,
      line,
    };
  }

  return {
    status: LineStatus.Complete,
    line,
  };
};

const isMatchingBrackets = (openingBracket: string, closingBracket: string) => {
  const openingBracketIndex = openingBrackets.indexOf(openingBracket);
  const closingBracketIndex = closingBrackets.indexOf(closingBracket);

  return openingBracketIndex === closingBracketIndex;
};

const getErrorPoints = (lineReport: LineValidityReport) => {
  return bracketPoits[lineReport.lastBracket];
};

export { parseLines, validateLine, getErrorPoints };
