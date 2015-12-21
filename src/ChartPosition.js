module.exports = (value) => {
  if (!value) { return ''; }
  if (["CHART_TOP","CHART_BOTTOM"].indexOf(value) < 0) {
    throw new Error('Invalid ChartPosition value: ' + value);
  }
  return value;
};