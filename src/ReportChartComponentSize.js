module.exports = (value) => {
  if (!value) { return ''; }
  if (["SMALL","MEDIUM","LARGE"].indexOf(value) < 0) {
    throw new Error('Invalid ReportChartComponentSize value: ' + value);
  }
  return value;
};