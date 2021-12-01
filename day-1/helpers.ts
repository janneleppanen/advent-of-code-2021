const getDepthIncreases = (depthMeasures: Number[]) => {
  let depthIncreasesTimes = 0;

  for (let i = 0; i < depthMeasures.length; i++) {
    if (depthMeasures[i] < depthMeasures[i + 1]) {
      depthIncreasesTimes++;
    }
  }

  return depthIncreasesTimes;
};

export { getDepthIncreases };
