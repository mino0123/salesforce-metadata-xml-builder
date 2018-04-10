module.exports = (value) => {
  if (!value) { return ''; }
  if (["light","dark"].indexOf(value) < 0) {
    throw new Error('Invalid ChartTheme value: ' + value);
  }
  return value;
};