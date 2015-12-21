module.exports = (value) => {
  if (!value) { return ''; }
  if (["Right","Bottom","OnChart"].indexOf(value) < 0) {
    throw new Error('Invalid ChartLegendPosition value: ' + value);
  }
  return value;
};