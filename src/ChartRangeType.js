module.exports = (value) => {
  if (!value) { return ''; }
  if (["Auto","Manual"].indexOf(value) < 0) {
    throw new Error('Invalid ChartRangeType value: ' + value);
  }
  return value;
};