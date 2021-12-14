const parseInput = (input: string) => {
  const [template, pairs] = input.split("\n\n");
  const pairInsertions = {};
  pairs.split("\n").forEach((p) => {
    const [key, value] = p.split(" -> ");
    pairInsertions[key] = value;
  });

  return {
    template,
    pairInsertions,
  };
};

const process = (template: string, pairInsertions: {}) => {
  const newTemplate = [];
  const templateArray = template.split("");

  templateArray.forEach((char, index) => {
    const prev = templateArray[index - 1];
    const newChar = pairInsertions[`${prev}${char}`];

    if (prev && newChar) {
      newTemplate.push(newChar);
    }
    newTemplate.push(char);
  });

  return newTemplate.join("");
};

type Elements = { [key: string]: number };

const getPolymerElements = (polymer: string): Elements => {
  const elements = {};

  polymer.split("").forEach((char) => {
    if (elements[char]) {
      elements[char] += 1;
    } else {
      elements[char] = 1;
    }
  });

  return elements;
};

export { parseInput, process, getPolymerElements };
