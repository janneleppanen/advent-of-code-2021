const errorBacketScoreMap = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

const autoCompleteBracketScoreMap = {
  ")": (score) => score * 5 + 1,
  "]": (score) => score * 5 + 2,
  "}": (score) => score * 5 + 3,
  ">": (score) => score * 5 + 4,
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
  remainingBuffer: string[];
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
          remainingBuffer: buffer,
          line,
        };
      }
    }
  }

  if (buffer.length > 0) {
    return {
      status: LineStatus.Incomplete,
      remainingBuffer: buffer,
      line,
    };
  }

  return {
    status: LineStatus.Complete,
    remainingBuffer: buffer,
    line,
  };
};

const isMatchingBrackets = (openingBracket: string, closingBracket: string) => {
  const openingBracketIndex = openingBrackets.indexOf(openingBracket);
  const closingBracketIndex = closingBrackets.indexOf(closingBracket);

  return openingBracketIndex === closingBracketIndex;
};

const getErrorScore = (lineReport: LineValidityReport) => {
  return errorBacketScoreMap[lineReport.lastBracket];
};

const getAutoCompleteScore = (lineReport: LineValidityReport) => {
  const neededClosingBrackets = lineReport.remainingBuffer
    .map((bracket) => closingBrackets[openingBrackets.indexOf(bracket)])
    .reverse();

  const score = neededClosingBrackets.reduce((score, bracket) => {
    return autoCompleteBracketScoreMap[bracket](score);
  }, 0);

  return score;
};

export { parseLines, validateLine, getErrorScore, getAutoCompleteScore };
