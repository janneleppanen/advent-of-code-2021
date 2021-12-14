const parseInput = (input: string) => {
  const [template, pairs] = input.split("\n\n");
  const pairInsertions = {};
  const pairMap = stringToPairMap(template);

  pairs.split("\n").forEach((p) => {
    const [key, value] = p.split(" -> ");
    pairInsertions[key] = value;
  });

  return {
    pairMap,
    pairInsertions,
    template,
  };
};

const stringToPairMap = (template: string): object => {
  const pairMap = {};

  for (let i = 0; i < template.length - 1; i++) {
    const char = template[i];
    const nextChar = template[i + 1];
    const key = `${char}${nextChar}`;

    if (pairMap[key]) {
      pairMap[key] += 1;
    } else {
      pairMap[key] = 1;
    }
  }

  return pairMap;
};

const process = (pairMap: object, pairInsertions: {}) => {
  let newPairMap = {};

  Object.keys(pairMap).forEach((key) => {
    const count = pairMap[key];
    const newChar = pairInsertions[key];

    if (newChar) {
      const pair1 = key[0] + newChar;
      const pair2 = newChar + key[1];

      newPairMap[pair1] = newPairMap?.[pair1]
        ? newPairMap[pair1] + count
        : count;
      newPairMap[pair2] = newPairMap?.[pair2]
        ? newPairMap[pair2] + count
        : count;
    }
  });

  return newPairMap;
};

type Elements = { [key: string]: number };

const getPolymerElements = (pairMap: object, template): Elements => {
  const elements = {};

  Object.keys(pairMap).forEach((key) => {
    const [char] = key.split("");
    const count = pairMap[key];

    elements[char] = elements[char] ? elements[char] + count : count;
  });

  const lastChar = template[template.length - 1];
  elements[lastChar] = elements[lastChar] ? elements[lastChar] + 1 : 1;

  return elements;
};

export { parseInput, process, stringToPairMap, getPolymerElements };
