module.exports = (value) => {
  if (!value) { return ''; }
  if (["Tiny","Small","Medium","Large","Huge"].indexOf(value) < 0) {
    throw new Error('Invalid ReportChartSize value: ' + value);
  }
  return value;
};