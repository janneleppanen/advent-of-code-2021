const parseDiagnosticReport = (input: string) => {
  const rows = input.split("\n");
  const base: number[] = Array(rows[0].length).fill(0);

  const decArray = rows.reduce((acc: number[], row: string) => {
    const numbers = row
      .split("")
      .map((value, index) => (acc[index] += parseInt(value)));
    return numbers;
  }, base);

  const gammaRate = decArray
    .map((value) => (value / rows.length > 0.5 ? 1 : 0))
    .join("");

  const epsilonRate = decArray
    .map((value) => (value / rows.length > 0.5 ? 0 : 1))
    .join("");

  return { gammaRate, epsilonRate };
};

const bin2dec = (bin) => {
  return parseInt(bin, 2);
};

const dec2bin = (dec) => {
  return (dec >>> 0).toString(2);
};

export { parseDiagnosticReport, bin2dec };
