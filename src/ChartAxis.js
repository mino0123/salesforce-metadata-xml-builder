module.exports = (value) => {
  if (!value) { return ''; }
  if (["x","y","y2","r"].indexOf(value) < 0) {
    throw new Error('Invalid ChartAxis value: ' + value);
  }
  return value;
};