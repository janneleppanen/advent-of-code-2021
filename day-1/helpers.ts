const parseDepthMeasures = (data: string, slidingWindow = 1) => {
  const depthMeasures = data.split("\n").map(Number);

  return depthMeasures.map((_, index) => {
    const measuresInSlidingWindow = depthMeasures.slice(
      index,
      index + slidingWindow
    );

    return measuresInSlidingWindow.reduce((a, b) => a + b, 0);
  });
};

const getDepthIncreases = (depthMeasures: number[]) => {
  const offsetArray = depthMeasures.map((value, index) => {
    return depthMeasures[index + 1] - value;
  });

  const increases = offsetArray.filter((value) => value > 0).length;

  return increases;
};

export { getDepthIncreases, parseDepthMeasures };
