type Map = {
  0: number;
  1: number;
};

const parseDiagnosticReport = (input: string) => {
  const rows = input.split("\n");
  const base: Map[] = Array(rows[0].length);

  rows.forEach((row) => {
    const numbers = row.split("");

    numbers.forEach((val, index) => {
      if (!base[index]) {
        base[index] = { 0: 0, 1: 0 };
      }
      base[index][val]++;
    });
  });

  return base;
};

const bin2dec = (bin) => {
  return parseInt(bin, 2);
};

const dec2bin = (dec) => {
  return (dec >>> 0).toString(2);
};

const getGammaRate = (report: Map[]) => {
  return report.map((map) => (map[0] > map[1] ? 0 : 1)).join("");
};

const getEpsilonRate = (report: Map[]) => {
  return report.map((map) => (map[0] > map[1] ? 1 : 0)).join("");
};

const getOxygenGeneratorRating = (
  needle: number,
  report: Map[],
  input: string
) => {
  if (input.split("\n").length === 1) {
    return input;
  }

  const pos = report[needle][0] > report[needle][1] ? 0 : 1;

  const newInput = input
    .split("\n")
    .filter((row) => parseInt(row.split("")[needle]) === pos)
    .join("\n");

  const newReport = parseDiagnosticReport(newInput);

  return getOxygenGeneratorRating(needle + 1, newReport, newInput);
};

const getCo2ScrubberRating = (needle: number, report: Map[], input: string) => {
  if (input.split("\n").length === 1) {
    return input;
  }

  const pos = report[needle][0] > report[needle][1] ? 1 : 0;

  const newInput = input
    .split("\n")
    .filter((row) => parseInt(row.split("")[needle]) === pos)
    .join("\n");

  const newReport = parseDiagnosticReport(newInput);

  return getCo2ScrubberRating(needle + 1, newReport, newInput);
};

export {
  parseDiagnosticReport,
  bin2dec,
  getGammaRate,
  getEpsilonRate,
  getOxygenGeneratorRating,
  getCo2ScrubberRating,
};
